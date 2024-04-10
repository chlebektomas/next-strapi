import Link from "next/link";
import { Logo } from "@/components/logo";

type SocialLink = {
	id: number;
	text: string;
	url: string;
};

type FooterProps = {
	data: {
		logoText: {
			id: number;
			text: string;
			url: string;
		};
		text: string;
		socialLink: SocialLink[];
	};
};

function selectSocialIcon(url: string) {
	if (url.includes("linkedin")) return <LinkedIn className="size-6" />;
	if (url.includes("github")) return <GithubIcon className="size-6" />;
	return null;
}

export function Footer({ data }: Readonly<FooterProps>) {
	const { logoText, socialLink, text } = data;
	return (
		<div className="dark bg-gray-900 text-white py-8">
			<div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
				<Logo dark text={logoText.text} />
				<p className="mt-4 md:mt-0 text-sm text-gray-300">{text}</p>
				<div className="flex items-center space-x-4">
					{socialLink.map((link) => {
						return (
							<Link
								key={link.id}
								className="text-white hover:text-gray-300"
								href={link.url}
							>
								{selectSocialIcon(link.url)}
								<span className="sr-only">
									Visit us at {link.text}
								</span>
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
}

function LinkedIn(props: any) {
	return (
		<svg
			{...props}
			width="48"
			height="48"
			fill="currentColor"
			viewBox="0 0 48 48"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M20.9716667,33.5527338 L25.001,33.5527338 L25.001,27.1328007 C25.001,25.439485 25.3213333,23.7988354 27.4206667,23.7988354 C29.491,23.7988354 29.517,25.7351486 29.517,27.2404662 L29.517,33.5527338 L33.5506667,33.5527338 L33.5506667,26.4341413 C33.5506667,22.9381777 32.796,20.2505391 28.711,20.2505391 C26.7483333,20.2505391 25.432,21.3265278 24.8943333,22.3471839 L24.839,22.3471839 L24.839,20.5725357 L20.9716667,20.5725357 L20.9716667,33.5527338 Z M16.423,14.1202696 C15.1273333,14.1202696 14.0823333,15.1682587 14.0823333,16.4595785 C14.0823333,17.7508984 15.1273333,18.7992208 16.423,18.7992208 C17.7133333,18.7992208 18.761,17.7508984 18.761,16.4595785 C18.761,15.1682587 17.7133333,14.1202696 16.423,14.1202696 L16.423,14.1202696 Z M14.4026667,33.5527338 L18.4406667,33.5527338 L18.4406667,20.5725357 L14.4026667,20.5725357 L14.4026667,33.5527338 Z M9.76633333,40 C8.79033333,40 8,39.2090082 8,38.2336851 L8,9.76631493 C8,8.79065843 8.79033333,8 9.76633333,8 L38.234,8 C39.2093333,8 40,8.79065843 40,9.76631493 L40,38.2336851 C40,39.2090082 39.2093333,40 38.234,40 L9.76633333,40 Z"></path>
		</svg>
	);
}

function GithubIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
			<path d="M9 18c-4.51 2-5-2-7-2" />
		</svg>
	);
}
