import ProductHeader from '@/components/ProductHeader';
import React from 'react';

export default function ProductDetailPage({ message }) {
	const headerTitle = '상품 상세 정보 페이지';
	return (
		<div>
			{/* ProductHeader 컴포넌트를 등록하고, title 프롭스에 "상품 상세 정보 페이지" 라고 데이터 전달하기*/}
			<ProductHeader title={headerTitle} />
			<div> ProductDetailPage : {message}</div>
		</div>
	);
}

export async function getServerSideProps(context) {
	// params.뒤에 값은 파읾명과 똑같아야함 ex)파일명이 productId면 params.productId
	console.log(context.params.id);
	return {
		props: {
			message: '서버에서 보내준 메세지',
		},
	};
}
