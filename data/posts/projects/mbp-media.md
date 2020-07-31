---
title: "MBP Media"
role: "Front-end & Design"
github: "https://github.com/JackTheDane/PortfolioSSG"
skills: [ "React", "TypeScript", "NextJS", "Sass", "CI/CD", "Static Site Generation", "Spectre CSS", "SwiperJS" ]
images: ['2020-07-30-16-29-44.jpg', '2020-07-30-15-59-44.jpg', '2020-07-30-16-30-55.jpg']
order: 0
---

In the first half of 2020, I decided to update my personal portfolio site: _MBPMedia.com_, with certain improvements gathered since the original site was first created. These include utilizing _Static Site Generation_ (SSG), improving navigation and mobile experience, as well as revamping the design to better highlight the projects.

The site is hosted using Netlify for Continuous Integration & Deployment.

**To view my original portfolio site, [click here.](https://mbp-portfolio-old.netlify.app)**

### Why Static Site Generation?

My original portfolio was made using Facebook's own scaffolding tool called _Create React App_ (CRA). While CRA is an excellent tool for most applications, it has some side effects that make it less ideal when creating presentational websites. These can include longer time to _First Contentful Paint_, meaning that the site is blank for a longer time, as the user will not be shown content until all JavaScript has been loaded, parsed and the DOM has been updated. In addition, CRA can also lead to worse _Search Engine Optimization_ (SEO), as search engines must first parse the JavaScript before evaluating the content of the site.

Using Static Site Generation, means that the content of the site is saved directly as HTML during the Build step of a site's deployment, meaning that browsers and search engines can read the site without first loading it's JavaScript.

Using certain React frameworks, this can be done while keeping the developer experience and fast reactivity of Create React App and app-like feel of Single Page Applications.

#### Why NextJS?

As a somewhat unconventional choice, I decided to use NextJS, which is a framework typically associated with Server-side Rencering (SSR), which requires a running Node instance, and builds each page on-demand when it is requested. However, as of NextJS ver. 9.3, statically exporting sites using the framework was added as a feature, which meant that SSG was now possible out of the box, using NextJS.

While this feature is still not as advanced as something found in for example _GatsbyJS_, which is one of the most-used React Frameworks for SSG, it was still exiting news, as it helps blur the lines between Static and Server-side rendered sites, potentially allowing for the strength of both to be combined using NextJS for the future.

Therefore, I decided to invest my time into getting familiar with this aspect of NextJS, rather than learning a different framework, as NextJS is a more versatile tool that will allow for more freedom when maintaining the site in the future.
