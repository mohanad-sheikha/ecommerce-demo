import { useState } from 'react'

const useIndex = (max, isInfinite = true) =>
{
	const [ index, set ] = useState(0)
	const increaseIndex = () => { set(index => index < max ? index + 1 : (isInfinite ? 0 : index)) }
	const decreaseIndex = () => { set(index => index > 0 ? index - 1 : (isInfinite ? max : index)) }
	const setIndex = (index) => { set(index % max) }
	return [ index, increaseIndex, decreaseIndex, setIndex ]
}

export default useIndex