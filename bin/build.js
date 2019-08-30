const fs = require('fs');
import jsxGenerator from './jsxGenerator';

const inputDir = './svg';
const outputDirName = 'flags';
const outputDir = `./src/${outputDirName}`;

if (!fs.existsSync(inputDir)) {
  console.error(
    `SVGs missing: Expected to find them input directory "svg" in root folder`,
  );
}

if (!fs.existsSync('./src')) {
  fs.mkdirSync('./src');
}

const dirContents = fs.readdirSync(inputDir);

const jsIndexLogger = fs.createWriteStream('./src/index.js', {
  flags: 'w',
});

const typeIndexLogger = fs.createWriteStream('./src/index.d.ts', {
  flags: 'w',
});

for (const flag of dirContents) {
  if (flag.split('.')[1] === 'svg') {
    const flagName = flag
      .replace(/ /g, '')
      .replace(/\(/g, '')
      .replace(/\)/g, '')
      .replace(/\,/g, '')
      .replace(/\-/g, '')
      .replace(/\'/g, '')
      .split('.')[0];
    convertSVGtoComponents(flag, flagName);
    convertFlagnameToIndex(flagName);
  }
}

function convertSVGtoComponents(flag, flagName) {
  const flagSVG = fs.readFileSync(`./${inputDir}/${flag}`, 'utf-8');
  const jsxCode = jsxGenerator(flagName, flagSVG);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  fs.writeFileSync(`./src/flags/${flagName}.js`, jsxCode);
}

function convertFlagnameToIndex(flagName) {
  jsIndexLogger.write(
    `export { default as ${flagName} } from './${outputDirName}/${flagName}';\n`,
  );
  typeIndexLogger.write(`export const ${flagName}: Flag;\n`);
}
