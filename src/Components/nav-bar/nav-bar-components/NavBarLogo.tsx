import React from "react"
import { Link } from "react-router-dom"
import logo from "../../../images/logo/logo.png"

function NavBarLogo() {
	return (
		<Link to="/">
			<img src={logo} alt="" className="dimen-logo clickable" />
		</Link>
	)
}

export default NavBarLogo
