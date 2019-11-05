import React from "react";
import PropTypes from "prop-types";
import "./TextColumnList.scss";
import TextColumn from "./TextColumn/TextColumn";

export default function HeroImage(props) {
    return (
        <div className="text-columns">
            {props.columns.map((column, index) => (
                <TextColumn
                    key={`text-columns-list-${index}`}
                    heading={column.title_text}
                    text={column.paragraph_text}
                />
            ))}
        </div>
    );
}

HeroImage.propTypes = {
    columns: PropTypes.array
};

HeroImage.defaultProps = {
    columns: []
};
