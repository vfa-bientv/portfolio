import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Partner from './components/Partner';

function App() {
	const [isHidden, setIsHidden] = useState<boolean>(false);
	const [isShow, setIsShow] = useState<boolean>(false);

	useEffect(() => {
		let timer = setTimeout(() => {
			setIsHidden(true);
		}, 4000);
		let timerShow = setTimeout(() => {
			setIsShow(true);
		}, 5500);

		return () => {
			clearTimeout(timer);
			clearTimeout(timerShow);
		};
	}, []);

	return (
		<div
			className="p-10 h-screen w-screen flex justify-center items-center"
			style={{ background: '#000' }}
		>
			<h1
				className={classNames('text-3xl', {
					'fade-in': !isHidden,
					'fade-out': isHidden,
					hidden: isShow,
					color: '#fff',
				})}
			>
				<span>C</span>
				<span>E</span>
				<span>N</span>
				<span>T</span>
				<span>R</span>
				<span>A</span>
				<span>L</span> <span>S</span>
				<span>E</span>
				<span>C</span>
				<span>U</span>
				<span>R</span>
				<span>I</span>
				<span>T</span>
				<span>Y</span>
			</h1>
			<div
				className={classNames('h-full w-full ', {
					'border border-white': isHidden,
					hidden: !isShow,
				})}
			>
				<Header />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/partner" element={<Partner />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
