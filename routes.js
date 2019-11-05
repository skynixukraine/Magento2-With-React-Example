const routes = require("next-routes");

module.exports = routes()
    .add({ name: "index", pattern: "/react", page: "index" })
    .add({ name: "shardin", pattern: "/react/:slug", page: "shardin" })
    .add({
        name: "product-page",
        pattern: "/:slug",
        page: "shardin-product"
    })
    .add({ name: "shardinslug", pattern: "/:slug", page: "shardin" })
    .add({ name: "error", page: "NotFound" });
