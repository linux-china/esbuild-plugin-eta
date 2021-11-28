const eta = require("eta");
//Eta configuration
eta.configure({
    cache: true,
    includeFile: undefined
});
eta.templates.define("layout", eta.compile(`<body><% ~ it.body %></body>`));

const indexTemplate = eta.compile(`<% layout('layout') %> HI`);
const output = eta.render(indexTemplate, {name: "linux_china"});
console.log(output);
