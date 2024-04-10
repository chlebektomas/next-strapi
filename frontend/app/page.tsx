import { getHomePageData } from "@/data/loaders";

import { FeatureSection } from "@/components/feature-section";
import { HeroSection } from "@/components/hero-section";

// For matching order in strapi
function blockRenderer(block: any) {
	switch (block.__component) {
		case "layout.hero-section":
			return <HeroSection key={block.id} data={block} />;
		case "layout.features-section":
			return <FeatureSection key={block.id} data={block} />;
		default:
			return null;
	}
}

export default async function Home() {
	const strapiData = await getHomePageData();

	const { blocks } = strapiData;

	if (!blocks) return <p>No sections found</p>;

	return <main>{blocks.map(blockRenderer)}</main>;
}
