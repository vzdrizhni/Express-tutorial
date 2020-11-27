const products = [];

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add-product',
        path: '/admin/add-product'
    });
}

exports.postAddProduct = (req, res, next) => {
    products.push({
        title: req.body.title
    });
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    res.render('shop', {
        prods: products,
        docTitle: 'Shop',
        hui: '/',
        hasProducts: products.length > 0,
        pageTitle: 'shop'
    });
}