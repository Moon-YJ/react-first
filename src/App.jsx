function App() {
	console.log('re-render');
	//해당 경우에는 이벤트 발생시 State의 정보값을 변경하는것이 아닌
	//일반 변수의 값을 변경하고 있기 때문에
	//react입장에서는 해당 내용의 변경사항을 중요하게 인식하지 않아서 컴포넌트 재호출(재렌더)하지 않음
	let num = 0;

	const name = '홍길동';
	const cl_name = 'wrap';

	const changeButton = (e, txt) => {
		e.target.innerText = txt + num++;
	};

	const changeBtn = (e, txt) => {
		e.target.innerText = txt;
	};

	/*
		JSX문 내부 {}안에서 가능한 연산은 제한적
			- 변수 치환
			- 조건문 (3항연산자, &&연산자)
			- 반복문 (map)
	*/

	// 위와 같이 직접 변수값을 변경해도 화면의 변경은 일어나지만 해당 변경사항은 리액트의 제어에서 벗어난 일반적인 DOM의 구조가 변경되는것 뿐
	// 굳이 번거롭게 일반 변수가 아닌 State라는 것만 가지고 화면을 제어하도록 강제하는 이유

	return (
		// 주석 가능
		<>
			{/* JSX문 안쪽에서는 주석도 연산이 필요하기 때문에 중괄호 처리 */}
			<section className={cl_name}>
				<h1>안녕하세요. 제 이름은 {name}입니다.</h1>
				<button onClick={(e) => changeBtn(e, 'button2')}>버튼</button>
				<button onClick={(e) => changeButton(e, 'button')}>버튼</button>
			</section>
		</>
	);
}

export default App;

/*
	리액트에서의 re-render, re-paint
		- re-render: 해당 컴포넌트를 재호출
		- 리액트에서 re-render 발생시키면서 실제 다음의 두 경우에만 발생
			1. state라는 정보값이 변경되거나
			2. 물리적으로 JSX의 구조가 변경되거나
*/

/*
	1. 리액트에서 번들러가 필요한 이유
		: Bundler (Webpack : 여러개의 파일들을 구동가능한 상태인 하나의 파일로 묶어주는 기능)
			- 전통적인 웹페이지 제작은 웹페이지 하나당 한개의 html 파일만 있으면 됨
			- 컴포넌트 단위로 한페이지에서 각 기능별로 구현되어야하는 UI를 JS파일로 구분해놓음
			- 결국 react에서는 하나의 페이지를 만들기 위해서 많은 js파일들이 필요하기 때문에
			- 해당 JS파일들을 하나로 묶어서 빈 HTML파일에 넘겨줘야됨
			- 브라우저는 먼저 빈 HTML을 화면에 로드하고 그 후에 하나의 파일로 압축되어 있는 빌드된 리액트 JS를 읽어서 돔을 출력

	2. public (번들러가 관여하지 않는 static한 파일이 모아져 있는 폴더)
		- index.html: 실제 브라우저가 구동시 읽을 html파일, 추후 번들링된 리액트 js파일이 해당 index.html파일에 삽입됨

	3. src (실제 작업할 파일이 있는 폴더, 해당 파일들은 webpack이라는 번들러에 의해서 추후에 가공이 일어나는 폴더)
		- App.jsx : 컴포넌트파일 html태그가 아닌 JSX라는 문법체계를 이용해서 가상돔 형태로 UI를 구성하는 실제 작업 파일 (마스터 컴포넌트 파일)
		- index.js : App.jsx에 결합된 여러가지 컴포넌트 파일들을 해석해서 public폴더 안쪽의 index.html안쪽에 연결해주는 역할

	4. 컴포넌트 함수의 필수 조건
		- 함수명을 대문자로 시작
		- JSX를 리턴
		- 하나의 컴포넌트 함수는 복수개의 JSX요소를 리턴할 수 없음
		- 따라서 복수개의 요소들을 내보내고 싶을때는 상위요소로 wrapping 처리
		- 상위 불필요한 wrapping요소 출력이 싫으면 태그명이 없는 <></> 빈 꺽쇠(fragment)로 감싸줌 
		- JSX는 기본적으로 자바스크립트 문법이기 때문에 예약어 명령어 불가능 (ex. class는 js에서 객체지향 생성자이므로 className 사용)
	
	5. JSX
		- 리액트에서 전용으로 쓰이는 DOM생성 문법
		- 원래는 React.createElement()라는 메서드를 이용해서 복잡하게 구성해야하는 로직을 HTML태그를 따라한 친화적인 문법으로 편하게 DOM을 생성하기 위한 리액트만의 문법체계
*/

/*
	- export default 컴포넌트 함수
		: 하나의 파일에서 하나의 컴포넌트 함수를 내보낼때 사용
	- export 컴포넌트 함수
		: 하나의 파일에서 여러개의 컴포넌트 함수를 등록해서 선별적으로 내보낼때(중괄호로 import)
*/
