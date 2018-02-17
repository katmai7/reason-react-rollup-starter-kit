'use strict';

import * as Jest               from "@glennsl/bs-jest/lib/es6/src/jest.js";
import * as Enzyme             from "bs-enzyme/lib/es6/src/Enzyme.js";
import * as Enzyme$1           from "enzyme";
import * as Component          from "../src/Component.js";
import * as ReasonReact        from "reason-react/lib/es6/src/ReasonReact.js";
import * as EnzymeAdapterReact from "enzyme-adapter-react-16";

Enzyme.configureEnzyme(new EnzymeAdapterReact());

function setup() {
  return Enzyme$1.shallow(ReasonReact.element(/* None */0, /* None */0, Component.make(/* array */[])));
}

describe("Component", (function () {
        return Jest.test("renders text", (function () {
                      var wrapper = setup(/* () */0);
                      return Jest.Expect[/* toBe */2]("Reason-react hello world!", Jest.Expect[/* expect */0](wrapper.text()));
                    }));
      }));

export {
  setup ,
  
}
/*  Not a pure module */
