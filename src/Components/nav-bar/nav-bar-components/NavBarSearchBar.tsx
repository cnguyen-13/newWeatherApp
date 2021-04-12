import React, { useState } from "react"
import NavBarCityInputField from "./NavBarCityInputField"
import NavBarSearchButton from "./NavBarSearchButton"

function NavBarSearchBar() {
	const [city, setCity] = useState<string>("")

	function clearInput(): void {
		setCity("")
	}

	function inputChange(e: React.ChangeEvent<HTMLInputElement>): void {
		setCity(e.target.value)
	}

	return (
		<div className="nav-bar-search dimen-search full-height-percent">
			<NavBarCityInputField inputChange={inputChange} city={city} />
			<NavBarSearchButton city={city} clearInput={clearInput} />
		</div>
	)
}

export default NavBarSearchBar
