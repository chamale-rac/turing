import { Skeleton } from '@/components/ui/skeleton'

export function SkeletonDemo() {
	return (
		<div className='border rounded-lg px-3 py-3 flex gap-4 justify-center items-center'>
			<Skeleton className='h-5 w-[65px]' />
			<Skeleton className='h-7 w-[28px]' />
			<Skeleton className='h-10 w-[65px]' />
		</div>
	)
}
