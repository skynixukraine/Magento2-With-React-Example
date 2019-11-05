import React from "react";
import PropTypes from "prop-types";
import "./_text-right.scss";

export default function TextRightImageLeft(props) {
    const { data } = props;

    const heading = data.primary.heading.filter(
        item => item.type === "heading4"
    );

    return (
        <div className="content-block-left">
            <div className="content-block-left__text--wrap">
                <div className="content-block-left__aligner">
                    <div className="content-block-left__text--centered">
                        <h4 className="content-block-left__text--heading">
                            {heading && heading.length ? heading[0].text : null}
                        </h4>
                        <p className="content-block-left__text--paragraph">
                            {data.primary && data.primary.paragraph_text.length
                                ? data.primary.paragraph_text[0].text
                                : null}
                        </p>

                        <a className="content-block-left__text--link">
                            <span className="content-block-left__text--view">
                                View Products
                            </span>
                            <i className="arrow arrow--right" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="content-block-left__image">
                <img
                    src={
                        data.primary && data.primary.image
                            ? data.primary.image.Desktop.url
                            : ""
                    }
                    alt={
                        data.primary && data.primary.image
                            ? data.primary.image.Desktop.alt
                            : ""
                    }
                    title={
                        data.primary &&
                        data.primary.image &&
                        data.primary.image.title
                            ? data.primary.image.title
                            : ""
                    }
                    srcSet={
                        data.primary &&
                        data.primary.image &&
                        data.primary.image.Mobile &&
                        data.primary.image.Desktop
                            ? `${data.primary.image.Mobile.url} 320w, ${
                                  data.primary.image.Desktop.url
                              }, 800w`
                            : ""
                    }
                    sizes="(max-width: 800px) 320px, 800px"
                />
            </div>
        </div>
    );
}

TextRightImageLeft.propTypes = {
    data: PropTypes.object
};

TextRightImageLeft.defaultProps = {
    data: {}
};
