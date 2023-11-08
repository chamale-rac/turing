/* eslint-disable react-refresh/only-export-components */
import { proxy } from 'valtio'

interface Image {
	src: string
	alt: string
	width: number
	height: number
	title: string
	description: string
}

interface Table {
	title: string
	head: string[]
	body: string[][]
}

interface GraphsFormProxy {
	expression: string
	images: Image[]
	tables: Table[]
}

interface SimulateFormProxy {
	expression: string
	tables: Table[]
}

export const GraphsFormProxy = proxy<GraphsFormProxy>({
	expression: '',
	images: [],
	tables: [],
})

export const SimulateFormProxy = proxy<SimulateFormProxy>({
	expression: '',
	tables: [],
})

export const interactionProxy = proxy({
	firstTimeRetrieveURL: true,
})

export const saveProxy = proxy({
	graphExpressionInput: '',
	simulateExpressionInput: '',
	simulateStringsInput: '',
})

export const neoSaveProxy = proxy({
	file: '',
})

interface Image {
	src: string
	alt: string
	width: number
	height: number
	title: string
	description: string
}

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
	loading: boolean
}

export const WorkFormProxy = proxy<responseData>({
	response: [],
	loading: false,
})
