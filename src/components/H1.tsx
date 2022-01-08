import { FunctionComponent } from 'react';

export const H1: FunctionComponent = ({ children }) => (
	<div className='leading-none text-xl font-bold mb-3'>{children}</div>
);
