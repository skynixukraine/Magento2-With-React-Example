import { shallow } from "enzyme";
import React from "react";
import TextBlock from "../components/TextBlock/TextBlock";

describe("<TextBlock />", () => {
    it("renders", () => {
        const paragraph = [{ text: "Some text" }];
        const wrapper = shallow(
            <TextBlock heading="Heading" paragraph={paragraph} />
        );
        expect(wrapper.find(".text-block__heads").length);
        expect(wrapper.find(".text-block__html").length);
    });
});
