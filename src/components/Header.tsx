import classNames from 'classnames';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

type Props = {};

export default function Header({}: Props) {
	let location = useLocation();
	return (
		<header className="header">
			<p className="header__label">Team</p>
			<h1 className="header__title">Lorem 312</h1>
			<nav className="header__nav">
				<ol>
					<li
						className={classNames({
							selected: location.pathname === '/' || location.pathname === '',
						})}
					>
						<div className="dot">●</div>
						<Link to="/" className="text">
							Home
						</Link>
					</li>
					<li
						className={classNames({
							selected: location.pathname === '/project',
						})}
					>
						<div className="dot">●</div>
						<Link to="/project" className="text">
							Project
						</Link>
					</li>
					<li
						className={classNames({
							selected: location.pathname === '/contact',
						})}
					>
						<div className="dot">●</div>
						<Link to="/contact" className="text">
							Contact
						</Link>
					</li>
				</ol>
			</nav>
		</header>
	);
}
