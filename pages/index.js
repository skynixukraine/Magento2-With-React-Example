import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Error from "next/error";

function Index() {
    return <Error statusCode={404} />;
}

Index.propTypes = {
    navigationItem: PropTypes.array,
    shardinLogo: PropTypes.object
};

Index.defaultProps = {
    navigationItem: [],
    shardinLogo: {}
};

Index.defaultProps = {
    navigationItem: []
};

export default connect(state => state)(Index);
