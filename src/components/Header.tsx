import classNames from 'classnames';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

type Props = {};

export default function Header({}: Props) {
	let location = useLocation();
	return (
		<header className="header">
			<p className="header__label">Công ty TNHH</p>
			<h1 className="header__title">CENTRAL SECURITY</h1>
			<nav className="header__nav">
				<ol>
					<li className={classNames({ selected: location.pathname === '/' })}>
						<div className="dot">●</div>
						<Link to="/" className="text">
							Trang Chủ
						</Link>
					</li>
					<li
						className={classNames({
							selected: location.pathname === '/partner',
						})}
					>
						<div className="dot">●</div>
						<Link to="/partner" className="text">
							Đối tác
						</Link>
					</li>
					<li
						className={classNames({ selected: location.pathname === '/about' })}
					>
						<div className="dot">●</div>
						<Link to="/about" className="text">
							Thông tin
						</Link>
					</li>

					<li
						className={classNames({
							selected: location.pathname === '/contact',
						})}
					>
						<div className="dot">●</div>
						<Link to="/contact" className="text">
							Liên hệ
						</Link>
					</li>
				</ol>
			</nav>
		</header>
	);
}
