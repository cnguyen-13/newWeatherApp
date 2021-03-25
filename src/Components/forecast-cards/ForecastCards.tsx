import React, { useState, useEffect, useContext } from "react"
import axios from "axios"
import MeasurementSystemContext from "../../../MeasurementSystemContext"
import ForecastCard from "./forecast-card/ForecastCard"
import DayWeather from "../../day/DayWeather"
const { coordinatesUrl } = require("../../../HelperFunctions/coordinatesUrl")
const { forecastUrl } = require("../../../HelperFunctions/forecastUrl")

interface Coordinates {
	lat: number
	lon: number
}

interface Props {
	city: string
}

function FCards(props: Props) {
	const { city } = props
	const { measurementSystem } = useContext(MeasurementSystemContext)
	const [wasCardClicked, setWasCardClicked] = useState<boolean>(false)
	const [dailyArr, setDailyArr] = useState<[]>([])
	const [dailyIdx, setDailyIdx] = useState<number>(0)

	const clickedOnCard = (e: any): void => {
		let element = e.target
		if (!element.id) {
			element = element.parentElement
		}
		const idx = parseInt(element.id, 10)
		setDailyIdx(idx)
		setWasCardClicked(true)
	}

	useEffect(() => {
		const getCityData = async () => {
			try {
				//Get Coordinates
				const coordUrl: string = coordinatesUrl(city)
				const res = await axios.get(coordUrl)
				const data = res.data
				const { lat, lon }: Coordinates = data.coord

				//Get Large Data Set for City
				const fcastUrl: string = forecastUrl(lat, lon, measurementSystem)
				const forecastRes = await axios.get(fcastUrl)
				const forecastData = forecastRes.data
				const forecastDailies: [] = forecastData.daily
				console.log(forecastDailies)
				setDailyArr(forecastDailies)
			} catch (err) {
				console.log(err)
			}
		}

		getCityData()
	}, [city, measurementSystem])

	const forcaseCardComponents = dailyArr.map((day: any, idx: number) => {
		return (
			<ForecastCard
				clickedOnCard={clickedOnCard}
				data={day}
				dataIdx={idx}
				key={idx}
			/>
		)
	})

	return (
		<>
			<div className="cards-switch-container">
				<div className="cards-container">{forcaseCardComponents}</div>
			</div>
			{wasCardClicked ? (
				<DayWeather city={city} dailyData={dailyArr[dailyIdx]} />
			) : null}
		</>
	)
}

export default FCards