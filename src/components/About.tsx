import * as React from 'react';
import { Link } from 'react-router-dom';

export interface AboutProps {}

export default function About(props: AboutProps) {
	return (
		<section className="page__about w">
			<pre className="w-4/12 mb-8">
				<span>
					Sự chuyên nghiệp trong lĩnh vực bảo vệ - vệ sĩ, được xây dựng trên nền
				</span>
				<span>
					tảng an ninh và khoa học sẽ đem lại cho Quý khách hàng sản phẩm dịch
					vụ
				</span>
				<span>bảo vệ hoàn hảo nhất.</span>
			</pre>

			<pre className="w-4/12 mb-8">
				<span>
					Có các cố vấn giỏi về nghiệp vụ an ninh, pháp luật và đội ngũ lãnh đạo
				</span>
				<span>
					chỉ huy là những cán bộ nguyên sỹ quan An ninh dày dặn kinh nghiệm.
					Mỗi
				</span>
				<span>
					nhân viên đều được tuyển chọn kỹ càng về năng lực và trí tuệ, được
					huấn
				</span>
				<span>
					luyện nghiệp vụ bảo vệ, phòng cháy chữa cháy, võ thuật, sơ cấp cứu.
				</span>
			</pre>

			<pre className="w-4/12 mb-8">
				<span>
					Hợp tác với Central Security, Quý khách hàng hoàn toàn yên tâm vì công
				</span>
				<span>
					ty chúng tôi đã tham gia bảo hiểm đảm bảo tài sản cho quý khách hàng,
					có
				</span>
				<span>
					mối quan hệ mật thiết với các cơ quan chức năng, kịp thời xử lý, ứng
					phó
				</span>
				<span>
					nhanh, hiệu quả khi có tình huống xấu xảy ra ảnh hưởng đến Quý khách
					hàng.
				</span>
			</pre>
		</section>
	);
}
