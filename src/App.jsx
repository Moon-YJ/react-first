import { useState } from 'react';
import Modal from './modal/Modal';

export default function App() {
	const [Show, setShow] = useState(false);

	return (
		<>
			<button onClick={() => setShow(!Show)}>{Show ? '팝업닫기' : '팝업열기'}</button>
			{Show && <Modal />}
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
