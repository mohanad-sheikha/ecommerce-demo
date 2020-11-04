/**
 * @typedef {Object} Product
 * @property {Number} id
 * @property {Number} price
 * @property {Number} originalPrice
 * @property {Number} quantity
 * @property {String} size
 * @property {String} name
 * @property {String} imageUrl
 */

import { observable, action, computed } from 'mobx'

class CartStore
{
	@observable all = []

	@computed
	get hasProducts () { return this.all.length > 0 }

	@action
	addProduct (product)
	{
		const duplicateProduct = this.all.find(existingProduct => existingProduct.id == product.id)
		if (duplicateProduct) duplicateProduct.quantity++
		else this.all.push(Object.assign({}, product, { quantity: 1 }))
	}
}

export default new CartStore()