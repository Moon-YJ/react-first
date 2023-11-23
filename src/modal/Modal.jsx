import { useEffect, useState } from 'react';
import './Modal.scss';

export default function Modal({ setOpen }) {
	const [Num, setNum] = useState(0);

	// 컴포넌트 마운트시 한번만 실행
	useEffect(() => {
		console.log('mounted');
		//window.addEventListener('resize', momalMotion);

		// 컴포넌트 소멸시 한번만 실행
		return () => {
			console.log('unmounted');
			//window.removeEventListener('resize', momalMotion);
		};
	}, []);

	// Num State값 변경시마다 실행
	useEffect(() => {
		console.log('Num changed');
	}, [Num]);

	return (
		<aside className='Modal'>
			<button onClick={() => setNum(Num - 1)}>minus</button>
			<button onClick={() => setNum(Num + 1)}>plus</button>

			<button onClick={() => setOpen(false)}>close</button>
			<h1>{Num}</h1>
		</aside>
	);
}
/*
  - useEffect : 컴포넌트의 생명주기를 다루기위한 hook

  - useEffect(콜백함수, 의존성배열)
    useEffect(()=>{
      //실행할 구문
    },[])

  - 컴포넌트 생성(Mount)
    : useEffect에 의존성 배열이 비어있는상태에서 입력한 콜백함수는 컴포넌트 생성시 한번만 실행됨
    : 실사례1 - 모달창 생성시 강제로 스크롤바 제거시
    : 실사례2 -  window전역에 직접 이벤트 연결해야되는 특정 컴포넌트 전용함수를 등록할때
    : 실사례3(중요) - data fetching같이 반복호출할 필요가 없는 무거운 연산을 처리할때

  - 컴포넌트 변경(State Change)
    : useEffect의존성 배열에 특정 state등록, 해당 state가 변경될 때마다 실행됨

  - 컴포넌트 소멸(UnMount)
    : useEffect에 의존성 배열이 비어있는 상태에서 리턴함수를 내보내면 컴포넌트 소멸시 한번만 실행됨
    : 실사례1 - 모달창 제거시 다시 스크롤바 활성화시킬때
    : 실사례2 -  window전역 이벤트 연결되어있는 특정 컴포넌트 전용함수를 제거할때
*/
