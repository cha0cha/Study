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

// 장바구니에 아이템 추가하는 API 함수
function createCartItem({ id, name, imageUrl, price }) {
	return instance.post(`/carts`, {
		id: id,
		name: name,
		imageUrl,
		price: price,
	});
}

// 장바구니 목록을 들고오는 API함수
function fetchCarts() {
	return instance.get('/carts');
}

// 특정 아이디에 해당하는 장바구니 아이템 삭제하는 API함수
function removeCartItem(id) {
	return instance.delete(`/carts/${id}`);
}

export {
	fetchProducts,
	fetchProductsById,
	createCartItem,
	fetchCarts,
	removeCartItem,
};
