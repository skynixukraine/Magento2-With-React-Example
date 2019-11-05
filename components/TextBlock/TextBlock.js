import React from "react";
import PropTypes from "prop-types";
import "./TextBlock.scss";

export default function TextBlock(props) {
    return (
        <div className="text-block">
            <h2 className="text-block__heading">{props.heading}</h2>
            {props.paragraph.map((p, index) => (
                <p className="text-block__content" key={`text-block-${index}`}>
                    {p.text}
                </p>
            ))}
        </div>
    );
}

TextBlock.propTypes = {
    heading: PropTypes.string,
    paragraph: PropTypes.array
};

TextBlock.defaultProps = {
    heading: "",
    paragraph: []
};
