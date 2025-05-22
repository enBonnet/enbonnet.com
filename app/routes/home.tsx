import { HeroSection } from "~/components/hero-section";
import { ProjectsSection } from "~/components/projects-section";

export function meta() {
	const baseUrl = "https://enbonnet.com";
	return [
		{ title: "Ender Bonnet - Software Engineer" },
		{
			name: "description",
			content:
				"Software Engineer at Uber, specialized in UberEats. Based in Santiago, Chile. Experienced in web development and software engineering.",
		},
		{
			name: "keywords",
			content:
				"Ender Bonnet, Software Engineer, Web Development, UberEats, Santiago, Chile",
		},
		{ property: "og:title", content: "Ender Bonnet - Software Engineer" },
		{
			property: "og:description",
			content:
				"Software Engineer at Uber, specialized in UberEats. Based in Santiago, Chile.",
		},
		{ property: "og:type", content: "website" },
		{ property: "og:locale", content: "en_US" },
		{ property: "og:image", content: `${baseUrl}/logo64.png` },
		{ property: "og:image:width", content: "64" },
		{ property: "og:image:height", content: "64" },
		{ property: "og:image:type", content: "image/png" },
		{ property: "og:url", content: baseUrl },
		{ name: "twitter:card", content: "summary" },
		{ name: "twitter:title", content: "Ender Bonnet - Software Engineer" },
		{
			name: "twitter:description",
			content:
				"Software Engineer at Uber, specialized in UberEats. Based in Santiago, Chile.",
		},
		{ name: "twitter:image", content: `${baseUrl}/logo64.png` },
	];
}

export default function Home() {
	return (
		<>
			<HeroSection />
			<ProjectsSection />
		</>
	);
}
