import { shallow } from "enzyme";
import React from "react";
import Router from "next/router";
import TextLeftImageRight from "../components/TextLeftBlock/TextLeftImageRight";

describe("<TextLeftBlock />", () => {
    it("renders", () => {
        const mockedRouter = { push: () => {} };
        Router.router = mockedRouter;
        const data = {
            primary: {
                image: {
                    Desktop: {
                        url:
                            "https://backend.io/react/85a67289d015ad32d0100c50cade78c9c9c4b108_18_mt-07_matte-gray_detail_013.jpg"
                    }
                },
                title: [
                    {
                        type: "h2",
                        text: "What is this?",
                        spans: []
                    }
                ]
            }
        };
        const wrapper = shallow(<TextLeftImageRight data={data} />);

        expect(wrapper.find("img").length).toEqual(1);
        expect(wrapper.find("p").text()).toEqual(
            "What is this"
        );
        expect(wrapper.find("h4").text()).toEqual("What is this?");
    });
});
