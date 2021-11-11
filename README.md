# Chrome on iOS Mobile Tests for Browserstack App Automate
This repo includes reference WebdriverIO scripts for opening chrome browser on iOS via App Automate 

For more information on running WDIO tests with Browserstack, please see WDIO's [BrowserStack Service](https://webdriver.io/docs/browserstack-service/) documentation.

Before running any of these scripts, you need to do the following on your environment:
* Ensure you have valid BrowserStack credentials 
* Upload a valid app to use in case #3

## Switch between native apps and the device's browser
These tests demonstrate how to switch between the browser and a native app in order to test deeplink functionality. Because this scenario requires an app to be installed on the device, it runs on BrowserStack's [App Automate](https://app-automate.browserstack.com/) product instead of [Automate](https://automate.browserstack.com/)
### Test case
1. Launch a native app
2. Switch to the chrome browser app
3. Perform the intended steps in the browser

### Execution
#### ios
* Command: `npm run chrome-ios`
