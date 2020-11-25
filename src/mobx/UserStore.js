/**
 * @typedef {Object} User
 * @property {String} id
 * @property {String} email
 */

import { makeObservable, observable, computed, action } from 'mobx'
import { auth } from '../firebase'

class UserStore
{
	user = {}
	isLoading = false

	constructor ()
	{
		makeObservable(this, {
			user: observable,
			isLoading: observable,
			isLoggedIn: computed,
		})

		this.initialize()
	}

	get isLoggedIn ()
	{
		return this.user ?? false
	}

	register (email, password)
	{
		auth.createUserWithEmailAndPassword(email, password).then((user) =>
		{
			this.user = user
		}
		).catch((error) =>
		{
			const errorCode = error.code
			const errorMessage = error.message
			console.error(errorCode, errorMessage)
		})
	}

	login (email, password)
	{
		auth.signInWithEmailAndPassword(email, password).then((user) =>
		{
			this.user = user
		}
		).catch((error) =>
		{
			const errorCode = error.code
			const errorMessage = error.message
			console.error(errorCode, errorMessage)
		})
	}

	loadFromOfflineState ()
	{
		this.isLoading = true
		localforage.getItem('user').then(action(json =>
		{
			if (!json) return
			const user = JSON.parse(json)
			if (!user) return
			this.user = user
		})
		).catch(error => { console.error(error) }
		).finally(action(() => { this.isLoading = false }))
	}

	initialize ()
	{
		this.loadFromOfflineState()

		reaction(() => JSON.stringify(this.user), json =>
		{
			localforage.setItem('user', json)
		})
	}
}

export default new UserStore()