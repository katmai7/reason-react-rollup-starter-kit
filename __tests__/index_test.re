open Jest;

Enzyme.configureEnzyme(Enzyme.react_16_adapter());

let setup = () => Enzyme.shallow(<Component/>);

describe("Component", () => {
  open Expect;

  test("renders text", () => {
    let wrapper = setup();
    expect(Enzyme.text(wrapper)) |> toBe("Reason-react hello world!");
  });
});
