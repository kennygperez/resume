export interface Period {
	start: string;
	end: string;
}

interface Education {
	school: string;
	degree: string;
	period: Period;
}

interface Experience {
	companyName: string;
	title: string;
	period: Period;
	responsibilities: string[];
}

interface Project {
	name: string;
	link: string;
	feats: string[];
}

type Skills = Record<string, string[]>;

export const name: string = 'Kenny G Perez';
export const title: string = 'Software Engineer';
export const email: string = 'kennygperez@gmail.com';
export const phone: string = '4077058490';
export const website: string = 'kennygperez.com';

export const experiences: Experience[] = [
	{
		companyName: 'Elgato (acquisition)',
		title: 'Software Engineer',
		period: {
			start: 'February 2021',
			end: 'Present',
		},
		responsibilities: [
			"Spearheading the development of the company's first computer vision product within the streaming space. Using C++, OpenCV, NodeJS, React.JS, and Electron.JS.",
			'Developing the backend with Django on the marketplace.',
			'Enhancing productivity between our German and North American Teams. By creating project requirements from project managers.',
		],
	},
	{
		companyName: 'Visuals by Impulse',
		title: 'Software Engineer',
		period: {
			start: 'January 2018',
			end: 'February 2021',
		},
		responsibilities: [
			'Engineered a new marketplace and computer vision-powered overlay that projected VBI to eventually be acquired by Corsair under Elgato.',
			'Integrated best practices with Point Zero to improve product quality for high-profile clients.',
			'Instituted the development of a proprietary CRM, from the ground up. Increased productivity and solve workflow issues to communicate with clients more effectively.',
			'Provided mentorship for junior developers.',
			'Amplified communication between Stakeholders and the engineering team. By turning business needs into technical requirements to distribute to the engineering team.',
		],
	},
];

export const projects: Project[] = [
	{
		name: 'Super Maker',
		link: 'https://visualsbyimpulse.com/tools/super-maker',
		feats: [
			'Lead the development of the super maker a web application that take user data and renders a video.',
			'Was able to achieve faster render times than our competitors.',
			'Implemented a proprietary server swarm scaler, and queue system to handle user jobs.',
		],
	},
	{
		name: 'Lachlan Computer Vision Facecam',
		link: 'https://www.youtube.com/watch?v=SUqYsXdPnpY',
		feats: [
			"Lead the development of a proprietary computer vision software that interprets Lachlan's gameplay in real-time.",
			"This is the first instance of this technology within the esports industry, which increased the company's notoriety.",
		],
	},
	{
		name: 'UCFHere',
		link: 'https://digitallearning.ucf.edu/newsroom/newsletter/new-for-fall-ucf-here-attendance-now-supports-combined-courses/?frame=0',
		feats: [
			'QRCode based attendance mobile app utilizing React Native + Expo and LTI enabled Python/Django web application.',
			'Lead development of the mobile application, and got it production-ready.',
		],
	},
];

export const education: Education = {
	school: 'University of Central Florida (UCF)',
	degree: 'B.S. Computer Science',
	period: {
		start: 'Summer 2015',
		end: 'Spring 2021',
	},
};

export const skills: Skills = {
	Frontend: ['React.js', 'Next.js', 'Tailwind CSS', 'SCSS'],
	Backend: [
		'TypeScript',
		'Node.js',
		'Serverless Framework',
		'Python',
		'Django Rest Framework',
	],
	Mobile: ['React Native', 'Expo'],
	Native: ['Electron.js'],
	Database: ['MySQL', 'DynamoDB', 'PostgreSQL', 'MongoDB'],
	DevOps: [
		'Git',
		'AWS',
		'Docker',
		'GitHub',
		'Terraform',
		'GitLab',
		'NGINX',
		'Ubuntu',
	],
};
