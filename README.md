# Blog with Gatsby and Sanity.io

_Fully customizable blog template with a React.js front-end._

## What you have

- A blazing fast blog with [Gatsby.js](https://gatsbyjs.org)
- Structured content using [Sanity.io](https://www.sanity.io)
- Global deployment on [Netlify](https://netlify.com)

## Getting started

1. Clone this repository
2. `npm install` in the project root folder.
3. `cd studio && sanity login` to login to Sanity or create a new account.
4. `sanity init -y --create-project "Project Name" --dataset development --output-path .` to initialize a new Sanity project.
5. `sanity dataset create production` to create a production dataset for Sanity studio.
6. `touch .env.development .env.production` to create environment variables for the Studio.
7. Get your Sanity `projectId` from `sanity.json`.
8. In `.env.development` and `.env.production` add `SANITY_STUDIO_API_PROJECT_ID="yourProjectId"`.
9. In `.env.development` add `SANITY_STUDIO_API_DATASET=development`.
10. In `.env.production` add `SANITY_STUDIO_API_DATASET=production`

## Enable real-time content preview on development

1. Go to your project’s API settings on manage.sanity.io https://manage.sanity.io/projects/`yourProjectId`/settings/api and create a token with read rights.
2. Rename `.env.development.template` to `.env.development` and paste in the token: `SANITY_READ_TOKEN="yourTokenHere"`.
3. Restart the development server (`ctrl + C` and `npm run dev`).

If you want to turn off preview you can set `watchMode: false` in gatsby-config.js. If you just want to preview published changes you can set `overlayDrafts: false` in gatsby-config.js.

## Running the project

1. `npm run dev` to start the studio and frontend locally with `.env.development` variables
   - Your studio should be running on [http://localhost:3333](http://localhost:3333)
   - Your frontend should be running on [http://localhost:8000](http://localhost:8000)
2. `npm run build` to build to production locally with `.env.production` variables

## Features

- [Typography.js](https://kyleamathews.github.io/typography.js/)
- [Styled Components](https://styled-components.com/)


## Deploy changes

Netlify automatically deploys new changes commited to master on GitHub. If you want to change deployment branch, do so in [build & deploy settings on Netlify](https://www.netlify.com/docs/continuous-deployment/#branches-deploys).

## Stuck? Get help

[![Slack Community Button](https://slack.sanity.io/badge.svg)](https://slack.sanity.io/)

Join [Sanity’s developer community](https://slack.sanity.io) or ping us [on twitter](https://twitter.com/sanity_io).
