import * as eta from "eta";
// import all partials
import button1 from "./partials/button.eta";
import link1 from "./partials/link.eta";
// import template view
import indexTemplate from "./views/index.eta";
import defaultLayout from "./layout/index.eta";
// Add partials
eta.templates.define("buttons/button1", button1);
eta.templates.define("links/link1", link1);
eta.templates.define("layout", defaultLayout);
// render template view
const output = eta.render(indexTemplate, {name: "linux_china"})
console.log(output);
