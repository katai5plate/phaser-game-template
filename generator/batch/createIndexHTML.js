const fs = require('fs-extra');
const { resolve } = require('path');
const {
  title,
  icon,
  backgound_color,
  fit_width,
  fit_height
} = require('../../metaConfig.json');
const [_, __, outDir] = process.argv;

const html = [
  '<!DOCTYPE html>',
  '<html>',
  '  <head>',
  `    <title>${title}</title>`,
  `    <link rel="shortcut icon" href="${icon}" />`,
  '    <style>',
  '      body {',
  `        background-color: ${backgound_color};`,
  '        margin: 0;',
  '        padding: 0;',
  '      }',
  '      canvas {',
  `        width: ${fit_width ? '100%' : 'auto'};`,
  `        height: ${fit_height ? '100%' : 'auto'};`,
  '        position: absolute;',
  '        margin: auto;',
  '        top: 0px;',
  '        left: 0px;',
  '        right: 0px;',
  '        bottom: 0px;',
  '      }',
  '    </style>',
  '    <script src="./lib/engine.js"></script>',
  '  </head>',
  '  <body>',
  '    <script src="./lib/index.js"></script>',
  '  </body>',
  '</html>'
].join('\n');

fs.writeFileSync(resolve(outDir, 'index.html'), html);
