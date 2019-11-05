import { shallow } from "enzyme";
import React from "react";
import TextColumnList from "../components/TextColumnList/TextColumnList";
import TextColumn from "../components/TextColumnList/TextColumn/TextColumn";

describe("<TextColumnList />", () => {
    it("renders", () => {
        const columns = [
            {
                title_text: "Text",
                paragraph_text: [{ text: "Paragraph" }]
            }
        ];
        const wrapper = shallow(<TextColumnList columns={columns} />);
        expect(wrapper.find(TextColumn).length).toBe(1);
        expect(wrapper.find(".text-column__heads").length);
        expect(wrapper.find(".text-column__html").length);
    });
});
