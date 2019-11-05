import { shallow } from "enzyme";
import React from "react";
import Router from "next/router";
import CategoryTitle from "../components/CategoryTitle/CategoryTitle";

describe("<CategoryTitle />", () => {
    it("renders", () => {
        const mockedRouter = { push: () => {} };
        Router.router = mockedRouter;
        const rangeNavigationItems = [
            {
                categoryTitle: "Magento Category",
                categoryItems: [
                    {
                        image: {
                            alt: null,
                            url: "https://backend.io/react/fb386ccd7e9f67e39b62420968e100bf29349357_18_mt-07_mattegray_s3_ba.jpg"
                        },
                        link: {
                            slug: "product-10-slug",
                            uid: "10-slug",
                            data: {
                                badge: true,
                                is_des: false
                            }
                        }
                    }
                ]
            }
        ];
        const currentUrl = "category/magento";
        const wrapper = shallow(<CategoryTitle rangeNavigationItems={rangeNavigationItems} currentUrl={currentUrl}/>);
        expect(wrapper.find("h2").length).toEqual(1);
        expect(wrapper.contains(<h2>SUPERSPORT</h2>)).toBeTruthy();
    });
});
