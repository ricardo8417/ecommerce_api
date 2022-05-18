const { Sequelize } = require('sequelize');
// Database connection
const sequelize = new Sequelize('ecommerce_api', 'root', 'root', {
    host: 'localhost',
    dialect: 'mariadb',
    logging: false,
});

// Importing models
const Product = require('./models/Product');
const Review = require('./models/Review');
const User = require('./models/User');
const Order = require('./models/Order');

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

//configuración de relación
const { products, reviews, users, orders } = sequelize.models
reviews.belongsTo(products) // Relation one-to-one in rewies table
orders.belongsTo(users)
orders.belongsTo(products)




module.exports = sequelize;