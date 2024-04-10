import { HeroSection } from "@/components/hero-section";
import { baseUrl } from "@/lib/constants";
import { flattenAttributes } from "@/lib/utils";
import qs from "qs";

const homePageQuery = qs.stringify({
	populate: {
		blocks: {
			populate: {
				image: {
					fields: ["url", "alternativeText"],
				},
				link: {
					populate: true,
				},
			},
		},
	},
});

async function getStrapiData(path: string) {
	const url = new URL(path, baseUrl);
	url.search = homePageQuery;

	try {
		const response = await fetch(url.href, { cache: "no-store" });
		const data = await response.json();

		const flattenedData = flattenAttributes(data);

		return flattenedData;
	} catch (error) {
		console.error(error);
	}
}

export default async function Home() {
	const strapiData = await getStrapiData("/api/home-page");

	const { blocks } = strapiData;

	return (
		<main>
			<HeroSection data={blocks[0]} />
		</main>
	);
}
