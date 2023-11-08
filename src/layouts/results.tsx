import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { WorkFormProxy, neoSaveProxy } from '@/config/proxies'
import { useSnapshot } from 'valtio'
import { SheetComponent } from '@/components/sheets'

export function Results() {
	const WorkFormProxySnap = useSnapshot(WorkFormProxy)
	const neoSaveProxySnap = useSnapshot(neoSaveProxy)
	console.log(WorkFormProxySnap.response)
	return (
		<div className={'flex items-center justify-start w-full px-8 mt-8'}>
			<Card className={'w-full'}>
				<CardHeader>
					<CardTitle className='flex justify-between'>
						<div>
							<div>Check the results</div>
							<Badge className='mt-3'>Using: {neoSaveProxySnap.file}</Badge>
						</div>
					</CardTitle>
					<CardDescription>
						<p className='mb-0'>
							<p>Here you can found the result for each simulation string!</p>
						</p>
					</CardDescription>
				</CardHeader>
				{WorkFormProxySnap.response && (
					<CardContent>
						<div className='flex gap-4 flex-wrap'>
							{WorkFormProxySnap.response.map(
								({
									accept,
									head,
									body,
									stringSimulation,
									message,
									solution,
								}) => (
									<SheetComponent
										accept={accept}
										head={[...head]}
										body={body.map((row) => [...row]) as string[][]}
										stringSimulation={stringSimulation}
										message={message}
										solution={solution}
									/>
								)
							)}
						</div>
					</CardContent>
				)}
			</Card>
		</div>
	)
}
