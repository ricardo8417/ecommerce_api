const { Sequelize } = require('sequelize');

// Importing models
const Product = require('./models/Product');
const Review = require('./models/Review');
const User = require('./models/User');
const Order = require('./models/Order');

// Database connection
const sequelize = new Sequelize('dbecommerce', 'ricardo', 'Matrix27', {
    host: 'localhost',
    dialect: 'mariadb',
    logging: false,
});

// Getting models
const models = [
    Product,
    Review,
    User,
    Order,
];

// Registering models into Sequelize
for (let model of models) {
    model(sequelize);
}

// Configuring relations
const { products, reviews, users, orders } = sequelize.models;
reviews.belongsTo(products); // Relation one-to-one in reviews table
orders.belongsTo(users); // Relation: Order has one user
orders.belongsTo(products); // Relation: Order has one product

module.exports = sequelize;