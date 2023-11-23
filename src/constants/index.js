/* eslint-disable no-unused-vars */
	import {
		mobile,
		backend,
		creator,
		web,

		javascript,
		typescript,
		html,
		css,
		reactjs,
		redux,
		tailwind,
		nodejs,
		mongodb,
		git,
		figma,
		docker,
		java,
		python,
		c,
		cpp,
		aws,
		mySQL,

		meta,
		starbucks,
		NMSU,
		NMSU1,
		tesla,
		shopify,

		carrent,
		jobit,
		tripguide,
		gpt3,
		restaurant,
		bank,

		website,

		threejs,
	} from "../assets";





	export const navLinks = [
		{
			id: "about",
			title: "About",
		},
		{
			id: "work",
			title: "Work",
		},
		{
			id: "contact",
			title: "Contact",
		},
	];

	export const job = [
		{
			visit: "https://github.com/kharo019",
			title: "Github"
		},{
			visit: "https://www.linkedin.com/in/kevin-haro-515283207/",
			title: "Indeed",
		},
		{
			visit: "https://profile.indeed.com/?hl=en_US&co=US&from=gnav-jobseeker-profile--profile-one-frontend",
			title: "LinkedIn",
		}
	];





	const services = [
		{
			title: "Web Developer",
			icon: web,
		},
		{
			title: "React Native Developer",
			icon: mobile,
		},
		{
			title: "Backend Developer",
			icon: backend,
		},
		
	];





	const technologies = [
		{
			name: "HTML 5",
			icon: html,
		},
		{
			name: "CSS 3",
			icon: css,
		},
		{
			name: "JavaScript",
			icon: javascript,
		},
		{
			name: "TypeScript",
			icon: typescript,
		},
		{
			name: "React JS",
			icon: reactjs,
		},
		{
			name: "Tailwind CSS",
			icon: tailwind,
		},
		{
			name: "Node JS",
			icon: nodejs,
		},
		{
			name: "Three JS",
			icon: threejs,
		},
		{
			name: "Java",
			icon: java,
		},
		{
			name: "Python",
			icon: python,
		},
		{
			name: "C",
			icon: c,
		},
		{
			name: "C++",
			icon: cpp,
		},
		{
			name: "AWS",
			icon: aws,
		},
		{
			name: "git",
			icon: git,
		},
		{
			name: "mySQL",
			icon: mySQL,
		},
		
	];





const experiences = [
	{
		title: "Computer Tech ",
		company_name: "NMSU",
		icon: NMSU1,
		iconBg: "#383E56",
		date: "October 2021 - March 2023",
		points: [
			"Linked computers to network and peripheral equipment",
			"Test and installed equipment for staff such as desktops, laptops, monitors, etc.",
			"Explained technical information in clear terms to non-technical individuals to promote a better understanding",
			"Worked with different diveristy programs to help out their tehnical issues and/or setups",
		],
	},
	// Start comment here!!
	{
	title: "React Native Developer",
	company_name: "Tesla",
	icon: tesla,
	iconBg: "#E6DEDD",
	date: "Jan 2021 - Feb 2022",
	points: [
		"Developing and maintaining web applications using React.js and other related technologies.",
		"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
		"Implementing responsive design and ensuring cross-browser compatibility.",
		"Participating in code reviews and providing constructive feedback to other developers.",
	],
	},
	{
	title: "Web Developer",
	company_name: "Shopify",
	icon: shopify,
	iconBg: "#383E56",
	date: "Jan 2022 - Jan 2023",
	points: [
		"Developing and maintaining web applications using React.js and other related technologies.",
		"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
		"Implementing responsive design and ensuring cross-browser compatibility.",
		"Participating in code reviews and providing constructive feedback to other developers.",
	],
	},
	{
	title: "Full stack Developer",
	company_name: "Meta",
	icon: meta,
	iconBg: "#E6DEDD",
	date: "Jan 2023 - Present",
	points: [
		"Developing and maintaining web applications using React.js and other related technologies.",
		"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
		"Implementing responsive design and ensuring cross-browser compatibility.",
		"Participating in code reviews and providing constructive feedback to other developers.",
	],
	},
	// end comment here 
	];





	const testimonials = [
	{
	testimonial:
		"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
	name: "Sara Lee",
	designation: "CFO",
	company: "Acme Co",
	image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
	testimonial:
		"I've never met a web developer who truly cares about their clients' success like Rick does.",
	name: "Chris Brown",
	designation: "COO",
	company: "DEF Corp",
	image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
	testimonial:
		"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
	name: "Lisa Wang",
	designation: "CTO",
	company: "456 Enterprises",
	image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
	];






	const projects = [
		{
			name: "Old Web Developer Protofolio",
			description:
				"By using React.js && Tailwind CSS, I created a modern UI/UX of a fictional bank. This is my first project using TailWind CSS and seeing the differences of using purely React and TailWind has opened my eyes in the different ways a website can be designed.",
			tags: [
				{
				name: "React",
				color: "blue-text-gradient",
				},
				{
				name: "JavaScript",
				color: "green-text-gradient",
				},
				{
				name: "TailWindCSS",
				color: "pink-text-gradient",
				},
			],
			image: bank,
			source_code_link: "https://github.com/kharo019/bankModern",
			visit: "https://bank-modern-nine.vercel.app",
		},
		{
			name: "HooBank",
			description:
				"By using React.js && Tailwind CSS, I created a modern UI/UX of a fictional bank. This is my first project using TailWind CSS and seeing the differences of using purely React and TailWind has opened my eyes in the different ways a website can be designed.",
			tags: [
				{
				name: "React",
				color: "blue-text-gradient",
				},
				{
				name: "JavaScript",
				color: "green-text-gradient",
				},
				{
				name: "TailWindCSS",
				color: "pink-text-gradient",
				},
			],
			image: bank,
			source_code_link: "https://github.com/kharo019/bankModern",
			visit: "https://bank-modern-nine.vercel.app",
		},


		{
		name: "Restaurant Landing Page -- Gerícht",
		description:
			"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
		tags: [
			{
			name: "React",
			color: "blue-text-gradient",
			},
			{
			name: "Javascript",
			color: "green-text-gradient",
			},
		],
		image: restaurant,
		source_code_link: 'https://github.com/kharo019/fine-dining-app',
		visit: 'https://fine-dining-app.vercel.app',
		},


		{
		name: "Clone GPT3",
		description:
			"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "Javascript",
				color: "green-text-gradient",
				},
			
			],
			image: gpt3,
			source_code_link: 'https://github.com/kharo019/CloneGPT3',
			visit: 'https://clonegpt3.vercel.app',
		},
		];

export { services, technologies, experiences, testimonials, projects };