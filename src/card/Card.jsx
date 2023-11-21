import './Card.scss';

export default function Card({ colorName = 'gray', index, wid = 250, show = true }) {
	return (
		<div className='Card' style={{ width: wid }}>
			<div className='bgBox' style={{ backgroundColor: colorName }}></div>
			{show && (
				<div className='txtBox'>
					{index + 1}: {colorName}
				</div>
			)}
		</div>
	);
}
