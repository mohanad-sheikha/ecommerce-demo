/**
 * @typedef {Object} Product
 * @property {Number} id
 * @property {Number} price
 * @property {Number} originalPrice
 * @property {String} size
 * @property {String} name
 * @property {String} imageUrl
 */

import { makeObservable, observable, computed, action } from 'mobx'
import Fuse from 'fuse.js'
import testData from '../data.json'

class ProductsStore
{
	byId = {}
	isLoading = false

	constructor ()
	{
		makeObservable(this, {
			byId: observable,
			isLoading: observable,
			all: computed,
			onSale: computed,
			initialize: action
		})

		this.initialize()
	}

	/**
	 * @returns {[Product]} An array of all products.
	 */
	get all ()
	{
		return Object.values(this.byId)
	}

	get onSale ()
	{
		return this.all.filter(product => (product.originalPrice ?? false) && (product.price < product.originalPrice))
	}

	initialize ()
	{
		this.isLoading = true
		this.byId = testData.reduce((collection, product) => ({ ...collection, [ String(product.id) ]: { ...product } }), {})
		this.isLoading = false
	}

	findFuzzyMatches (value)
	{
		return new Fuse(this.all, { includeScore: true, keys: [ 'name', 'size', 'price' ] }).search(value)
	}
}

export default new ProductsStore()