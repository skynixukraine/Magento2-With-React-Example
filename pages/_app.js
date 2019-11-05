import React from "react";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import {
    initializeStore,
    getNavigation,
    getRangeNavigation,
    getFooterContent,
    actionTypes
} from "../store/store";

class ExampleApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        if (!ctx.store.getState().navigationItem.length && ctx.query.slug) {
            await ctx.store.dispatch(getNavigation(ctx.query.slug));
        }

        if (
            ctx.store.getState().rangeNavigationItems &&
            !ctx.store.getState().rangeNavigationItems.length &&
            ctx.query.slug
        ) {
            await ctx.store.dispatch(getRangeNavigation(ctx.query.slug));
        }

        if (!ctx.store.getState().footerContent) {
            await ctx.store.dispatch(getFooterContent());
        }

        if (!ctx.store.getState().shardinName.length) {
            await ctx.store.dispatch({
                type: actionTypes.GET_shardin,
                data: ctx.query.slug
            });
        }

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
            return { pageProps };
        }

        return {
            navItems: ctx.store.getState().navigationItem,
            currentUrl: ctx.store.getState().currentUrl
        };
    }

    render() {
        const { Component, pageProps, store } = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }
}

export default withRedux(initializeStore)(MyApp);
