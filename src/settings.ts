export const profile = {
	fullName: 'Alessandro Stefanone',
	title: 'Ph.D. Candidate in Mechanical Engineering',
	institute: 'Politecnico di Milano',
	 // Author name to be highlighted in the papers section
		research_areas: [
			{ title: 'PLM software', description: 'Research on PLM systems, focusing on integration and optimization for engineering processes.', field: 'plm' },
			{ title: 'Digital Twin', description: 'Development and application of DT technologies in product development and monitoring', field: 'computer-science' },
			{ title: 'Machine Learning', description: 'Application of state-of-the-art machine learning techniques in the industrial engineering domain', field: 'engineering' },
		// { title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'alessandro.stefanone@polimi.it',
	linkedin: 'https://www.linkedin.com/in/alessandro-stefanone-784a19134/',
	x: '',
	github: 'https://github.com/alessandrostefanone-polimi',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
}

export const template = {
	website_url: 'https://alessandrostefanone.github.io', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'winter', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'night', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const defaultTheme = template.lightTheme;

export const seo = {
	default_title: 'Alessandro Stefanone',
	default_description: 'Alessandro Stefanone - Ph.D. Candidate in Mechanical Engineering at Politecnico di Milano',
	default_image: '/AS_photo.jpg',
}
