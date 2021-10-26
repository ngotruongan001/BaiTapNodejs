const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const studentRoute = require('./student.route');
const classRoute = require('./class.route');

const productRoute = require('./product/product.route');
const sizeRoute = require('./product/size.route');
const categorieRoute = require('./product/categorie.route');

const docsRoute = require('./docs.route');
const config = require('../../config/config');


const supplierRoute = require('./city/supplier.route');
const typeServiceRoute = require('./city/typeService.route');
const feeRoute = require('./city/fee.route');
const automakerRoute = require('./city/automaker.route');


const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/products',
    route: productRoute,
  },
  {
    path: '/sizes',
    route: sizeRoute,
  },
  {
    path: '/categories',
    route: categorieRoute,
  },
  {
    path: '/classes',
    route: classRoute,
  },
  {
    path: '/students',
    route: studentRoute,
  },
  
  {
    path: '/suppliers',
    route: supplierRoute,
  },
  {
    path: '/typeServices',
    route: typeServiceRoute,
  },
  {
    path: '/fees',
    route: feeRoute,
  },
  {
    path: '/automakers',
    route: automakerRoute,
  },
];


const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
