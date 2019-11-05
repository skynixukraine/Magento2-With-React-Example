import React from "react";
import PropTypes from "prop-types";
import { Link } from "../../routes";

export default function NavItems(props) {
    const { items, shardin, thisUrl } = props;

    function getSlug() {
        return {
            slug: shardin.toLowerCase()
        };
    }

    function getRoute(title) {
        return `shardin-${title.split(" ")[0].toLowerCase()}`;
    }

    function getActive(title) {
        const url = `/react/${getSlug().slug}/${title
            .split(" ")[0]
            .toLowerCase()}`;

        const homeUrl = `/react/${getSlug().slug}`;

        return homeUrl;
    }

    return (
        <div>
            <ul className="header__nav">
                {items !== undefined && items.length
                    ? items.map((item, i) => (
                          <li
                              className={getActive(item.nav_menu_item_title)}
                              key={`header-nav-${i}`}
                          >
                              {" "}
                              <Link
                                  route={getRoute(item.nav_menu_item_title)}
                                  params={getSlug()}
                              >
                                  <span>{item.nav_menu_item_title}</span>
                              </Link>
                          </li>
                      ))
                    : null}
            </ul>
        </div>
    );
}

NavItems.propTypes = {
    items: PropTypes.array,
    thisUrl: PropTypes.string,
    shardin: PropTypes.string
};

NavItems.defaultProps = {
    items: [],
    thisUrl: "",
    shardin: ""
};
