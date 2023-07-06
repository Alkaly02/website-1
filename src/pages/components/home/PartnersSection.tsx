import Image from 'next/image';

import propel from '/public/img/partners/propel.png';
import xarala from '/public/img/partners/xarala.png';
import dexchange from '/public/img/partners/dexchange.png';

const PartnersSection = () => (
	<section className="">
		<div className="flex flex-col items-center lg:flex-row lg:justify-between">
			<h2 className="text-lighter font-bold text-4xl sm:text-center lg:text-left">
				Ils nous ont fait <br />
				<span className="text-darker">confiance</span>
			</h2>
			<div className="flex flex-wrap -mx-1 lg:-mx-4">
				<Partner name="Propel" url="https://withpropel.com/" img={propel.src} />
				<Partner name="Xarala" url="https://xarala.co/" img={xarala.src} />
				<Partner
					name="Dexchange"
					url="https://dexchange-transfert.com/"
					img={dexchange.src}
				/>
			</div>
		</div>
	</section>
);

interface PartnerProps {
	url: string;
	img: string;
	name: string;
}

const Partner = ({ url: link, img, name }: PartnerProps) => (
	<div className="my-2 px-2 w-full md:w-1/2 lg:my-2 lg:px-2 lg:w-1/3">
		<a
			style={{ position: 'relative' }}
			href={link}
			rel="noreferrer"
			target="_blank"
			className="bg-gray-100 w-full h-32 flex items-center justify-center shadow-md"
		>
			<Image src={img} width={250} height={100} alt="profile" />
		</a>
	</div>
);

export default PartnersSection;
