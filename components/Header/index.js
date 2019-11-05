import React, { Component } from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import NavItems from "./NavItems";
import "./_header.scss";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            thisUrl: "",
            navActive: false
        };
        this.getActive = this.getActive.bind(this);
        this.getSlug = this.getSlug.bind(this);
        this.getRoute = this.getRoute.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
        this.getState = this.getState.bind(this);
    }

    componentDidMount() {
        this.setState({ thisUrl: Router.asPath });
    }

    getActive(title) {
        const url = `/react/${this.getSlug().slug}/${title
            .split(" ")[0]
            .toLowerCase()}`;

        const homeUrl = `/react/${this.getSlug().slug}`;

        return homeUrl;
    }

    getSlug() {
        return {
            slug: this.props.shardin.toLowerCase()
        };
    }

    getRoute(title) {
        return `shardin-${title.split(" ")[0].toLowerCase()}`;
    }

    getState(callback) {
        this.setState(prevState => {
            callback(prevState);
        });
    }

    toggleNav() {
        this.getState(curState => {
            this.setState({ navActive: !curState.navActive });
        });
    }

    render() {
        const { items, shardin } = this.props;

        return (
            <header className="header">
                <div className="layout-grid layout-grid--header">
                    <div className="header__shardinLogo">
                        <img
                            className="header__logo"
                            src={this.props.logo.url}
                            alt={this.props.logo.alt}
                        />
                    </div>
                    <div
                        className={
                            this.state.navActive
                                ? "header__mobile"
                                : "header__wrap"
                        }
                    >
                        <NavItems
                            thisUrl={this.state.thisUrl}
                            items={items}
                            shardin={shardin}
                        />
                    </div>
                    <div
                        className={
                            this.state.navActive
                                ? "header__toggle header__toggle--active"
                                : "header__toggle"
                        }
                        onClick={this.toggleNav}
                        role="presentation"
                    />
                </div>
            </header>
        );
    }
}

Header.propTypes = {
    items: PropTypes.array,
    logo: PropTypes.object,
    shardin: PropTypes.string
};

Header.defaultProps = {
    items: [],
    logo: {},
    shardin: ""
};
