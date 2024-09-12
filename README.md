# Percy-with-Playwright-on-BrowserStack

This is a sample code repository prepared by grandEL for running percy with playwright on BrowserStack with a custom framework of importing URLS from a JSON file  

 ode-js-playwright-browserstackThis repo contains samples for running [Playwright](https://playwright.dev/docs/intro) tests on BrowserStack using the browserstack-node-sdk.
## Setup
* Clone the repo `git clone -b sdk https://github.com/grandEL-dsouza/Percy-with-Playwright-on-BrowserStack/` and run `cd Percy-with-Playwright-on-BrowserStack`.
* Set `BROWSERSTACK_USERNAME` and `BROWSERSTACK_ACCESS_KEY` in `browserstack.yml` file.
* Run `npm i` to install the dependencies.
Run  `npm fs`

Run `npm install --save @percy/cli`
Install the relevant SDK
`npm install @percy/playwright`
Create Percy token and export the token
export PERCY_TOKEN="<your token here>"



## Running your tests
- To run the sample tests in parallel across the platforms specified in the `browserstack.yml`, run `npx percy exec -- npm run sample-test
`.
