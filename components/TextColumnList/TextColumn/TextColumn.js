import React from "react";
import PropTypes from "prop-types";
import "./TextColumn.scss";

export default function TextColumn(props) {
    return (
        <div className="text-column">
            <h5 className="text-column__heading">{props.heading}</h5>
            <p className="text-column__text">{props.text[0].text}</p>
        </div>
    );
}

TextColumn.propTypes = {
    heading: PropTypes.string,
    text: PropTypes.array
};

TextColumn.defaultProps = {
    heading: "",
    text: []
};
