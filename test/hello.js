import {templates, render as renderEta} from "eta";
// import all partials
import button1 from "./partials/button.eta";
import link1 from "./partials/link.eta";
// import template view
import indexTemplate from "./views/index.eta";
import defaultLayout from "./layout/index.eta";
// Add partials
templates.define("buttons/button1", button1);
templates.define("links/link1", link1);
templates.define("layout", defaultLayout);
// render template view
const output = renderEta(indexTemplate, {name: "linux_china"})
console.log(output);
