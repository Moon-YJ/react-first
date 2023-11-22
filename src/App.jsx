import { useState } from 'react';
import Modal from './modal/Modal';

export default function App() {
	const [Color, setColor] = useState('black');
	const [IsOpen, setIsOpen] = useState(false);
	//자주쓰는 패턴 (정보값을 토대로 반복 가상돔 생성)
	/*	
		{배열State.map((반복데이서, 순서)=>{
			return <JSX>{활용할 값}</JSX>
		})}
	*/
	const [DbColors] = useState(['red', 'hotpink', 'aqua', 'orangered', 'violet']);

	return (
		<>
			{DbColors.map((dbColor, idx) => {
				return (
					<button key={dbColor + idx} onClick={(e) => setColor(dbColor)}>
						{dbColor}
					</button>
				);
			})}
			<button onClick={() => setColor('hotpink')}>제목 글자색 변경</button>
			<h1 style={{ color: Color }}>부모 컴포넌트</h1>
			<button onClick={() => setIsOpen(!IsOpen)}>{IsOpen ? '모달닫기' : '모달열기'}</button>
			{IsOpen && <Modal />}
		</>
	);
}

/*
	// react에서 화면렌더링에 관여하는 중요한 정보값을 state로 관리하고
	// 해당 state를 전용함수로만 변경해야 되는 이유
		- 화면의 변화를 담당하는 정보값은 중요한 정보값 이므로 쉽게 변경하지 못하도록 미리 약속된 규약에 의해서만 변경할수 있도록 강제하기 위함
		- 화면의 변경을 담당하는 중요한 정보값은 무조건 state에 담기도록 강제되어 있으므로 추후 유지보수시 개발자는 State값만 관리하면 되기 때문에 프로젝트 유지보수의 효율성이 올라감
		- 리액트는 State가 변경되어야만 해당 내용의 변경점을 인식해서 자기 자신을 재호출
*/

/*
	1. library vs framework
		- library (react, jQuery): 자주 쓰는 편의기능의 문법만 함수형태로 따로 준비되어 있는 구조라서 코드의 응용범위가 넓은 대신 개발자 역량에 따라서 해당 코드를 조합해야하므로 난이도는 있음
		- framework (angular, vue, next): 모든 시스템틀을 강제해서 framework만의 고유 문법만 가지고 개발 가능하기 때문에 개발자의 개입이 적어져서 난이도는 쉬워지지만 응용범위가 적어짐

	2. react에서의 hook 개념 (16버전 새로 생긴 개념, 이전까지는 객체지향의 class 기반)
		- 리액트에 많이 쓰는 기능들을 함수형태로 모아놓은 기능 모음집(리액트 기반의 필수 내장 플러그인)
	
	3. 리액트 hook의 기본 convention
		- 함수이름의 시작을 use로 시작해야됨
		- 리턴값을 내보냄
		- hook은 핸들러함수안쪽, 또다른 hook안에서 호출 불가
		- 컴포넌트 함수의 상위 루트단에서만 호출가능

	4. 리액트에서 가장 많이 쓰이는 기본 hook 3대장
		- useState : 화면의 재랜더링을 담당하는 중요한 정보값을 담을 그릇을 생성 및 관리
		- useEffect : 컴포넌트의 생명주기(Life Cycle)를 관리하기 위함
		- useRef : 화면의 재랜더링을 유발하지 않으면 특정 값을 관리하거나 가상DOM이 아닌 realDOM을 직접 선택시

	5. CustomHook : 사용자가 필요에의해서 직접 등록하는 hook
		- 내장되어있는 hook이 아니라 사용자가 직접 만드는 hook
		- 규칙은 기존 hook과 동일
*/
