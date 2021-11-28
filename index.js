const {resolve} = require('path');
const fs = require('fs');
const eta = require("eta");

eta.configure({
    includeFile: undefined //disable includeFile function for single bundle
});

const name = 'eta'

const setup = ({onResolve, onLoad}) => {
    onResolve({filter: /\.eta$/}, ({path, resolveDir}) => ({
        path: path,
        namespace: 'eta-ns',
        pluginData: {resolveDir}
    }));
    onLoad({filter: /\.eta$/, namespace: 'eta-ns'}, buildEtaTemplateFunction);
}

const buildEtaTemplateFunction = async ({path, pluginData}) => {
    const resolveDir = pluginData.resolveDir;
    const originalPath = resolve(resolveDir, path);
    const templateText = await fs.promises.readFile(originalPath, {encoding: 'utf8'});
    let templateFunction = eta.compile(templateText);
    return {contents: `export default ${templateFunction.toString()}`};
}

module.exports = {name, setup};
