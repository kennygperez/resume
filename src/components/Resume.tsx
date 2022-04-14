import { FunctionComponent } from 'react';

import { Document } from './Document';
import { H1 } from './H1';
import { H2 } from './H2';
import { H3 } from './H3';
import { Period } from './Period';
import { Section } from './Section';
import {
	education,
	email,
	experiences,
	name,
	phone,
	projects,
	skills,
	title,
	website,
} from '../data/info';

const DEBUG: boolean = false;

function formatPhone(uglyPhone: string): string {
	return `${phone.slice(0, 3)}.${phone.slice(3, 6)}.${phone.slice(6, 10)}`;
}

export const Resume: FunctionComponent = () => (
	<Document>
		<div
			className={
				'grid grid-rows-9 grid-cols-8 gap-y-12 gap-x-12 w-full h-full' +
				(DEBUG ? ' bg-red-400' : '')
			}
		>
			{/* WHO */}
			<div className='col-span-5 row-span-1'>
				<H1>{name}</H1>
				<H3>{title}</H3>
			</div>

			{/* CONTACT */}
			<div className='col-span-3 row-span-1'>
				<div>
					<a href={`https://www.${website}`}>{website}</a>
				</div>
				<div>
					<a href={`mailto:${email}`}>{email}</a>
				</div>
				<div>
					<a href={`tel:1+${phone}`}>{formatPhone(phone)}</a>
				</div>
			</div>

			{/* HISTORY */}
			<div className='col-span-5 row-span-8'>
				<H2>Experience</H2>
				<Section>
					{experiences.map((experience, index, { length }) => (
						<div
							key={experience.companyName}
							className={index < length - 1 ? 'mb-2' : ''}
						>
							<div>
								<span className='font-medium'>{experience.companyName}</span>
								&nbsp;-&nbsp;
								<span>{experience.title}</span>
							</div>
							<Period period={experience.period} />
							<ul className='list-disc list-outside pl-6'>
								{experience.responsibilities.map((responsibility) => (
									<li key={responsibility} className='text-gray-600'>
										{responsibility}
									</li>
								))}
							</ul>
						</div>
					))}
				</Section>

				<H2>Projects</H2>
				<Section noMarginBottom={true}>
					{projects.map((project, index, { length }) => (
						<div
							key={project.name}
							className={index < length - 1 ? 'mb-2' : ''}
						>
							<div className='font-medium'>
								<a href={project.link}>{project.name}</a>
							</div>
							<ul className='list-disc list-outside pl-6'>
								{project.feats.map((feat) => (
									<li key={feat} className='text-gray-600'>
										{feat}
									</li>
								))}
							</ul>
						</div>
					))}
				</Section>
			</div>

			{/* INFO */}
			<div className='col-span-3 row-span-8'>
				<H2>Skills</H2>
				<Section>
					{Object.keys(skills).map((skillGroupName, index, { length }) => (
						<div
							key={skillGroupName}
							className={index < length - 1 ? 'mb-2' : ''}
						>
							<div className='font-medium'>{skillGroupName}</div>
							<div className='text-gray-600'>
								{skills[skillGroupName].join(', ')}
							</div>
						</div>
					))}
				</Section>

				<H2>Education</H2>
				<Section>
					<div className='font-medium'>{education.school}</div>
					<div>{education.degree}</div>
					<Period period={education.period} />
				</Section>
			</div>
		</div>
	</Document>
);
