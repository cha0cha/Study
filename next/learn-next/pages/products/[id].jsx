import { fetchProductsById } from '@/api';
import ProductHeader from '@/components/ProductHeader';
import axios from 'axios';
import React from 'react';

// 상품 상세 페이지
export default function ProductDetailPage({ message, productInfo }) {
	const headerTitle = '상품 상세 정보 페이지';
	return (
		<div>
			{/* ProductHeader 컴포넌트를 등록하고, title 프롭스에 "상품 상세 정보 페이지" 라고 데이터 전달하기*/}
			<ProductHeader title={headerTitle} />
			<div> ProductDetailPage : {message}</div>
			<p>{productInfo.name}</p>
		</div>
	);
}

export async function getServerSideProps(context) {
	// params.뒤에 값은 파읾명과 똑같아야함 ex)파일명이 productId면 params.productId
	const id = context.params.id;
	const response = await fetchProductsById(id);
	return {
		props: {
			message: '서버에서 보내준 메세지',
			productInfo: response.data,
		},
	};
}
