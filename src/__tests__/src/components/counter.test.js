import React from "react";
import renderer from "react-test-renderer";
import Counter from "../../../components/counter/counter.js";

describe("<Counter />", () => {
  it("it is alive", () => {
    expect(true).toBeTruthy();
  });

  it("proof of life", () => {
    let component = shallow(<Counter />);
    expect(component.find("section").exists()).toBeTruthy();
  });

  it("changes state on click to 1", () => {
    let component = mount(<Counter />);
    let clickerUp = component.find("a.upClick");
    clickerUp.simulate("click");
    expect(component.state("count")).toBe(1);
    expect(component.find("span").text()).toContain(1);
  });

  it("changes state on click to -1", () => {
    let component = mount(<Counter />);
    let clickerDown = component.find("a.downClick");
    clickerDown.simulate("click");
    expect(component.state("count")).toBe(-1);
    expect(component.find("span").text()).toContain(-1);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
