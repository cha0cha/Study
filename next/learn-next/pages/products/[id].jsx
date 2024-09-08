import React from 'react';

export default function ProductDetailPage({ message }) {
	return <div> ProductDetailPage : {message}</div>;
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
