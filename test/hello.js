import * as Eta from "eta";

import button1 from "./partials/button.eta";
import link1 from "./partials/link.eta";
import indexTemplate from "./views/index.eta";

Eta.templates.define("buttons/button1", button1);
Eta.templates.define("links/link1", link1);

const output = Eta.render(indexTemplate, {name: "linux_china"})

console.log(output);
