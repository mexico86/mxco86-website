+++
title = "Multi-Level Wardley Mapping"
author = ["Matthew Ryall"]
date = 2020-03-02T00:00:00+00:00
tags = ["organisations", "Wardley Maps"]
draft = false
+++

## Draft {#draft}


### Introduction / Premise {#introduction-premise}

Recently I've been thinking about why we use certain approaches in
particular ways, which I think is an effort to retrofit a more formal
method to the loosely associated set of techniques we tend to use. I spent
this morning considering a set of Wardley Maps, which we use extensively
as a tool to help with the development of a shared context within a group,
that we produced as part of a long-term engagement in the fashion
industry.

We often use the mapping process and the resulting maps to come to a shared
understanding of how the various activities of a larger group fit into an
overall narrative. We also sometimes use more specific maps to surface and
discuss the technical implementation of smaller teams working in specific
areas. This has evolved over time into a multi-level approach to mapping,
with generally a single high-level organisation map and multiple more
specific maps showing components, composition and external context in more
detail.


### Top-Level Map - Organisational Context and Business Need {#top-level-map-organisational-context-and-business-need}

For this set of maps the group we were working with initially had fairly
loosely defined objectives. We were mainly working on adding internal
technical capability where previously it was outsourced. This meant that
the actual anchoring needs for the maps needed some thought. What we found
was that producing a rough map gave us an artefact to use in these
discussions with the group. It also served a purpose in upward
communication of team activities to C-level executives. The act of showing
how our proposed activities tied in with strategic objectives sparked
conversation on the detail of those objectives around the organisation. It
also served as validation that activities were anchored to an business
need which was previously not always clear and as the conversations
continued the anchoring needs of the maps could be refined and agreed.

{{< figure src="/images/articles/1st-level-organisational-wardley-map.png" caption="Figure 1: Organisation Level Map (Simplified)" >}}


### Second-Level Maps - Technical Context(s) {#second-level-maps-technical-context--s}

Some of the more detailed maps were used as much more of a technical tool.
I see these as a 'zoom' into specific area of the overall map, usually an
area which we have defined as a particular sub-team responsibility. The
exercise of mapping these detailed areas was a way of discussing where
sub-team focus and energy was directed (i.e. work in the genesis and
custom space) and where this was unnecessary (i.e. there were readily
available product and commodity components). The teams were expected to
make their own technical decisions around the systems they were building
but this allowed some constraints and guiding principles (mainly some
carefully chosen elements of [Wardley's Doctrine](https://blog.gardeviance.org/2016/05/wardleys-doctrine.html)) to be surfaced and
discussed as a group. The real value in these maps was in showing the need
for value-creation work in a new space and highlighting where team effort
may be wasted.

An example of this type of mapping is that of a retail communication tool
focused on direct customer interactions (figure 1's 'Team 4'). The team
spent time assessing the market around what they were trying to achieve
and looking at the technical platforms that could help them. Mapping was
used in both of these activities to help with perspective and context.
'Figure 2' shows the technical platform comprised of mainly commodity
technology with some product-stage components. What was clearly missing at
the time were tools to create and manage different customer interaction
flows. As a result this was where most of the development effort was
directed.

{{< figure src="/images/articles/2nd-level-technical-wardley-map.png" caption="Figure 2: More Detailed Technical Map" >}}

This more technical chart can be related to the higher level
organisational map, however, the higher-level is not just a simple roll-up
of the lower-level components. In fact most of the detail shows product
stage and commodity components with just a few sitting in custom build.
However, the fact that a large, important and necessary technical
component sits in the custom-build stage places the component in that
domain in the higher-level representation. The fact that we are
custom-building an important component determines this. This very much
depends on the size and complexity of the custom component. A simple and
easy to deal with custom item would not exert that level of force on the
overall activity.


### Second-Level Maps - External Context(s) {#second-level-maps-external-context--s}

The two previous maps do not show anything about the external environment
that the group is operating in. We found that a third map was useful to
represent this, sometimes focusing on a specific component that we felt
was worth effort. Mapping the environment of these components helped us
stay aware of other developments in the space and how things were moving
relative to what we were doing. i.e. was our work still valuable and was
the effort still justified. It also helped us to spotlight organisational
inertia where that was a concern, rather than having these elements as
secondary items on a more complex map.

{{< figure src="/images/articles/2nd-level-context-wardley-map.png" caption="Figure 3: More Detailed Context Map" >}}


### The Magic Number {#the-magic-number}

The three maps shown are all related to the same small-ish team working in
the same larger organisation. They try and show different aspects of the
same activity. We found producing and using all the maps useful in
different ways and they helped us work through different problems and with
different conversations.

There is obviously a cost to producing and maintaining a number of
artefacts, especially when they are representing views and perspectives of
the same overall activity. The maps shown are representations of documents
that were more often than not scribbled on bits of paper. A low-overhead
method of mapping is key to allowing people to explore the processes and
represent different aspects on different charts, and also keep things in
motion as time passes. We do find that the ability to produce nice looking
artefacts does help with credibility when trust-building is needed. There
are some production techniques we use to help with the task of producing
the nice-looking maps but we'll save those for another post.


### What Can We Use In 'The Method'? {#what-can-we-use-in-the-method}

As this is the start of trying to sort-of-formalise our low-overhead
approach to development and technology what have we learned from this
mapping activity and the utility of this set of maps? Having thought about
it:

-   High-level maps can show a clear link between an activity and a
    high-level organisational need
-   Limiting the components on a particular map allows focus on a certain
    area and user need
-   Pulling out components for more focus allows for different views on a
    particular area (technical component makeup, external market etc.)
-   Maps can be related to each other i.e. a more detailed map can highlight
    the reason for the placing of a particular component on a higher level
    map
-   The process of producing multiple maps helps to spark discussion around
    the anchoring points
-   The more maps you have the more your mapping overhead. It helps to keep
    things simple and fairly transient, especially for the more detailed
    representations that become outdated very quickly
