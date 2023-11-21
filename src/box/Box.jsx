import './Box.scss';
export default function Box() {
	const changeBg = (e, color) => {
		e.target.style.backgroundColor = color;
	};

	return (
		<div className='Box' onClick={(e) => changeBg(e, 'pink')}>
			Box
		</div>
	);
}
