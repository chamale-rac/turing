import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { TableCustom } from './table-custom'

interface row {
	accept: boolean
	head: string[]
	body: string[][]
	stringSimulation: string
	message: string
	solution: string
}

export function SheetComponent({
	accept,
	head,
	body,
	stringSimulation,
	message,
	solution,
}: row) {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<div className='border rounded-lg px-3 py-3 flex gap-4 justify-center items-center'>
					{stringSimulation}
					<Button variant='secondary'>Open</Button>
				</div>
			</SheetTrigger>
			<SheetContent
				className='overflow-y-scroll w-full lg:max-w-[45%] md:max-w-[70%] sm:max-w-[75%]'
				side={'right'}
			>
				<SheetHeader>
					<SheetTitle>Results: {stringSimulation}</SheetTitle>
					<SheetDescription>
						Check the process done, and the final result for the string give the
						TM.
					</SheetDescription>
				</SheetHeader>
				<div className='grid gap-4 py-4'>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Parameter</TableHead>
								<TableHead>Value</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow key={stringSimulation}>
								<TableCell>Input string</TableCell>
								<TableCell>{stringSimulation}</TableCell>
							</TableRow>
							<TableRow key={solution}>
								<TableCell>Output string</TableCell>
								<TableCell>{solution}</TableCell>
							</TableRow>
							<TableRow key={'accept'}>
								<TableCell>Final state</TableCell>
								<TableCell>{accept ? 'Halt' : 'Rejected'}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Message</TableCell>
								<TableCell>{message}</TableCell>
							</TableRow>
						</TableBody>
					</Table>
					<TableCustom
						title='TM Process'
						head={head}
						body={body}
					/>
				</div>
				<SheetFooter>
					<SheetClose asChild>
						<Button type='submit'>Close</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
