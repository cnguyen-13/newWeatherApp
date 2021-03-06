import React from "react"

interface Props {
	month: number
	date: number
}

function Date(props: Props) {
	const { month, date } = props

	return (
		<h3>
			{month} / {date}
		</h3>
	)
}

export default Date
