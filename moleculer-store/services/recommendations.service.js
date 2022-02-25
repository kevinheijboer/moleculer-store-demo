"use strict";

const Sequelize = require("sequelize");
const SequelizeMixin = require("../mixins/recommendations-db.mixin");


module.exports = {
    name: "recommendations",
    mixins: [SequelizeMixin],
    model: {
        name: "recommendation",
        define: {
            id: {
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.INTEGER
            },
            name: Sequelize.STRING,
            description: Sequelize.STRING,
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