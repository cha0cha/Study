import { fetchProductsById } from '@/api';
import ProductHeader from '@/components/ProductHeader';
import ProductInfo from '@/components/product-detail/ProductInfo';
import React from 'react';

// 상품 상세 페이지
export default function ProductDetailPage({ productDetail }) {
	const headerTitle = '상품 상세 정보 페이지';
	return (
		<div>
			{/* ProductHeader 컴포넌트를 등록하고, title 프롭스에 "상품 상세 정보 페이지" 라고 데이터 전달하기*/}
			<ProductHeader title={headerTitle} />

			<ProductInfo productDetail={productDetail}></ProductInfo>
		</div>
	);
}

export async function getServerSideProps(context) {
	// params.뒤에 값은 파읾명과 똑같아야함 ex)파일명이 productId면 params.productId
	const id = context.params.id;
	// 디스트럭쳐링
	const { data } = await fetchProductsById(id);
	return {
		props: {
			productDetail: data,
		},
	};
}
