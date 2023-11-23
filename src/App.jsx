import { useState } from 'react';
import './App.scss';
import Modal from './modal/Modal';

export default function App() {
	const [Open, setOpen] = useState(false);

	return (
		<>
			<h1>Parent</h1>
			<button onClick={() => setOpen(!Open)}>open</button>
			{Open && <Modal setOpen={setOpen} />}
		</>
	);
}
