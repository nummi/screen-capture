const { Chromeless } = require('chromeless');
const path = require('path');

const FILE       = '      file: ';
const USER_AGENT = 'user agent: ';
const VIEWPORT   = '  viewport: ';

async function run(url, config, index) {
  const prefix = `${index}: `;

  if(!url) {
    console.log('aborting. url is required');
    return;
  }

  if(!config.viewport) {
    console.log(prefix, 'aborting. viewport config is required');
    return;
  }

  const chromeless = new Chromeless({ viewport: config.viewport });
  console.log(prefix, VIEWPORT, config.viewport);

  if(config.userAgent) {
    await chromeless.setUserAgent(config.userAgent);
    console.log(prefix, USER_AGENT, config.userAgent);
  }

  await chromeless.goto(url);
  const filename = `screenshot-${index}-${config.viewport.width}x${config.viewport.height}`;
  const screenshot = await chromeless.screenshot({
    filePath: path.join(__dirname, filename)
  });
  console.log(prefix, FILE, screenshot); // prints local file path or S3 url

  await chromeless.end();
}

module.exports = run;