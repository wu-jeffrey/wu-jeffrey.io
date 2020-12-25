# Jeff W's Personal Website

## Architecture
- Rails backend with statically served react build
- Static HTML pages for admin to create blog posts / add skills and such
- MySQL DB


## Setup
`bundle install`
`rails db:create db:migrate`
`rails s`

`cd client`
`yarn install`
`yarn start`

React i.e. `/client` should be configured to have a development proxy server set to the Rails port