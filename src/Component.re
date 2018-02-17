let component = ReasonReact.statelessComponent("ReasonReactExample");

let make = (_children) => {
  {
    ...component,
    render: (_self) =>
      <div>
        (ReasonReact.stringToElement("Reason-react hello world!"))
      </div> 
  }
};

let default = ReasonReact.wrapReasonForJs(~component, (_jsProps) => make([||]));