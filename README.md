esbuild-brotli-eta
==================================
An esbuild plugin for [Eta template engine](https://eta.js.org/).

# How to use?

```javascript
import * as Eta from "eta";

import button1 from "./partials/button.eta";
import link1 from "./partials/link.eta";
import indexTemplate from "./views/index.eta";

Eta.templates.define("buttons/button1", button1);
Eta.templates.define("links/link1", link1);

const output = Eta.render(indexTemplate, {name: "linux_china"})

console.log(output);
```

# esbuild example

```javascript
const esbuild = require('esbuild');
const etaPlugin = require('esbuild-plugin-eta');

esbuild.build({
    bundle: true,
    entryPoints: ['hello.js'],
    plugins: [etaPlugin],
    write: false
}).then(result => {
    console.log(result.outputFiles[0].text);
}).catch(() => process.exit(1));
```
