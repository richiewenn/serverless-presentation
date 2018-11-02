const puppeteer = require('puppeteer');

let page;

async function getBrowserPage () {
  // [START start_browser]
  const browser = await puppeteer.launch({args: ['--no-sandbox']});
  // [END start_browser]
  return browser.newPage();
}

exports.screenshot = async (req, res) => {
  const url = req.query.url;

  if (!url) {
    return res.status(400).send('Please provide URL as GET parameter, for example: <a href="?url=https://mall.cz">?url=https://mall.cz</a>');
  }

  if (!page) {
    page = await getBrowserPage();
  }

  await page.goto(url);
  const imageBuffer = await page.screenshot();
  res.set('Content-Type', 'image/png');
  res.send(imageBuffer);
};

// gcloud functions deploy screenshot --runtime nodejs8 --trigger-http --memory 1024 --region europe-west1