import React, { useState } from "react"
import  BasicCard  from "./components/Dashboard"

import "./App.css"
import ButtonAppBar from "./components/bar"

function App() {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [loggedIn, setLoggedIn] = useState(false)

	const handleSubmit = (event) => {
		event.preventDefault()
		// perform login logic here
		// set loggedIn to true if login is successful
		setLoggedIn(true)
	}

	return (
		<React.Fragment>
			{loggedIn ? (
				<BasicCard position='fixed'></BasicCard>
			) : (
				<form onSubmit={handleSubmit}>
					<label>
						Username:
						<input
							type='text'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</label>
					<br />
					<label>
						Password:
						<input
							type='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</label>
					<br />
					<button type='submit'>Login</button>
				</form>
			)}
		</React.Fragment>
	)
}

export default App
