const {chromium} = require('playwright');
require('dotenv').config();

(async () => {
  const password = process.env.ROUTER_ADMIN_PASSWORD;
  const browser = await chromium.launch({
    headless: true
  });

  const page = await browser.newPage();
  page.setDefaultTimeout(60_000);

  // 1. Navigate to the specified URL
  await page.goto('http://192.168.31.1/cgi-bin/luci/web');

  // 2. Type the password into the specified input
  await page.fill('#password', password);

  // 3. Click the specified button
  await page.click('#btnRtSubmit');

  // 4. Wait for the navigation to complete
  await page.waitForNavigation();

  // 5. Click the specified dropdown
  await page.click('#sysmenu');
  await page.waitForTimeout(1_000);

  // 6. Click the dropdown
  await page.click('#toReboot');

  // 7. Click the reboot button
  await page.click('#rebootAction');
  await page.waitForTimeout(1_000);

  // 8. Click the confirm button
  await page.click('a[data-id="ok"]');

  // Close the browser
  await browser.close();
})();
