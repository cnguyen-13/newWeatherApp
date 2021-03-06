import React from "react"

interface Props {
	label: string
	data: string
}

function DataRow(props: Props) {
	const { label, data } = props

	return (
		<p className="m-data-row">
			<strong className="fw-bold txt-color-primary">{label}:</strong> {data}
		</p>
	)
}

export default DataRow
