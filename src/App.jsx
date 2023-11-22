import { useState } from 'react';

/*
	- State가 변경 및 반영되는 시점
		1.이벤트 발생시 State변경함수로 변경될 때 해당 렌더링사이클에서 변경됨
		2.변경된 State값이 실제 DOM에 반영되는 싸이클 그 다음번 렌더링 사이클 
*/

export default function App() {
	console.log('render');
	const [Txt, setTxt] = useState('old');

	/*
	- 위의 로직 실행순서
		1. State값 초기화됨 (render1)
		2. 버튼 클릭시 state값 변경은 되지만 해당 변경사항이 실제 반영되지 않음 (render1)
		3. 리액트가 내부적으로 state값 변경을 인지해서 컴포넌트 재실행
		4. 이전 렌더링사이클 변경된 state값이 실제 반영됨 (render2)
	*/

	return (
		<>
			<h1>{Txt}</h1>
			<button
				onClick={() => {
					setTxt('new');
					console.log(Txt);
				}}
			>
				글자변경
			</button>
		</>
	);
}
