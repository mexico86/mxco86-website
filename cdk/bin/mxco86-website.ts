#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/cdk');
import { Mxco86WebsiteStack } from '../lib/mxco86-website-stack';

const app = new cdk.App();

new Mxco86WebsiteStack(app, 'Mxco86WebsiteStack');
