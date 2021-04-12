import React, { useContext } from "react"
import BackgroundImagesContext from "../../../context/BackgroundImagesContext"
import { getStylesWithBg } from "../../../functions/city-background-images/get-styles-city-page"

interface Props {
	breakpointClass: string
}

function DayForecastCityImage(props: Props) {
	const { breakpointClass } = props
	const cityImage = useContext(BackgroundImagesContext)[1]
	const styles = getStylesWithBg(cityImage)

	return (
		<section
			className={`day-forecast-city-image dimen-df-city-img df-flex-item-60 ${breakpointClass}`}
			style={styles}
		></section>
	)
}

export default DayForecastCityImage
