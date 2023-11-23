import { useRef, useState } from 'react';
import './App.scss';

/*
	- useRef에서 알아야 되는 사항 핵심정리
		: DOM참조객체에 담는법
			1-1. const 변수명 = useRef(null); 돔을 담을 빈 참조객체 생성
			1-2. <div ref={변수명}></div>; 원하는 요소에 참조객체 연결
			1-3. 변수명.current.style~; 참조객체에 담겨있는 돔 호출

		: 모션작업시 화면 재랜더링하지 않으면서 수치값 변경하는 방법
			2-1. const num = useRef(초기수치);
			2-2. num.current = 변경할 수치값
*/

// useRef는 해당 랜더링 사이클에 바로 변경사항 반영
// state는 다음번 랜더링 사이클에 변경사항 반영

export default function App() {
	const num = useRef(0);
	const box = useRef(null);
	const rotation = (count) => {
		box.current.style.transform = `rotate(${45 * count}deg)`;
	};

	const num1 = useRef(0);
	const [Num2, setNum2] = useState(0);
	const handleClick = () => {
		num1.current++;
		setNum2(Num2 + 1);

		console.log('num1', num1.current);
		console.log('Num2', Num2);
	};

	return (
		<>
			<button onClick={() => rotation(--num.current)}>left</button>
			<button onClick={() => rotation(++num.current)}>right</button>
			<div ref={box} className='box'></div>

			<button onClick={handleClick}>Test 버튼</button>
		</>
	);
}

/*
	- state
		: 해당 값이 변경되면 무조건 컴포넌트 재랜더링됨, 이전 랜더링 사이클값 유지됨
		: 다음번 랜더링 사이클에 변경된 값이 반영됨
	
	- useRef
		: 리액트 내부적으로 기억할 수 있는 값을 담기 위한 참조객체 생성 함수
		: 사례1) 모션을 위해서 자주 바뀌는 수치값을 컴포넌트를 재호출하지 않으면서 관리할 때
		: 사례2) realDOM 요소를 리액트 구조안에서 선택해서 써야할 때
		
	- 사례1에 대한 설명
		: useRef를 통해서 생성한 참조객체에 저장한 값은 다른 state 변경에 의해서 컴포넌트가 재랜더링되더라도 이전 사이클에서의 값을 유지함
		: 참조객체에 담겨있는 값을 임의로 변경하더라도 해당 값의 변경은 state와 다르게 컴포넌트를 재랜더링 시키지 않음
		: 화면의 정보를 담당하는 중요한 정보값이 단지 모션을 위한 수치값같은 덜 중요한 값들은 참조객체로 관리하는것이 효율적

	- 사례2에 대한 설명
		: 리액트에서 어쩔 수 없이 realDOM을 직접 가져와서 이벤트 연결해야하는 경우
		: 스크롤 모션 이벤트 input요소에 포커스 연결 이벤트
		: document.querySelector는 리액트의 제어에서 벗어난 이전 랜더링 사이클에서 생성된 과거 신뢰할 수 없는 DOM을 참조
		: 따라서 useRef를 통해 참조객체에 담겨있는 realDOM은 리액트에서 관리하는 신뢰할 수 있는 최신 상태의 realDOM을 참조
*/

/*
	- useRef값은 state와달리 값이 변경시 다음번 렌더링 싸이클로 넘어가는 경우가 아니기 때문에
	- 다음의 코드에서 볼수 있듯이 전위, 후위에 따른 결과값 차이가 발생하지 않음
	- 전위증감 연산자인 경우
		// ++num.current;
		// num.current = num.current +1;

	- 후위증감 연산자인 경우
		// num.current++;
		// num.current = num.current;
		// num.current = num.current + 1;
*/
