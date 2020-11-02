export default {
	on (event, callback)
	{
		document.addEventListener(event, callback)
	},
	once (event, callback)
	{
		document.addEventListener(event, callback, { once: true })
	},
	dispatch (event, data)
	{
		document.dispatchEvent(new CustomEvent(event, { detail: data }))
	},
	remove (event, callback)
	{
		document.removeEventListener(event, callback)
	}
}