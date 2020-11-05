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

import { makeObservable, observable, computed, action, reaction } from 'mobx'
import localforage from 'localforage'

class CartStore
{
	taxRate = 0.07
	all = []
	isLoading = true

	get hasProducts () { return this.all.length > 0 }
	get subTotal () { return this.all.reduce((amount, { price, quantity }) => amount + price * quantity, 0) }
	get tax () { return this.subTotal * this.taxRate }
	get total () { return this.subTotal + this.tax }

	constructor ()
	{
		makeObservable(this, {
			all: observable,
			isLoading: observable,
			hasProducts: computed,
			addProduct: action,
			removeProduct: action,
			loadFromOfflineState: action,
		})

		reaction(() => this.all.slice(), all =>
		{
			localforage.setItem('cart', JSON.stringify(all))
		})

		this.loadFromOfflineState()
	}

	loadFromOfflineState ()
	{
		this.isLoading = true
		localforage.getItem('cart')
			.then(action(json =>
			{
				if (!json) return
				const products = JSON.parse(json)
				if (!products || !Array.isArray(products)) return
				this.all = products
			}))
			.catch(error => { console.error(error) })
			.finally(() => { this.isLoading = false })
	}

	removeProduct (product)
	{
		const existingProductIndex = this.all.findIndex(({ id }) => id == product.id)
		if (existingProductIndex !== -1) 
		{
			const existingProduct = this.all[ existingProductIndex ]
			if (existingProduct.quantity > 1) existingProduct.quantity--
			else this.all.splice(existingProductIndex, 1)
		}
	}

	addProduct (product)
	{
		const existingProduct = this.all.find(({ id }) => id == product.id)
		if (existingProduct) existingProduct.quantity++
		else this.all.push(Object.assign({}, product, { quantity: 1 }))
	}
}

export default new CartStore()