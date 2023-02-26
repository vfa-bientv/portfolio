import * as React from 'react';

export interface HomeProps {}

export default function Home(props: HomeProps) {
	return (
		<section className="page__home">
			<p>
				<span>Với phương châm hoạt động</span>{' '}
				<span>
					“<b>Uy tín - An toàn - Chất lượng - Hiệu quả</b>”
				</span>
				<span> và sự chuyên nghiệp,</span>
				<span> với những đặc trưng riêng biệt</span>
				<span>về dịch vụ an ninh mà công ty cung cấp,</span>
				<span>Công ty CENTRAL SECURITY </span>
				<span>luôn mong muốn được phục vụ </span>
				<span>và mang đến cho Quý khách hàng</span>
				<span>sự cam kết cao nhất về chất lượng dịch vụ.</span>
			</p>
		</section>
	);
}
