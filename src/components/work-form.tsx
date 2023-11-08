import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { neoSaveProxy, WorkFormProxy } from '@/config/proxies'
import { useToast } from '@/components/ui/use-toast'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { useDropzone, FileWithPath } from 'react-dropzone'
import { FilePlus, CheckCircle } from 'lucide-react'

const formSchema = z.object({
	// no validation for now
	file: z.string(),
})

interface row {
	accept: boolean
	head: string[]
	body: string[][]
	stringSimulation: string
	message: string
	solution: string
}

interface responseData {
	response: row[]
}

interface postData {
	file: string
}

export function WorkForm() {
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
		accept: {
			'.yaml': [],
		},
		maxFiles: 1,
	})

	const acceptedFileItems = acceptedFiles.map((file: FileWithPath) => (
		<span key={file.path}>{file.path}</span>
	))

	const { toast } = useToast()

	const postTuring = async (file: string) => {
		try {
			const postData: postData = {
				file: file,
			}
			const response = await fetch(
				`${import.meta.env.VITE_SERVER_BASE_URL}/turing`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(postData),
				}
			)
			const responseData: responseData = await response.json()

			WorkFormProxy.response = responseData.response

			console.log(responseData)
			toast({
				title: 'Simulation',
				description: 'Work done! Check the results.',
			})
		} catch (e) {
			toast({ title: 'Simulation', description: 'Something went wrong.' })
			console.log(e)
		}
	}

	// Define form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			file: '',
		},
	})

	// Define a submit handler.
	function onSubmit() {
		const reader = new FileReader()
		let fileContent = ''

		reader.onabort = () => console.log('file reading was aborted')
		reader.onerror = () => console.log('file reading has failed')
		reader.onload = () => {
			// Assign the file contents to fileContent
			fileContent = reader.result as string

			// Convert to Base64
			const base64String = btoa(fileContent)

			postTuring(base64String)
		}

		const fileAccepted = acceptedFiles[0] as FileWithPath
		neoSaveProxy.file = fileAccepted.path ?? ''

		reader.readAsText(acceptedFiles[0])

		toast({
			title: 'Simulation',
			description: 'Working on your expression.',
		})
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-8'
			>
				<div className='grid md:grid-rows-3 md:grid-flow-col md:gap-4'>
					<div className='md:row-span-3'>
						<section className='container'>
							<div
								{...getRootProps({
									className:
										'rounded-lg border border-dashed bg-card text-card-foreground shadow-sm flex justify-center items-center hover:bg-border transition duration-150 ease-in-out cursor-pointer text-center',
								})}
							>
								<input {...getInputProps()} />
								<div className='flex flex-col justify-center items-center gap-6 p-4 py-8 text-sm'>
									{acceptedFiles.length > 0 ? (
										<>
											<CheckCircle
												className='relative h-10 w-10'
												aria-hidden='true'
											/>
											<p> {acceptedFileItems[0]} (Drop/click to replace)</p>
										</>
									) : (
										<>
											<FilePlus
												className='relative h-10 w-10 opacity-70'
												aria-hidden='true'
											/>
											<p>
												Drop/click to select a file (Only .yaml will be
												accepted)
											</p>
										</>
									)}
								</div>
							</div>
						</section>
					</div>
				</div>
				<div className='flex justify-between'>
					<div />
					<Button
						type='submit'
						disabled={acceptedFiles.length === 0}
					>
						{acceptedFiles.length === 0 ? 'Upload a file to send' : 'Send'}
					</Button>
				</div>
			</form>
		</Form>
	)
}
