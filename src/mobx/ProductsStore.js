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
import firebase from 'firebase/app'
import moment from 'moment'

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
			newlyAdded: computed,
			initialize: action,
			findFuzzyMatches: action
		})

		this.initialize()
	}

	get byId ()
	{
		return this.all.reduce((object, product) => ({ ...object, [ product.id ]: { ...product } }), {})
	}

	get onSale ()
	{
		return this.all.filter(product => (product.originalPrice ?? false) && (product.price < product.originalPrice))
	}

	get newlyAdded ()
	{
		return this.all.filter(product =>
		{
			const difference = moment().diff(this.getDateAdded(product), 'days')
			return difference >= 0 && difference <= 6
		})
	}

	getDateAdded (product)
	{
		const { _seconds, _nanoseconds } = product.dateAdded
		return new firebase.firestore.Timestamp(_seconds, _nanoseconds).toDate()
	}

	initialize ()
	{
		this.isLoading = true
		functions.httpsCallable('getAllProducts')().then(action(({ data }) =>
		{
			if (data) this.all = data
		}))
			.finally(action(() => { this.isLoading = false }))
	}

	findFuzzyMatches (value)
	{
		this.isSearching = true
		return functions.httpsCallable('findFuzzyMatches')({ value }).then(({ data }) =>
		{
			if (data) return data
		}).finally(action(() => { this.isSearching = false }))
	}
}

export default new ProductsStore()