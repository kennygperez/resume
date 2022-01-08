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
			start: 'May 2021',
			end: 'Present',
		},
		responsibilities: [
			'Researching and creating development solutions for the marketplace under Elgato.',
			'Continuing the work of the computer vision project to productize it to a general audience.',
		],
	},
	{
		companyName: 'Visuals by Impulse',
		title: 'Software Engineer',
		period: {
			start: 'January 2018',
			end: 'May 2021',
		},
		responsibilities: [
			'Developed a new marketplace and computer vision-powered overlay that projected the company to eventually be acquired by Corsair under Elgato.',
			'Developed solutions for high-profile clients.',
			'Lead the development of a proprietary CRM for the team to increase productivity and solve workflow issues to communicate with clients more effectively.',
			'Provided mentorship for junior developers.',
			'Established development best practices at VBI.',
		],
	},
	{
		companyName: 'University of Central Florida (UCF)',
		title: 'Techranger', // - Center for Distributed Learning (CDL)
		period: {
			start: 'January 2018',
			end: 'August 2020',
		},
		responsibilities: [
			"Lead the department's venture into mobile app development.",
			'Built cost-effective solutions for students and teachers.',
			'Contributed to UCF Open projects, like CanvasAPI and UDOIT',
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
	Frontend: [
		'React.js',
		'Next.js',
		'Vue.js',
		'HTML5/CSS3',
		'Tailwind CSS',
		'SCSS',
	],
	Backend: [
		'TypeScript',
		'Node.js',
		'Serverless Framework',
		'Python (Django)',
		'PHP',
		'Java',
		'WordPress',
	],
	Mobile: ['React Native', 'Expo'],
	Native: ['Electron.js', 'Java', 'C/C++'],
	Database: ['MySQL', 'PostgreSQL', 'MongoDB'],
	DevOps: [
		'AWS (EC2, S3, CodeDeploy, ElasticBeanstalk, Route 53, Lambda)',
		'Docker',
		'GitHub Actions',
		'Git',
		'NGINX',
		'Linux',
	],
};

export const awards: string[] = [
	'UCF DDL CDL Collaboration Award for UCF Here',
];

export const languages: string[] = ['English', 'Spanish'];
