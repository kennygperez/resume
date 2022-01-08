import { FunctionComponent } from 'react';
import { Period as PeriodType } from '../data/info';

interface PeriodProps {
	period: PeriodType;
}

export const Period: FunctionComponent<PeriodProps> = ({ period }) => (
	<div>
		{period.start} - {period.end}
	</div>
);
