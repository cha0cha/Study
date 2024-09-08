import React from 'react';
import styles from './ProductInfo.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { createCartItem } from '@/api';

export default function ProductInfo({ productDetail }) {
	const router = useRouter();
	const { id, name, imageUrl, price } = productDetail;
	const addCart = async () => {
		// 1. 장바구니에 아이템을 담는 API 함수 호출
		// 함수에 전달하는 값을 객체로 (중괄호로 감싸서) 넘겨주면 순서 지켜줄필요없음
		const response = await createCartItem({ id, name, imageUrl, price });
		console.log(response);
		alert('장바구니에 추가됨');
		// 2. 장바구니 페이지로 이동
		router.push('/cart');
	};
	return (
		<div className={styles.container}>
			<div>
				<Image src={imageUrl} width={250} height={250} alt={name}></Image>
			</div>
			<div className={styles.description}>
				<p>{name}</p>
				<p>{price}</p>
				<button onClick={addCart}>장바구니에 담기</button>
			</div>
		</div>
	);
}
