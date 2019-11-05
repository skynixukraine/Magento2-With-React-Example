import React from "react";
import PropTypes from "prop-types";
import "./_TextLeftBlock.scss";

export default function TextLeftImageRight(props) {
    const { data } = props;

    const heading =
        data.primary.heading !== undefined
            ? data.primary.heading.filter(item => item.type === "heading4")
            : null;

    return (
        <div className="content-block">
            <div className="content-block__text--wrap">
                <div className="content-block__text--centered">
                    <h4 className="content-block__text--heading">
                        {heading && heading.length ? heading[0].text : null}
                    </h4>
                    <p className="content-block__text--paragraph">
                        {data.primary && data.primary.paragraph_text.length
                            ? data.primary.paragraph_text[0].text
                            : null}
                    </p>

                    <a className="content-block__text--link">
                        View Products
                        <i className="arrow arrow--right" />
                    </a>
                </div>
            </div>
            <div className="content-block__image">
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

TextLeftImageRight.propTypes = {
    data: PropTypes.object
};

TextLeftImageRight.defaultProps = {
    data: {}
};
