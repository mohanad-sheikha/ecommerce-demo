const functions = require('firebase-functions')
const admin = require('firebase-admin')
const cors = require('cors')({ origin: true })
const Fuse = require('fuse.js')

admin.initializeApp()

exports.getAllProducts = functions.https.onCall((data, context) =>
{
	return admin.firestore().collection('products').get()
		.then(snap =>
		{
			const allProducts = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
			return allProducts
		})
})

exports.findFuzzyMatches = functions.https.onCall(({ value }, context) =>
{
	return admin.firestore().collection('products').get()
		.then(snap =>
		{
			const allProducts = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
			const filteredProducts = new Fuse(allProducts, { includeScore: true, keys: [ 'name', 'size', 'price' ] }).search(value)
			return filteredProducts
		})
})