/**
 * Content for the site-fight tiles and the "Latest Updates" carousel.
 * Edit here to add/remove stories — the components render whatever is listed.
 */

export type SiteFight = {
	place: string;
	blurb: string;
	href: string;
	/** Microsoft logo colour for the tile */
	color: string;
	/** Text colour that reads well on `color` */
	ink: string;
};

export const siteFights: SiteFight[] = [
	{
		place: 'Kenosha, WI',
		blurb: 'Local group Kenosha United Against Microsoft Data Center is fighting a major development.',
		href: 'https://www.instagram.com/kuamdc/reels/?__d=1utm_sourceig_embed',
		color: '#F25022',
		ink: '#ffffff'
	},
	{
		place: 'Person County, NC',
		blurb: 'Residents are demanding answers about a 1,300 acre site.',
		href: 'https://cwfnc.org/person/',
		color: '#7FBA00',
		ink: '#ffffff'
	},
	{
		place: 'Vineland, NJ',
		blurb: 'Sustain South Jersey is fighting a Microsoft-backed project in Vineland, NJ.',
		href: 'https://sustainsj.org/open-letter-to-microsoft/',
		color: '#00A4EF',
		ink: '#ffffff'
	},
	{
		place: 'St. Joseph County, IN',
		blurb: 'We Make Indiana demanded better from Microsoft in St. Joseph County.',
		href: 'https://arstechnica.com/tech-policy/2026/09/microsoft-goes-quiet-after-church-groups-ask-for-1-of-data-center-costs/',
		color: '#FFB900',
		ink: '#1a1a1a'
	}
];

export type Update = {
	type: 'Insight' | 'Press release' | 'News';
	title: string;
	href: string;
	/** Optional cover image URL */
	image?: string;
	/** Optional display date, e.g. "Sep 2026" */
	date?: string;
};

export const updates: Update[] = [
	{
		type: 'Insight',
		title: "Microsoft's Monarch data center in West Virginia",
		href: 'https://stand.earth/insights/west-virginia-microsoft-monarch-data-center/'
	},
	{
		type: 'Press release',
		title: 'Community and environmental groups demand Microsoft cease operations at New Jersey AI data center after investigation alleges use of unpermitted, polluting gas generators',
		href: 'https://stand.earth/press-releases/community-and-environmental-groups-demand-microsoft-cease-operations-at-new-jersey-ai-data-center-after-investigation-alleges-use-of-unpermitted-polluting-gas-generators/'
	},
	{
		type: 'Press release',
		title: "Microsoft's sustainability report discloses 80% emissions increase since 2020, reveals energy demand rivaling Denmark — and leaves out massive new fossil gas buildout",
		href: 'https://stand.earth/press-releases/microsofts-sustainability-report-discloses-80-emissions-increase-since-2020-reveals-energy-demand-rivaling-denmark-leaves-out-massive-new-fossil-gas-buildout-that-will-double-companys-pol/'
	},
	{
		type: 'Press release',
		title: "Microsoft's annual pollution to skyrocket 44% from a single off-grid gas-powered project in WV; full 8GW project adds the equivalent of 6 million cars to the highway",
		href: 'https://stand.earth/press-releases/microsofts-annual-pollution-to-skyrocket-44-from-single-off-grid-gas-powered-project-in-wv-full-8gw-project-adds-equivalent-of-6-million-cars-to-highway-according-to-new-analysis/'
	}
];
