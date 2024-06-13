import Hero from '@/components/ui/hero';

export default function FinalExpense() {
	return (
		<>
			<Hero
				title={'Final Expense Plan'}
				description={`Final expense insurance`}
				image={'/final-expense.jpg'}
			/>
			<div className='prose lg:prose-lg prose-orange max-w-5xl mx-auto py-10'>
				<h2>FINAL EXPENSE</h2>
				<p>
					A final expense plan, often referred to as burial
					insurance or funeral insurance, is a type of policy
					designed to cover the costs associated with a person's
					funeral, burial, and other end-of-life expenses.{' '}
				</p>
				<p>
					These expenses can include funeral services, casket ,
					cemetery plot, headstone, flowers, and other related
					costs. Final expense plans typically have lower
					coverage amounts compared to traditional life insurance
					policies, typically ranging from a few thousand dollars
					to around $25,000.
				</p>
			</div>
		</>
	);
}
