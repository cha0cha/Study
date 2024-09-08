import ProductList from '@/components/ProductList';
import axios from 'axios';

function ProductPage() {
	return (
		<div>
			<h1>상품 목록</h1>
			<ProductList></ProductList>
		</div>
	);
}
/**
 * 1. 상품 목록 페이지 - '/'
 * 2. 상품 상세 페이지 - '/product/productId'
 * 3. 장바구니 페이지 - '/carts'
 */
export default ProductPage;
