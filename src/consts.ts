export const SITE = {
	title: 'Reporte de VPN Site to Site',
	description: 'Your website description.',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/.github/assets/banner.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Secciones': [
			{ text: 'Introducción', link: 'en/intro' },
			{ text: 'Firewall', link: 'en/firewall' },
			{ text: 'Server de Debian', link: 'en/debian' },
			{ text: 'PFSense Site-to-Site', link: 'en/pfsense-site-to-site' },
			{ text: 'OPENVPN Debian', link: 'en/openvpn-debian' },
			{ text: 'Comprobaciones', link: 'en/comprobaciones' },
		],
		'Extras': [{ text: 'Referencias', link: 'en/referencias' }],
	},
};
