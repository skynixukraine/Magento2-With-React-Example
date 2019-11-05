import React, { Component } from "react";
import "./footer.scss";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "../../routes";

class Footer extends Component {
    createRouteUrl = (i) => {
        let baseUrl = `/react/${shardin}`;
        if (i === 0) baseUrl += "/range";
        if (i === 1) baseUrl += "/offers";
        if (i === 2) baseUrl += "/contact";
        return baseUrl;
    };

    setUppeCase = text => text.toUpperCase();

    setCardText = cardText =>
        cardText.length > 95 ? `${cardText.substring(0, 80)}...` : cardText;

    render() {
        const { footerContent, shardinName } = this.props;
        const cards = footerContent.map(
            ({ imgSource, cardTitle, cardText, footerLinkText }, i) => (
                <div className="footer-items-card" key={`footer-card-${i}`}>

                </div>
            )
        );
        return (
            <div className="footer">
                <div className="footer-items grid">{cards}</div>
            </div>
        );
    }
}

Footer.propTypes = {
    shardinName: PropTypes.string,
    footerContent: PropTypes.array
};

Footer.defaultProps = {
    shardinName: "",
    footerContent: []
};

export default connect(state => state)(Footer);
