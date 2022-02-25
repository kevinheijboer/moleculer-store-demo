"use strict";

const Sequelize = require("sequelize");
const SequelizeMixin = require("../mixins/catalog-db.mixin");


/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
	name: "catalog",
	// version: 1

	/**
	 * Mixins
	 */
	mixins: [SequelizeMixin],

	/**
	 * Settings
	 */
	model: {
		name: "catalog",
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

	actions: {
		create: {
			async afterCreate(ctx) {
				// broadcast to other services
				ctx.broadcast("product.created", ctx.params, ["order", "recommendation"]);
				this.logger.info("New item created: ", ctx.params);
			}
		},
	},
}
