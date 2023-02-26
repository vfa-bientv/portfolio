import * as React from 'react';

export interface ContactProps {}

export default function Contact(props: ContactProps) {
	return (
		<section className="page__contact">
			<a href="https://goo.gl/maps/PjXian5XnDaE6Fh7A" target="_blank">
				Văn phòng:{' '}
				<span className="font-medium hover:opacity-40 ">
					74 Nguyễn Khoái, P.2, Q.4, TP.HCM
				</span>
			</a>
			<a href="mailto:baovecentral@gmail.com" target="_blank">
				Email:{' '}
				<span className="font-medium hover:opacity-40 ">
					baovecentral@gmail.com
				</span>
			</a>
			<a href="tel:+842866844492">
				Số điện thoại:{' '}
				<span className="font-medium hover:opacity-40 ">(028) 6684 4492</span>
			</a>
			<a
				href="https://masothue.com/0316258823-cong-ty-tnhh-central-security"
				target="_blank"
			>
				Mã số thế:{' '}
				<span className="font-medium hover:opacity-40 ">0316258823</span>
			</a>
		</section>
	);
}
