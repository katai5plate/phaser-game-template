const fs = require('fs-extra');
const { resolve } = require('path');
const { title, width, height, icon } = require('../../metaConfig.json');
const [_, __, outDir] = process.argv;

const json = {
  name: title,
  window: {
    width,
    height,
    icon,
    toolbar: false
  },
  main: 'index.html',
  version: '1.0',
  'chromium-args': '--disable-devtools'
};

fs.writeJSONSync(resolve(outDir, 'package.json'), json);
