import './Card.scss';

export default function Card({ colorName, index, wid, show }) {
	console.log(wid);
	// 부모 컴포넌트에 전달되는 요소들을 props라는 객체로 묶여서 자식 컴포넌트의 파라미터 전달받음
	//console.log(props);
	return (
		<div className='Card' style={{ width: wid }}>
			<div className='bgBox' style={{ backgroundColor: colorName }}></div>
			<div className='txtBox' style={{ display: show }}>
				{index + 1}: {colorName}
			</div>
		</div>
	);
}
