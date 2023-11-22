import { useState } from 'react';
import './App.scss';

/*
	- state 관련 주의사항
		1. state값 변경시 해당값은 무조건 다음 랜더링 사이클에 반영됨
		2. 위의 특성상 숫자값을 증가시킬때 후위 증감 연산자 사용하면 안됨(let을 사용하게되므로)
*/

export default function App() {
	console.log('render');
	const [Index, setIndex] = useState(0);

	return (
		<>
			<button onClick={() => setIndex(Index - 1)}>left</button>
			<button onClick={() => setIndex(Index + 1)}>right</button>
			<div className='box' style={{ transform: `rotate(${45 * Index}deg)` }}></div>
		</>
	);
}
