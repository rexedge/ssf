'use client';

import { submitBecomeAnAgentForm } from '@/actions/become-an-agent';
import FormError from '@/components/ui/FormError';
import FormSuccess from '@/components/ui/FormSuccess';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import Hero from '@/components/ui/hero';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { BecomeAnAgentSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

const hearaboutus = [
	{
		id: 'facebook',
		label: 'Facebook/Facebook Ad',
	},
	{
		id: 'instagram,',
		label: 'Instagram/Instagram Ad',
	},
	{
		id: 'youtube,',
		label: 'Youtube',
	},
	{
		id: 'google,',
		label: 'Google/Google Ad',
	},
	{
		id: 'website,',
		label: 'Website',
	},
	{
		id: 'others,',
		label: 'Others',
	},
] as const;

export default function BecomeAnAgent() {
	const [error, setError] = useState<string | undefined>('');
	const [success, setSuccess] = useState<string | undefined>('');
	const [isPending, startTransition] = useTransition();

	const form = useForm<z.infer<typeof BecomeAnAgentSchema>>({
		resolver: zodResolver(BecomeAnAgentSchema),
		defaultValues: {
			email: '',
			about: '',
			age: '',
		},
	});
	const onSubmit = (values: z.infer<typeof BecomeAnAgentSchema>) => {
		setError('');
		setSuccess('');

		startTransition(() => {
			submitBecomeAnAgentForm(values).then((data) => {
				if (data?.success) {
					toast.success(data.success);
					form.reset();
				}
				if (data?.error) {
					toast.error(data.error);
				}
			});
			console.log({ values });
			form.reset();
		});
	};
	return (
		<>
			<Hero
				image='/become-an-agent.jpg'
				title='Become An Agent'
				description='Income Stream Opportunity'
			/>
			<div className='max-w-3xl mx-auto  min-h-fit w-screen flex flex-col py-5 gap-5'>
				<Form {...form}>
					<form
						// autoComplete='off'
						onSubmit={form.handleSubmit(onSubmit)}
						className='space-y-6 w-full mx-auto font-normal text-primary border border-primary'
					>
						<div className='border-b border-primary text-2xl lg:text-3xl p-5 lg:p-10 flex items-center justify-center'>
							Fill out the application below
						</div>
						<div className='grid md:grid-cols-2 px-5 pb-5 gap-5'>
							<FormField
								control={form.control}
								name='fname'
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											First Name
										</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder={
													'First Name'
												}
												disabled={isPending}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='lname'
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Last Name
										</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder={
													'Last Name'
												}
												disabled={isPending}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='phone'
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Phone Number
										</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder={
													'+1234567890'
												}
												disabled={isPending}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Email Address
										</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder={
													'email@example.com'
												}
												type='email'
												disabled={isPending}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='insurance'
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Do you have a current and
											active life insurance
											license?
										</FormLabel>
										<FormControl>
											<RadioGroup
												onValueChange={
													field.onChange
												}
												defaultValue={
													field.value
												}
												className='flex flex-col space-y-1'
											>
												<FormItem className='flex items-center space-x-3 space-y-0'>
													<FormControl>
														<RadioGroupItem value='yes' />
													</FormControl>
													<FormLabel className='font-normal'>
														Yes
													</FormLabel>
												</FormItem>
												<FormItem className='flex items-center space-x-3 space-y-0'>
													<FormControl>
														<RadioGroupItem value='no' />
													</FormControl>
													<FormLabel className='font-normal'>
														No
													</FormLabel>
												</FormItem>
											</RadioGroup>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='age'
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Are you 18 years or
											older?
										</FormLabel>
										<FormControl>
											<RadioGroup
												onValueChange={
													field.onChange
												}
												defaultValue={
													field.value
												}
												className='flex flex-col space-y-1'
											>
												<FormItem className='flex items-center space-x-3 space-y-0'>
													<FormControl>
														<RadioGroupItem value='yes' />
													</FormControl>
													<FormLabel className='font-normal'>
														Yes
													</FormLabel>
												</FormItem>
												<FormItem className='flex items-center space-x-3 space-y-0'>
													<FormControl>
														<RadioGroupItem value='no' />
													</FormControl>
													<FormLabel className='font-normal'>
														No
													</FormLabel>
												</FormItem>
											</RadioGroup>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='experience'
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Do you have previous
											sales experience?
										</FormLabel>
										<FormControl>
											<RadioGroup
												onValueChange={
													field.onChange
												}
												defaultValue={
													field.value
												}
												className='flex flex-col space-y-1'
											>
												<FormItem className='flex items-center space-x-3 space-y-0'>
													<FormControl>
														<RadioGroupItem value='yes' />
													</FormControl>
													<FormLabel className='font-normal'>
														Yes
													</FormLabel>
												</FormItem>
												<FormItem className='flex items-center space-x-3 space-y-0'>
													<FormControl>
														<RadioGroupItem value='no' />
													</FormControl>
													<FormLabel className='font-normal'>
														No
													</FormLabel>
												</FormItem>
											</RadioGroup>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='license'
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Do you have a valid
											driver’s license?
										</FormLabel>
										<FormControl>
											<RadioGroup
												onValueChange={
													field.onChange
												}
												defaultValue={
													field.value
												}
												className='flex flex-col space-y-1'
											>
												<FormItem className='flex items-center space-x-3 space-y-0'>
													<FormControl>
														<RadioGroupItem value='yes' />
													</FormControl>
													<FormLabel className='font-normal'>
														Yes
													</FormLabel>
												</FormItem>
												<FormItem className='flex items-center space-x-3 space-y-0'>
													<FormControl>
														<RadioGroupItem value='no' />
													</FormControl>
													<FormLabel className='font-normal'>
														No
													</FormLabel>
												</FormItem>
											</RadioGroup>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='transportation'
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Do you own reliable
											transportation?
										</FormLabel>
										<FormControl>
											<RadioGroup
												onValueChange={
													field.onChange
												}
												defaultValue={
													field.value
												}
												className='flex flex-col space-y-1'
											>
												<FormItem className='flex items-center space-x-3 space-y-0'>
													<FormControl>
														<RadioGroupItem value='yes' />
													</FormControl>
													<FormLabel className='font-normal'>
														Yes
													</FormLabel>
												</FormItem>
												<FormItem className='flex items-center space-x-3 space-y-0'>
													<FormControl>
														<RadioGroupItem value='no' />
													</FormControl>
													<FormLabel className='font-normal'>
														No
													</FormLabel>
												</FormItem>
											</RadioGroup>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='fullparttime'
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Are you looking to start
											part-time or full-time?
										</FormLabel>
										<FormControl>
											<RadioGroup
												onValueChange={
													field.onChange
												}
												defaultValue={
													field.value
												}
												className='flex flex-col space-y-1'
											>
												<FormItem className='flex items-center space-x-3 space-y-0'>
													<FormControl>
														<RadioGroupItem value='yes' />
													</FormControl>
													<FormLabel className='font-normal'>
														Yes
													</FormLabel>
												</FormItem>
												<FormItem className='flex items-center space-x-3 space-y-0'>
													<FormControl>
														<RadioGroupItem value='no' />
													</FormControl>
													<FormLabel className='font-normal'>
														No
													</FormLabel>
												</FormItem>
											</RadioGroup>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='commission'
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Are you willing to take
											on commission based pay?
										</FormLabel>
										<FormControl>
											<RadioGroup
												onValueChange={
													field.onChange
												}
												defaultValue={
													field.value
												}
												className='flex flex-col space-y-1'
											>
												<FormItem className='flex items-center space-x-3 space-y-0'>
													<FormControl>
														<RadioGroupItem value='yes' />
													</FormControl>
													<FormLabel className='font-normal'>
														Yes
													</FormLabel>
												</FormItem>
												<FormItem className='flex items-center space-x-3 space-y-0'>
													<FormControl>
														<RadioGroupItem value='no' />
													</FormControl>
													<FormLabel className='font-normal'>
														No
													</FormLabel>
												</FormItem>
												<FormItem className='flex items-center space-x-3 space-y-0'>
													<FormControl>
														<RadioGroupItem value='not-sure' />
													</FormControl>
													<FormLabel className='font-normal'>
														Not Sure
													</FormLabel>
												</FormItem>
											</RadioGroup>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='workexperience'
								render={({ field }) => (
									<FormItem className='lg:col-span-2'>
										<FormLabel>
											Can you briefly tell us
											about your previous work
											experience?
										</FormLabel>
										<FormControl>
											<Textarea
												{...field}
												placeholder={
													'Type here...'
												}
												disabled={isPending}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='motivation'
								render={({ field }) => (
									<FormItem className='lg:col-span-2'>
										<FormLabel>
											Do you consider yourself
											self-motivated? Provide
											an example.
										</FormLabel>
										<FormControl>
											<Textarea
												{...field}
												placeholder={
													'Type here...'
												}
												disabled={isPending}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='street'
								render={({ field }) => (
									<FormItem className='lg:col-span-2'>
										<FormLabel>
											What city / state do you
											live in?
										</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder={
													'Street address'
												}
												disabled={isPending}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='city'
								render={({ field }) => (
									<FormItem className=''>
										<FormLabel>City</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder={'city'}
												disabled={isPending}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='state'
								render={({ field }) => (
									<FormItem className=''>
										<FormLabel>
											State/Province
										</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder={
													'state/province'
												}
												disabled={isPending}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='postal'
								render={({ field }) => (
									<FormItem className='lg:col-span-2'>
										<FormLabel>
											Postal/Zip Code
										</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder={
													'postal/zip code'
												}
												disabled={isPending}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='hearaboutus'
								render={({ field }) => (
									<FormItem className='lg:col-span-2'>
										<FormLabel>
											How did you hear about
											us?
										</FormLabel>
										{hearaboutus.map((item) => (
											<FormField
												key={item.id}
												control={
													form.control
												}
												name='hearaboutus'
												render={({
													field,
												}) => {
													return (
														<FormItem
															key={
																item.id
															}
															className='flex flex-row items-center space-x-3 space-y-0'
														>
															<FormControl>
																<Checkbox
																	checked={
																		field.value
																			? field.value.includes(
																					item.id
																			  )
																			: false
																	}
																	onCheckedChange={(
																		checked
																	) => {
																		const updatedValue =
																			checked
																				? [
																						...(field.value ||
																							[]),
																						item.id,
																				  ]
																				: (
																						field.value ||
																						[]
																				  ).filter(
																						(
																							value
																						) =>
																							value !==
																							item.id
																				  );
																		field.onChange(
																			updatedValue
																		);
																	}}
																/>
															</FormControl>
															<FormLabel className='font-normal'>
																{
																	item.label
																}
															</FormLabel>
														</FormItem>
													);
												}}
											/>
										))}
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='occupation'
								render={({ field }) => (
									<FormItem className=''>
										<FormLabel>
											Current occupation or job
											title?
										</FormLabel>
										<FormControl>
											<Input
												{...field}
												disabled={isPending}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='about'
								render={({ field }) => (
									<FormItem className='lg:col-span-2'>
										<FormLabel>
											Is there anything else
											you would like to tell us
											about yourself?
										</FormLabel>
										<FormControl>
											<Textarea
												{...field}
												placeholder={
													'Type here...'
												}
												disabled={isPending}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							{error && (
								<div className='lg:col-span-2'>
									<FormError message='Error' />
								</div>
							)}
							{success && (
								<div className='lg:col-span-2'>
									<FormSuccess message='Success' />
								</div>
							)}
							<Button
								type='submit'
								className='lg:col-span-2'
							>
								SUBMIT
							</Button>
						</div>
					</form>
				</Form>
			</div>
		</>
	);
}
