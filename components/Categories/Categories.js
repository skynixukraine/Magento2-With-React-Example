import React from "react";
import PropTypes from "prop-types";
import { Link } from "../../routes";
import "./categories.scss";

export default function Categories(props) {
    const { items, title} = props;
    return (
        <div className="categories">
            <h1 className="categories__title">{title}</h1>
            <div className="layout-grid categories__items js-hook__category-items">
                {items.length
                    ? items.map((item, key) => (
                          <div
                              className="categories__item"
                              key={`categories-item-${key}`}
                          >
                              <div className="categories__item--top">
                                  <img
                                      sizes="50vw"
                                      srcSet={`${
                                          item.category.ImgUrl
                                      } 300w, ${
                                          item.category.DesktopImgurl
                                      } 900w`}
                                      alt={item.category.ImgAlt}
                                  />
                              </div>
                              <div className="categories__item--bot">
                                  <h3 className="categories__item--name">
                                      {item.categoryTitle}
                                  </h3>

                              </div>
                          </div>
                      ))
                    : null}
            </div>
        </div>
    );
}

Categories.propTypes = {
    items: PropTypes.array,
    heading: PropTypes.string,
    shardinName: PropTypes.string
};

Categories.defaultProps = {
    items: [],
    title: ""
};
