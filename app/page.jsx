import HeroSection from '../sections/HeroSection'
import QualitySection from '../sections/QualitySection'
import ExplorerSection from '../sections/ExplorerSection'
import PicturesSection from '../sections/PicturesSection'
import Featured from '../sections/FeaturedSection'

export default function Home() {
	return (
		<main>
			<HeroSection/>

			<QualitySection/>

			<Featured/>

			<ExplorerSection />

			<PicturesSection />
		</main>
	)
}
