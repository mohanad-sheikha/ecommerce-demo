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
		'151zzxcasd': {
			id: '151zzxcasd',
			price: 850.99,
			name: '16-inch Macbook Pro i9 (2020)',
			imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg'
		},
		'zz1232ff': {
			id: 'zz1232ff',
			price: 899.99,
			name: '17-inch HP Omen',
			imageUrl: 'https://store.hp.com/app/assets/images/product/5VX46AV_1/center_facing.png?_=1562585895398&imwidth=270&imdensity=1'
		},
		'2s82kdyzxA': {
			id: '2s82kdyzxA',
			price: 1030.99,
			name: '15.6-inch XPS 15',
			imageUrl: 'https://i.dell.com/sites/csimages/Video_Imagery/all/xps_7590_touch.png'
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