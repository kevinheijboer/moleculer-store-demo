"use strict";

const Sequelize = require("sequelize");
const SequelizeMixin = require("../mixins/orders-db.mixin");


module.exports = {
    name: "orders",
    mixins: [SequelizeMixin],
    model: {
        name: "order",
        define: {
            id: {
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.INTEGER
            },
            price: Sequelize.INTEGER,
        },
        association: [],
        options: {},
    },

    events: {
        "product.created"(payload) {
            this.logger.info("Message received with product: ", payload);
            this.actions.create(payload);
        }
    }
}