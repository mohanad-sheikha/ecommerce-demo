import { useState } from 'react'

const useIndex = (max, isInfinite = true) =>
{
	const [ index, _setIndex ] = useState(0)
	const increaseIndex = () => { _setIndex(index => index < max ? index + 1 : (isInfinite ? 0 : index)) }
	const decreaseIndex = () => { _setIndex(index => index > 0 ? index - 1 : (isInfinite ? max : index)) }
	const setIndex = (index) => { _setIndex(Math.abs(index) % (max + 1)) }
	return [ index, increaseIndex, decreaseIndex, setIndex ]
}

export default useIndex