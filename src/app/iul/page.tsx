import { PARTNERS } from '@/utils/const';
import React from 'react';

export default function Iul() {
	return (
		<div className='max-w-3xl mx-auto  min-h-fit w-screen flex flex-col py-5 gap-5'>
			<h1 className='text-2xl '>INDEXED UNIVERSAL LIFE</h1>
			<p>
				Indexed universal life insurance {`(IUL)`} is a type of
				permanent life insurance policy that combines the death
				benefit protection of traditional universal life insurance
				with the potential for cash value growth
			</p>
			<ul>
				<li>
					<span className='font-bold'>
						Cash Value Accumulation:
					</span>{' '}
					One of the key features of indexed universal life
					insurance is the cash value component. A portion of the
					premiums paid into the policy accumulates in a cash
					value account, which grows over time based on interest
					credited to the account.
				</li>
				<li>
					<span className='font-bold'>
						Market Participation with Downside Protection:
					</span>{' '}
					Indexed universal life insurance allows policyholders
					to participate in the potential gains of the stock
					market without directly investing in it. If the index
					performs well, the cash value of the policy can grow at
					a rate tied to the index's performance, up to a certain
					limit. However, if the index performs poorly, the
					policy's cash value is protected from market downturns,
					often by a minimum guaranteed interest rate.
				</li>
				<li>
					<span className='font-bold'>Flexibility:</span> Indexed
					universal life insurance policies offer flexibility in
					premium payments and death benefit options.
					Policyholders can often adjust their premiums and death
					benefits within certain limits, allowing them to tailor
					the policy to their changing financial needs and goals.
				</li>
				<li>
					<span className='font-bold'>
						Tax-Advantaged Growth:
					</span>{' '}
					The cash value growth within an indexed universal life
					insurance policy is tax-deferred, meaning policyholders
					do not pay taxes on the interest earned within the
					policy as long as the funds remain within the policy.
					Additionally, policyholders may be able to access the
					cash value through tax-free loans and withdrawals,
					providing a source of tax-free income in retirement or
					for other financial needs.
				</li>
				<li>
					<span className='font-bold'>Legacy Planning:</span>{' '}
					Indexed universal life insurance can be used as a tool
					for legacy planning and wealth transfer. The death
					benefit can provide a tax-free inheritance to
					beneficiaries, helping to preserve wealth for future
					generations.
				</li>
				<li>
					<span className='font-bold'>
						Long-Term Financial Planning:
					</span>{' '}
					Indexed universal life insurance can be part of a
					comprehensive long-term financial plan, providing both
					death benefit protection and potential cash value
					growth to help meet future financial goals, such as
					retirement income or funding college education
					expenses.
				</li>
				<li>
					<span className='font-bold'>Death Benefit:</span> Like
					all forms of life insurance, indexed universal life
					insurance provides a death benefit to the policy's
					beneficiaries upon the insured individual's death. This
					death benefit is typically income-tax-free and can
					provide financial protection to the insured's loved
					ones.
				</li>
			</ul>
		</div>
	);
}
