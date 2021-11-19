const esbuild = require('esbuild');

const etaPlugin = require('../index');

esbuild.build({
    bundle: true,
    entryPoints: ['hello.js'],
    plugins: [etaPlugin],
    platform: 'node',
    write: true,
    outfile: "bundle.js"
}).then(result => {
    console.log(result.outputFiles[0].text);
}).catch(() => process.exit(1));
