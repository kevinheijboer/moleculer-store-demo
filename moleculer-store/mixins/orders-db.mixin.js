const Sequelize = require("sequelize");
const MoleculerSequelize = require("moleculer-sequelize");
const SequelizeMixin = {
    mixins: [MoleculerSequelize],
    settings: {
        sequelize: new Sequelize("orders_db", "root", "XD6Qpi47kS8q2Td4", {
            host: "127.0.0.1",
            dialect: "mysql",
        }),
    },
};
module.exports = SequelizeMixin; 