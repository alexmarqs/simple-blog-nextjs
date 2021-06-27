import * as playwright from 'playwright-aws-lambda';
import { getAbsoluteURL } from '@/lib/utils';

export default async function (req, res) {
  try {
    // Start the browser with the AWS Lambda wrapper (playwright-aws-lambda)
    const browser = await playwright.launchChromium();
    // Create a page with the Open Graph image size best practise

    const page = await browser.newPage({
      viewport: {
        width: 1200,
        height: 630
      }
    });
    // Generate the full URL out of the given path (GET parameter)
    const url = getAbsoluteURL(req.query.path || '');
    await page.goto(url, {
      timeout: 15 * 1000
    });
    const data = await page.screenshot({
      type: 'png'
    });
    await browser.close();
    // Set the s-maxage property which caches the images then on the Vercel edge
    res.setHeader('Cache-Control', 's-maxage=31536000, stale-while-revalidate');
    res.setHeader('Content-Type', 'image/png');
    // write the image to the response with the specified Content-Type
    res.end(data);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message);
    res.status(500).send('Internal Server Error');
  }
}
