import { fetchCarts } from '@/api';
import CartHeader from '@/components/cart/cartHeader';
import CartList from '@/components/cart/cartList';

// '/cart'에 해당하는 페이지 컴포넌트
function CartPage({ carts }) {
	return (
		<div>
			<CartHeader></CartHeader>
			<CartList carts={carts}></CartList>
		</div>
	);
}

export async function getServerSideProps() {
	const { data } = await fetchCarts();
	return {
		props: {
			carts: data,
		},
	};
}

export default CartPage;
