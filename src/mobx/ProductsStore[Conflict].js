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
import { functions } from '../firebase'

class ProductsStore
{
	all = []
	isLoading = true
	isSearching = false

	constructor ()
	{
		makeObservable(this, {
			all: observable,
			isLoading: observable,
			isSearching: observable,
			byId: computed,
			onSale: computed,
			initialize: action
		})

		this.initialize()
	}

	/**
	 * @returns {[Product]} An array of all products.
	 */
	get byId ()
	{
		return this.all.reduce((object, product) => ({ ...object, [ product.id ]: { ...product } }), {})
	}

	get onSale ()
	{
		return this.all.filter(product => (product.originalPrice ?? false) && (product.price < product.originalPrice))
	}

	initialize ()
	{
		this.isLoading = true
		functions.httpsCallable('getAllProducts')().then(action(({ data }) =>
		{
			if (data) this.all = data
		})).finally(() => { this.isLoading = false })
	}

	findFuzzyMatches (value)
	{
		this.isSearching = true
		return functions.httpsCallable('findFuzzyMatches')({ value }).then(({ data }) =>
		{
			if (data) return data
		}).finally(() => { this.isSearching = false })
	}
}

export default new ProductsStore()