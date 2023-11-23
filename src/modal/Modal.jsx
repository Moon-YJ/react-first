import { useEffect } from 'react';
import './Modal.scss';

export default function Modal({ setOpen }) {
	useEffect(() => {
		// 모달창 생성시 스크롤기능 제거
		document.body.style.overflow = 'hidden';

		return () => {
			// 모달창 제거시 다시 스크롤기능 활성화
			document.body.style.overflow = 'auto';
		};
	}, []);

	return (
		<>
			<aside className='mask'></aside>
			<aside className='Modal'>
				<button onClick={() => setOpen(false)}>close</button>
			</aside>
		</>
	);
}
