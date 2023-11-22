import { useState } from 'react';
import './App.scss';

export default function App() {
	// state값 변경 순서에 따라 결과화면이 달라지는 경우
	// 전위연산자, 후위연산자
	console.log('render');
	let [Index, setIndex] = useState(0);

	return (
		<>
			{/* 
				- 후위연산자
					: setIndex가 실행되는 순간에 0 (해당값의 초기값이 먼저 활용됨 = setIndex(0))
				- 전위연산자
					: setIndex가 실행되는 순간에 바로 초기값을 먼저 증가시킨뒤 호출되므로 setIndex(1)
			*/}
			<button onClick={() => setIndex(--Index)}>left</button>
			<button onClick={() => setIndex(++Index)}>right</button>
			<div className='box' style={{ transform: `rotate(${45 * Index}deg)` }}></div>
		</>
	);
}
