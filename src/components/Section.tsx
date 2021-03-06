import { FunctionComponent } from 'react';

interface SectionProps {
	noMarginBottom?: boolean;
}

export const Section: FunctionComponent<SectionProps> = ({
	children,
	noMarginBottom = false,
}) => <div className={noMarginBottom ? '' : 'mb-10'}>{children}</div>;
