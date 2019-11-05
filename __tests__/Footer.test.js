import { shallow } from "enzyme";
import React from "react";
import Footer from "../components/Footer/footer";

describe("<Footer />", () => {
    it("renders", () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find(".footer-card").length);
    });
});