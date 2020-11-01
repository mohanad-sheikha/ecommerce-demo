/**
 * @typedef {Object} Product
 * @property {Number} id
 * @property {Number} price
 * @property {Number} originalPrice
 * @property {String} size
 * @property {String} name
 * @property {String} imageUrl
 */

import { observable, action, computed } from 'mobx'
import testData from '../data.json'

class ProductsStore
{
	@observable byId = {}
	@observable isLoading = false

	constructor ()
	{
		this.initialize()
	}

	/**
	 * @returns {[Product]} An array of all products.
	 */
	@computed
	get all ()
	{
		return Object.values(this.byId)
	}

	@action
	initialize ()
	{
		this.isLoading = true
		this.byId = testData.reduce((collection, product) => ({ ...collection, [ product.id ]: { ...product } }), {})
		this.isLoading = false
	}
}

export default new ProductsStore()