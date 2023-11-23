import { useRef } from 'react';
import './App.scss';

export default function App() {
	const num = useRef(0);
	const box = useRef(null);

	return (
		<>
			<button
				onClick={() => {
					num.current--;
					box.current.style.transform = `rotate(${45 * num.current}deg)`;
				}}
			>
				left
			</button>
			<button
				onClick={() => {
					num.current++;
					box.current.style.transform = `rotate(${45 * num.current}deg)`;
				}}
			>
				right
			</button>
			<div ref={box} className='box'></div>
		</>
	);
}

/*
	- state: 해당 값이 변경되면 무조건 컴포넌트 재랜더링됨, 이전 랜더링 사이클값 유지됨
	
	- useRef
		: 리액트 내부적으로 기억할 수 있는 값을 담기 위한 참조객체 생성 함수
		: 사례1) 모션을 위해서 자주 바뀌는 수치값을 컴포넌트를 재호출하지 않으면서 관리할 때
		: 사례2) realDOM 요소를 리액트 구조안에서 선택해서 써야할 때
		
	- 사례1에 대한 설명
		: useRef를 통해서 생성한 참조객체에 저장한 값은 다른 state 변경에 의해서 컴포넌트가 재랜더링되더라도 이전 사이클에서의 값을 유지함
		: 참조객체에 담겨있는 값을 임의로 변경하더라도 해당 값의 변경은 state와 다르게 컴포넌트를 재랜더링 시키지 않음
		: 화면의 정보를 담당하는 중요한 정보값이 단지 모션을 위한 수치값같은 덜 중요한 값들은 참조객체로 관리하는것이 효율적

	- 사례2에 대한 설명
		: 리액트에서 realDOM을 직접 가져와서 이벤트 연결해야하는 경우
		: 스크롤 모션 이벤트 input요소에 포커스 연결 이벤트
		: document.querySelector는 리액트의 제어에서 벗어난 이전 랜더링 사이클에서 생성된 과거 신뢰할 수 없는 DOM을 참조
		: 따라서 useRef를 통해 참조객체에 담겨있는 realDOM은 리액트에서 관리하는 신뢰할 수 있는 최신 상태의 realDOM을 참조
*/
