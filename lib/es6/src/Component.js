'use strict';

import * as React       from "react";
import * as ReasonReact from "reason-react/lib/es6/src/ReasonReact.js";

var component = ReasonReact.statelessComponent("ReasonReactExample");

function make() {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", undefined, "Reason-react hello world!");
    });
  return newrecord;
}

var $$default = ReasonReact.wrapReasonForJs(component, (function () {
        return make(/* array */[]);
      }));

export {
  component ,
  make      ,
  $$default ,
  $$default   as default,
  
}
/* component Not a pure module */
