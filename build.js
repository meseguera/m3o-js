const chalk = require('chalk');
const { promisify } = require('util');
const fs = require('fs').promises;
const rimraf = promisify(require('rimraf'));
const exec = promisify(require('child_process').exec);

function log(text) {
  console.log(`${chalk.cyan('M3O JS:')} ${text}`);
}

async function build() {
  log('Deleting old dist folder...');

  try {
    await rimraf('./dist');
    log('Building commonjs version...');
    await exec('tsc');
    log('Building es version...');
    await exec('tsc --p tsconfig.es.json');
    fs.writeFile(`./dist/package.json`, `{"module": "./esm/index.js"}`, 'utf8');
    log('Build complete!');
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

build();
// const tsCommonjs = spawn('tsc --p tsconfig.es.json');

// tsCommonjs.stdout.on('data', () => {
//   console.log();
// });

// tsCommonjs.stderr.on('data', data => {
//   console.error(data.toString());
// });

// // typescript.;
// // exec('tsc --p tsconfig.es.json', (error, stdout, stderr) => {
// //   console.log(stderr);
// // });
