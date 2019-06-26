import { Construct, Stack, StackProps } from "@aws-cdk/cdk";
import { Bucket } from "@aws-cdk/aws-s3";
import { CloudFrontWebDistribution } from "@aws-cdk/aws-cloudfront";

export class Mxco86WebsiteStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const sourceBucket = new Bucket(this, "mxco86-web-bucket", {
      bucketName: "www.mexico86.co.uk",
      versioned: true
    });

    const nonprodBucket = new Bucket(this, "mxco86-nonprod-web-bucket", {
      bucketName: "nonprod.mexico86.co.uk",
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "error.html",
      versioned: true
    });

    const logBucket = new Bucket(this, "mxco86-web-log-bucket", {
      bucketName: "logs.mexico86.co.uk",
      versioned: true
    });

    const distribution = new CloudFrontWebDistribution(
      this,
      "mxco86-cloudfront-distribution",
      {
        defaultRootObject: "index.html",
        aliasConfiguration: {
          acmCertRef:
            "arn:aws:acm:us-east-1:068087527308:certificate/842b8374-5e6a-481d-98ea-f115830ebd6f",
          names: ["mexico86.co.uk", "*.mexico86.co.uk"]
        },
        loggingConfig: {
          bucket: logBucket
        },
        originConfigs: [
          {
            s3OriginSource: {
              s3BucketSource: sourceBucket
            },
            behaviors: [{ isDefaultBehavior: true }]
          }
        ]
      }
    );
  }
}
