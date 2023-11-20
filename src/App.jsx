function App() {
	return (
		<div className='App'>
			<h1>Hello</h1>
		</div>
	);
}

export default App;

/*
	1. 컴포넌트 함수의 필수 조건
		- 함수명을 대문자로 시작
		- JSX를 리턴
		- 하나의 컴포넌트 함수는 복수개의 JSX요소를 리턴할 수 없음
		- 따라서 복수개의 요소들을 내보내고 싶을때는 상위요소로 wrapping 처리
		- 상위 불필요한 wrapping요소 출력이 싫으면 태그명이 없는 <></> 빈 꺽쇠(fragment)로 감싸줌 
		- JSX는 기본적으로 자바스크립트 문법이기 때문에 예약어 명령어 불가능 (ex. class는 js에서 객체지향 생성자이므로 className 사용)
	
	2. JSX
		- 리액트에서 전용으로 쓰이는 DOM생성 문법
		- 원래는 React.createElement()라는 메서드를 이용해서 복잡하게 구성해야하는 로직을 HTML태그를 따라한 친화적인 문법으로 편하게 DOM을 생성하기 위한 리액트만의 문법체계
*/
