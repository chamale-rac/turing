import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

export function Help() {
	return (
		<div className={'flex items-center justify-start w-full px-8 mt-8'}>
			<Card className='w-full'>
				<CardHeader>
					<CardTitle>Are you lost?</CardTitle>
					<CardDescription>
						Learn what it does and how to use it!
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Accordion
						type='single'
						collapsible
						className='w-full'
					>
						<AccordionItem value='item-1'>
							<AccordionTrigger>Introduction</AccordionTrigger>
							<AccordionContent>
								iTuring is a web tool designed to enhance your understanding of
								turing machines. Originally developed as part of a class project
								for a esteemed course at Universidad del Valle de Guatemala.
								With iTuring, you can effortlessly evaluate strings on a turing
								machine of one tape and one cache. Thanks for using, and enjoy!
								<br />
								<br />
								Sincerely, Samuel A. Chamalé - Human
								<br />
								Guatemala, 2023
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-2'>
							<AccordionTrigger>Supported TM</AccordionTrigger>
							<AccordionContent>
								Each turing machine needs to be defined on a .yaml file, at this
								moment only one tape and cache is supported. Here some{' '}
								<a
									className='text-blue-500'
									href='https://github.com/chamale-rac/turing-api/tree/main/assets'
									target='_blank'
								>
									examples
								</a>{' '}
								on how to define your TM's.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-3'>
							<AccordionTrigger>Tips</AccordionTrigger>
							<AccordionContent>
								<ol>
									<li>
										<strong>1. </strong>You can drag a file to upload it.
									</li>
									<li></li>
								</ol>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</CardContent>
			</Card>
		</div>
	)
}
