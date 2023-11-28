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
		OldWebPortfolio,
		AggieCompiler,
		ACI,

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
			visit: "https://profile.indeed.com/?hl=en_US&co=US&from=gnav-jobseeker-profile--profile-one-frontend",
			title: "Indeed",
		},
		{
			visit: "https://www.linkedin.com/in/kevin-haro-515283207/",
			title: "LinkedIn",
		}
	];





	const services = [
		{
			title: "Web Developer",
			icon: web,
		},
		{
			title: "Backend Developer",
			icon: backend,
		},
		{
			title: "Software Developer",
			icon: mobile,
		},
		
		
		
	];





	const technologies = [
		// {
		// 	name: "HTML 5",
		// 	icon: html,
		// },
		// {
		// 	name: "CSS 3",
		// 	icon: css,
		// },
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
	// {
	// title: "React Native Developer",
	// company_name: "Tesla",
	// icon: tesla,
	// iconBg: "#E6DEDD",
	// date: "Jan 2021 - Feb 2022",
	// points: [
	// 	"Developing and maintaining web applications using React.js and other related technologies.",
	// 	"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
	// 	"Implementing responsive design and ensuring cross-browser compatibility.",
	// 	"Participating in code reviews and providing constructive feedback to other developers.",
	// ],
	// },
	// {
	// title: "Web Developer",
	// company_name: "Shopify",
	// icon: shopify,
	// iconBg: "#383E56",
	// date: "Jan 2022 - Jan 2023",
	// points: [
	// 	"Developing and maintaining web applications using React.js and other related technologies.",
	// 	"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
	// 	"Implementing responsive design and ensuring cross-browser compatibility.",
	// 	"Participating in code reviews and providing constructive feedback to other developers.",
	// ],
	// },
	// {
	// title: "Full stack Developer",
	// company_name: "Meta",
	// icon: meta,
	// iconBg: "#E6DEDD",
	// date: "Jan 2023 - Present",
	// points: [
	// 	"Developing and maintaining web applications using React.js and other related technologies.",
	// 	"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
	// 	"Implementing responsive design and ensuring cross-browser compatibility.",
	// 	"Participating in code reviews and providing constructive feedback to other developers.",
	// ],
	// },
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
				"By using React.js && JavaScript, I created a portoflio as my resume and to put my web developing skills to the test. This is an unfinished project as I didn't like the very little innovation I put in and decided to make another with a 3-D twist on my web developer portfolio.",
			tags: [
				{
				name: "React",
				color: "blue-text-gradient",
				},
				{
				name: "JavaScript",
				color: "orange-text-gradient",
				},
				
			],
			image: OldWebPortfolio,
			source_code_link: "https://github.com/kharo019/bankModern",
			visit: "https://bank-modern-nine.vercel.app",
		},
		{
			name: "HooBank",
			description:
				"By using React.js && Tailwind CSS, I created a modern UI/UX of a fictional bank. This is my first project using TailWind CSS and seeing the differences of using purely React and TailWind has opened my eyes in the different ways a website can be designed. This page has high quality images with gradients, business stats, sections with CTA buttons, and can displayed for all devices with according sizes. ",
			tags: [
				{
				name: "React",
				color: "blue-text-gradient",
				},
				{
				name: "JavaScript",
				color: "orange-text-gradient",
				},
				{
				name: "TailWindCSS",
				color: "light-blue-text-gradient",
				},
			],
			image: bank,
			source_code_link: "https://github.com/kharo019/bankModern",
			visit: "https://bank-modern-nine.vercel.app",
		},


		{
		name: "Restaurant Landing Page -- Gerícht",
		description:
			"By using ReactJS and JavaScript, I created a fake fine dining landing page. That contains an 'about us', 'menu', 'chef's word', video promotion, 'awards & recognition section', photo gallery, contact section, and custom footer section. This fake restaurant landing page is made for all devices to be displayed according with interactive elemnts within it. ",
		tags: [
			{
			name: "React",
			color: "blue-text-gradient",
			},
			{
			name: "Javascript",
			color: "orange-text-gradient",
			},
		],
		image: restaurant,
		source_code_link: 'https://github.com/kharo019/fine-dining-app',
		visit: 'https://fine-dining-app.vercel.app',
		},


		{
		name: "Clone GPT3",
		description:
			"This is my first project in properly creating a webpage using React.JS, project contains react-icons, gradients, and CTA buttons. With this project, I learned how to properly start up a React.JS ",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "Javascript",
				color: "orange-text-gradient",
				},
			
			],
			image: gpt3,
			source_code_link: 'https://github.com/kharo019/CloneGPT3',
			visit: 'https://clonegpt3.vercel.app',
		},




		{
			name: "AggieCompiler",
			description:
				"This was a Senior team-based project consisting of myself and another member. The project scope is to provide resources to incoming NMSU students as well as provide a system that professors can use for teaching purposes. This project consists of a data structure roadmap, Q&A system, and Admin/user system",
			tags: [
				{
					name: "HTML",
					color: "light-blue-text-gradient",
				},
				{
					name: "JavaScript",
					color: "orange-text-gradient",
				},
				{
					name: "CSS",
					color: "red-text-gradient",
				},
				{
					name: "Python",
					color: "green-text-gradient",
				},
				
				],
				image: AggieCompiler,
				source_code_link: 'https://github.com/sfransis/AggieCompiler',
				visit: 'https://github.com/sfransis/AggieCompiler',
		},



		{
			name: "ACI (Animal Computation Interaction)",
			description:
				"This was a solo project in Visual Programming and the purpose of this object was to be an interactive game with your cat that outputs a wind generator using Pure Data, with the ability to change the frequency of the wind. ",
			tags: [
				{
					name: "python",
					color: "green-text-gradient",
				},
				{
					name: "pd~ (PureData)",
					color: "black-gradient",
					},
				
				],
				image: ACI,
				source_code_link: 'https://github.com/kharo019/CloneGPT3',
				visit: 'https://clonegpt3.vercel.app',
		},



		
		{
			name: "Using spark to cluster a COVID-19 document into 8 clusters using AWS",
			description:
				"In my cloud  ",
			tags: [
				{
					name: "AWS",
					color: "red-text-gradient",
				},
				{
					name: "Python",
					color: "green-text-gradient",
					},
				
				],
				image: gpt3,
				source_code_link: 'https://github.com/kharo019/CloneGPT3',
				visit: 'https://clonegpt3.vercel.app',
		},



		{
			name: "Scallywags",
			description:
				"This was my first team-based project  ",
			tags: [
				{
					name: "HTML",
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





		{
			name: "Scallywags",
			description:
				"This was my first team-based project  ",
			tags: [
				{
					name: "HTML",
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