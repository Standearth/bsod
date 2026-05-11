<script lang="ts">
	import '$lib/styles/global.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	const siteUrl = 'https://microsoftlies.com';
	const title = 'Microsoft, Your Climate Plan Ran Into a Problem';
	const description = 'An open letter to Microsoft demanding accountability on climate commitments. Microsoft promised to be carbon negative by 2030 — but emissions keep rising. Sign the letter and demand action.';
	const ogImage = 'https://microsoftlies.com/og.jpg';
	const siteName = 'Stand.earth';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<!-- Primary SEO -->
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
	<meta name="author" content={siteName} />
	<meta name="keywords" content="Microsoft, climate, open letter, carbon negative, climate commitments, Stand.earth, accountability, environment, sustainability, tech industry, corporate responsibility" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:secure_url" content={ogImage} />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Blue Screen of Death style message: Microsoft, your climate plan ran into a problem and needs to restart" />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={siteUrl} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />
	<meta name="twitter:image:alt" content="Blue Screen of Death style message: Microsoft, your climate plan ran into a problem and needs to restart" />
	<meta name="twitter:site" content="@standearth" />
	<meta name="twitter:creator" content="@standearth" />

	<!-- Additional discovery meta -->
	<meta property="article:publisher" content="https://www.facebook.com/Aborea" />
	<link rel="me" href="https://www.instagram.com/standearth/" />

	<!-- Structured Data (JSON-LD) for AEO -->
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebPage",
				"@id": siteUrl,
				"url": siteUrl,
				"name": title,
				"description": description,
				"isPartOf": { "@id": "https://stand.earth/#website" },
				"primaryImageOfPage": { "@id": `${siteUrl}#primaryimage` },
				"image": { "@id": `${siteUrl}#primaryimage` },
				"inLanguage": "en-US",
				"potentialAction": [
					{
						"@type": "ReadAction",
						"target": [siteUrl]
					}
				]
			},
			{
				"@type": "ImageObject",
				"@id": `${siteUrl}#primaryimage`,
				"url": ogImage,
				"width": 1200,
				"height": 630,
				"caption": "Microsoft, your climate plan ran into a problem and needs to restart"
			},
			{
				"@type": "Organization",
				"@id": "https://stand.earth/#organization",
				"name": "Stand.earth",
				"url": "https://stand.earth",
				"logo": {
					"@type": "ImageObject",
					"url": "https://microsoftlies.com/og.jpg"
				},
				"sameAs": [
					"https://www.facebook.com/Standearth",
					"https://www.instagram.com/standearth/",
					"https://twitter.com/standearth",
					"https://www.linkedin.com/company/stand-earth/",
					"https://bsky.app/profile/standearth.bsky.social"
				]
			},
			{
				"@type": "WebSite",
				"@id": "https://stand.earth/#website",
				"url": "https://stand.earth",
				"name": "Stand.earth",
				"publisher": { "@id": "https://stand.earth/#organization" },
				"inLanguage": "en-US"
			},
			{
				"@type": "CreativeWork",
				"@id": `${siteUrl}#letter`,
				"name": "Open Letter to Microsoft on Climate Commitments",
				"description": "An open letter demanding Microsoft honor its promise to be carbon negative by 2030 and stop enabling fossil fuel expansion.",
				"author": { "@id": "https://stand.earth/#organization" },
				"publisher": { "@id": "https://stand.earth/#organization" },
				"url": siteUrl,
				"inLanguage": "en-US",
				"about": [
					{
						"@type": "Thing",
						"name": "Climate change"
					},
					{
						"@type": "Thing",
						"name": "Corporate accountability"
					},
					{
						"@type": "Organization",
						"name": "Microsoft"
					}
				]
			}
		]
	})}</script>`}
</svelte:head>

{@render children()}
