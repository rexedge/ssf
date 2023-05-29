import React from 'react';

interface Props {
	address: string;
}

const FormatAddress: React.FC<Props> = ({ address }) => {
	const lines = address.split(',');
	return (
		<>
			{lines.map((line, index) => {
				return <p key={index}>{line}</p>;
			})}
		</>
	);
};

export default FormatAddress;
