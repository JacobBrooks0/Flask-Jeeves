import React from 'react'

export default function HttpCall(){

	const[data, setData] = React.useState("")

	React.useEffect(() => {
		fetch("/http-call", {
			headers: {
				"Content-Type": "application/json"
			}

		})
		.then((response) => response.json())
		.then((responseData) => {
			setData(responseData.data)
		})
	}, [])
	return (
		<h3>{data}</h3>
	)
}