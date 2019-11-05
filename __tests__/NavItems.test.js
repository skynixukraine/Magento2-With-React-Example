import { shallow } from "enzyme";
import React from "react";
import Router from "next/router";
import NavItems from "../components/Header/NavItems";

describe("<NavItems />", () => {
    it("renders", () => {
        const mockedRouter = { push: () => {} };
        Router.router = mockedRouter;
        const items = [
            {
                nav_menu_item_title: "Test menu item"
            }
        ];
        const wrapper = shallow(<NavItems items={items} />);
        expect(wrapper.find(".header__navs li").length).not.toBe(0);
    });
});
