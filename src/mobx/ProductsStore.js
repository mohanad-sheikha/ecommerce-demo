/**
 * @typedef {Object} Product
 * @property {Number} id
 * @property {Number} price
 * @property {String} name
 * @property {String} imageUrl
 */

import { observable, action, computed } from 'mobx'

class ProductsStore
{
	@observable byId = {
		'1z8sj24': {
			id: '1z8sj24',
			price: 850.99,
			name: '16-inch Macbook Pro (2020)',
			imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg'
		}
	}
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
		// Get initial state here
		this.isLoading = false
	}
}

export default new ProductsStore()