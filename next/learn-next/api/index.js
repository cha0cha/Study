import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:4000',
});

// 상품 목록을 조회하는 API 함수
function fetchProducts() {
	return instance.get('/products');
}

// function fetchProducts(productId) {
// 	return instance.get('/products', {
//         params: {
//             id: productId,
//         }
//     });
// }
//특정 상품 상세 정보 조회 API 함수
function fetchProductsById(id) {
	return instance.get(`/products/${id}`);
}

export { fetchProducts, fetchProductsById };
