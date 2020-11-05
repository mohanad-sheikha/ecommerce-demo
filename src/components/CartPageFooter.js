import React from 'react'
import styled from 'styled-components'
import Currency from './Currency'
import CartStore from '../mobx/CartStore'
import DescriptionList, { Label, Value } from './DescriptionList'

const CustomLabel = styled(Label)`
	color: var(--bs-secondary);
`
const CustomValue = styled(Value)`
	color: inherit;
	justify-self: end;
`
const TotalLabel = styled(Label)`
	color: inherit;
	font-weight: 600;
`
const TotalValue = styled(Value)`
	color: inherit;
	font-weight: 600;
	justify-self: end;
`
const Checkout = styled(DescriptionList)`
	justify-content: end;
`

const CartPageFooter = () =>
{
	const { subTotal, tax, total } = CartStore

	return (
		<Checkout>
			<CustomLabel>Subtotal</CustomLabel>
			<CustomValue><Currency value={ subTotal } /></CustomValue>
			<CustomLabel>Tax</CustomLabel>
			<CustomValue><Currency value={ tax } /></CustomValue>
			<TotalLabel>Total</TotalLabel>
			<TotalValue><Currency value={ total } /></TotalValue>
		</Checkout>
	)
}

export default CartPageFooter