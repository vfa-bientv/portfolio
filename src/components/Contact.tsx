import * as React from 'react';

export interface ContactProps {}

export default function Contact(props: ContactProps) {
	return (
		<section className="page__contact">
			<a href="https://goo.gl/maps/PjXian5XnDaE6Fh7A" target="_blank">
				Address:{' '}
				<span className="font-medium hover:opacity-40 ">
					74 Nguyễn Khoái, P.2, Q.4, TP.HCM
				</span>
			</a>
			<a href="mailto:baovecentral@gmail.com" target="_blank">
				Email:{' '}
				<span className="font-medium hover:opacity-40 ">test1@gmail.com</span>
			</a>
			<a href="tel:+842866844492">
				Phone:{' '}
				<span className="font-medium hover:opacity-40 ">(028) 6684 4492</span>
			</a>
		</section>
	);
}
