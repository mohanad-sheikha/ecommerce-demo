import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/functions'
import 'firebase/database'
import 'firebase/auth'

const config = {
	apiKey: "AIzaSyCDBcHoOsF2ZZZE42QBQmG-y-PKuHFSklA",
	authDomain: "ecommerce-demo-9f502.firebaseapp.com",
	databaseURL: "https://ecommerce-demo-9f502.firebaseio.com",
	projectId: "ecommerce-demo-9f502",
	storageBucket: "ecommerce-demo-9f502.appspot.com",
	messagingSenderId: "22109614285",
	appId: "1:22109614285:web:253293275f970d9c757984",
	measurementId: "G-0CVPZN2DDX"
}

firebase.initializeApp(config)

export const firestore = firebase.firestore()
export const storage = firebase.storage()
export const analytics = firebase.analytics()
export const functions = firebase.functions()
export const auth = firebase.auth()