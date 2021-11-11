const expectChai = require('chai').expect;

describe('chrome ios', () => {
    it('should let me switch between app and Safari', () => {

        const safariBundleId = "com.google.chrome.ios";
        const nativeAppBundleId = "com.browserstack.Sample-iOS"; // replace this with your app's bundle id
        const url = "https://css-tricks.com/examples/iFrameResize/crossdomain.php#";

        // Launch Chrome and load  URL
        driver.execute('mobile: launchApp', {bundleId: safariBundleId});
        const search = $("//*[@value='Search or type URL']");
        search.setValue(url + '\n');
        // Perform the rest of your test in the chrome browser
        driver.pause(5000);
    });
});
