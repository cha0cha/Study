import ProductHeader from '@/components/ProductHeader';
import ProductList from '@/components//product-list/ProductList';
import axios from 'axios';

function ProductPage() {
	const headerTitle = '상품 목록 페이지';
	return (
		<div>
			{/* 슬래시 뒤에닫건 태그로 만들건 이건 팀내 컨벤션 */}
			<ProductHeader title={headerTitle} />
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
