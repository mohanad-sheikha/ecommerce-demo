import React from 'react'
import styled from 'styled-components'
import Currency from './Currency'
import CartStore from '../mobx/CartStore'
import DescriptionList, { Label, Value } from './DescriptionList'
import { observer } from 'mobx-react-lite'
import { CardElement } from '@stripe/react-stripe-js'

const CustomLabel = styled(Label)`
	color: var(--bs-secondary);
	overflow: visible;
	text-overflow: unset;
	line-break: unset;
`
const CustomValue = styled(Value)`
	color: inherit;
	justify-self: end;
	overflow: visible;
	text-overflow: unset;
	line-break: unset;
`
const TotalLabel = styled(CustomLabel)`
	color: inherit;
	font-weight: 600;
`
const TotalValue = styled(CustomValue)`
	color: inherit;
	font-weight: 600;
	justify-self: end;
`
const Totals = styled(DescriptionList)`
	justify-content: end;
`
const Wrapper = styled.div`
`

const CartPageFooter = () =>
{
	const { subTotal, tax, total } = CartStore

	return (
		<Wrapper>
			<Totals>
				<CustomLabel>Subtotal</CustomLabel>
				<CustomValue><Currency value={ subTotal } /></CustomValue>
				<CustomLabel>Tax</CustomLabel>
				<CustomValue><Currency value={ tax } /></CustomValue>
				<TotalLabel>Total</TotalLabel>
				<TotalValue><Currency value={ total } /></TotalValue>
			</Totals>
		</Wrapper>
	)
}

export default observer(CartPageFooter)