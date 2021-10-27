import { FunctionComponent } from 'react';

type Project = {
	name: string;
	contribution: string;
};

type Experience = {
	companyName: string;
	title: string;
	time: string;
	responsibilities?: string;
	projects: Project[];
};

type Skills = Record<Lowercase<string>, string[]>;

const Document: FunctionComponent = () => {
	//
	// Input
	//
	const name = 'Kenny G Perez';
	const title = 'Software Engineer';
	const email = 'kennygperez@gmail.com';
	const websiteURL = 'https://www.kennygperez.com';
	const education = {
		school: 'University of Central Florida (UCF)',
		degree: 'B.S. Computer Science',
		time: 'Summer 2015 - Spring 2021',
	};
	const experiences: Experience[] = [
		{
			companyName: 'Corsair',
			title: 'Software Engineer',
			time: 'January 2018 - Present',
			responsibilities:
				'Working within the Visuals by Impulse (VBI) division. building and maintain various applications and services, focused on backend, DevOps, mobile app development, and our AWS infrastructure. Also provide mentorship to junior developers.',
			projects: [
				{
					name: 'Lachlan Computer Vision Facecam',
					contribution:
						"Led the development of a computer vision service that interprets Lachlan's gameplay in real-time. This is the first instance of this technology within the esports industry.",
				},
			],
		},
		{
			companyName: 'University of Central Florida (UCF)',
			title: 'Techranger - Center for Distributed Learning (CDL)',
			time: 'January 2018 – August 2020',
			responsibilities:
				'Web developer specializing in WordPress, frontend, backend, and mobile development.',
			projects: [
				{
					name: 'UCFHere',
					contribution:
						'QRCode based attendance application utilizing a native mobile app and LTI enabled Python/Django web application. Took over lead development of the mobile application. Refactored student design project code to make it production-ready and follow best practices. UCFHere utilized React Native and Expo SDK.',
				},
			],
		},
		{
			companyName: 'Freelance',
			title: 'Fullstack Software Engineer',
			time: 'December 2015 – April 2019',
			projects: [],
		},
	];
	const skills: Skills = {
		Frontend: [
			'HTML5',
			'CSS3',
			'JS',
			'Vue.js',
			'Nuxt.js',
			'Next.js',
			'React',
			'SCSS',
			'Tailwind CSS',
			'TypeScript',
		],
		Backend: [
			'Node.js',
			'PHP',
			'Python (Django, Flask)',
			'WordPress',
			'Serverless Framework',
		],
		Mobile: ['React Native', 'Expo'],
		Native: ['C/C++', 'Java'],
		Database: ['MySQL', 'PostgreSQL', 'MongoDB'],
		DevOps: [
			'AWS (EC2, S3, CodeDeploy, ElasticBeanstalk, Route 53, Lambda)',
			'Git',
			'Linux',
			'NGINX',
			'Docker',
			'GitHub Actions',
		],
	};
	const awards = ['UCF DDL CDL Collaboration Award for UCF Here'];
	const languages = ['English', 'Spanish'];

	//
	// Output
	//
	return (
		<div className='grid grid-cols-6 gap-8 w-full h-full'>
			<div className='col-span-4'>
				<h1>{name}</h1>
				<h3 className='mb-6'>{title}</h3>

				<h2>Education</h2>
				<h3>{education.school}</h3>
				<p className='font-medium'>{education.degree}</p>
				<p className='mb-6'>{education.time}</p>

				<h2>Experience</h2>
				{experiences.map((experience) => (
					<div key={experience.companyName}>
						<h3>{experience.companyName}</h3>
						<p className='font-medium'>{experience.title}</p>
						<p className='mb-2'>{experience.time}</p>
						<p className='text-gray-600'>{experience.responsibilities}</p>
						<div className='p-2' />
						{experience.projects.map((project) => (
							<div key={project.name} className='mb-3'>
								<p className='font-bold'>{project.name}</p>
								<p className='text-gray-600'>{project.contribution}</p>
							</div>
						))}
					</div>
				))}
			</div>
			<div className='col-span-2'>
				<div className='mb-8'>
					<div>
						<a href={websiteURL}>kennygperez.com</a>
					</div>
					<div>
						<a href={`mailto:${email}`}>{email}</a>
					</div>
				</div>

				<h2>Skills</h2>
				<ul className='mb-6'>
					{Object.keys(skills).map((skillGroupName, index, { length }) => (
						<li
							key={skillGroupName}
							className={index < length - 1 ? 'mb-3' : ''}
						>
							<p className='font-medium'>{skillGroupName}</p>
							<p className='text-gray-600'>
								{skills[skillGroupName].join(', ')}
							</p>
						</li>
					))}
				</ul>

				<h2>Awards</h2>
				<ul className='mb-6'>
					{awards.map((award) => (
						<li key={award} className='text-gray-600'>
							{award}
						</li>
					))}
				</ul>

				<h2>Languages</h2>
				<ul>
					{languages.map((language) => (
						<li key={language} className='text-gray-600'>
							{language}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Document;
