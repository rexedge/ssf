'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/button';

interface TeamMember {
	name: string;
	position: string;
	bio: string;
	photo: string;
}

interface TeamProps {
	teamMembers: TeamMember[];
}

const Team: React.FC<TeamProps> = ({ teamMembers }) => {
	const [selectedMember, setSelectedMember] = useState<TeamMember | null>(
		null
	);

	const openModal = (member: TeamMember) => {
		setSelectedMember(member);
	};

	const closeModal = () => {
		setSelectedMember(null);
	};

	return (
		<section className='min-h-full'>
			<div className='container mx-auto px-4 py-10'>
				<h2 className='text-4xl font-bold mb-4 text-center'>
					Meet Our Experts
				</h2>
				<div className='mb-5'>
					Our team of financial professionals brings a diverse
					range of expertise and backgrounds. With their combined
					knowledge and dedication, they are here to guide you
					towards financial success and provide the support you
					need at every step.
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					{teamMembers.map((member, index) => (
						<div
							key={index}
							onClick={() => openModal(member)}
							className='bg-teal-100 dark:bg-teal-800 rounded-lg p-6 shadow-md'
						>
							<Image
								src={member.photo}
								alt={member.name}
								height={200}
								width={200}
								className='w-full h-auto mb-4 rounded-lg'
							/>
							<h3 className='text-xl font-bold mb-2'>
								{member.name}
							</h3>
							<p className='text-gray-600 mb-4'>
								{member.position}
							</p>
							<p>{member.bio}</p>
						</div>
					))}
				</div>
			</div>

			<AnimatePresence>
				{selectedMember && (
					<motion.div
						className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50'
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0 }}
						transition={{ duration: 0.3 }}
					>
						<div className='bg-white p-8 rounded-lg'>
							<h2 className='text-2xl font-bold mb-4'>
								{selectedMember.name}
							</h2>
							<Image
								src={selectedMember.photo}
								alt={selectedMember.name}
								height={128}
								width={128}
								className='w-32 h-32 mb-4 rounded-full'
							/>
							<p className='mb-2'>
								{selectedMember.position}
							</p>
							<p>{selectedMember.bio}</p>
							<Button
								className='mt-4 outline-dotted'
								onClick={closeModal}
							>
								Close
							</Button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default Team;
