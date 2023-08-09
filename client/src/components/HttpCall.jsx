import React from 'react'

export default function HttpCall(){

	const[data, setData] = React.useState("")
	console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
	console.log(data)
	console.log(setData)
	console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
	React.useEffect(() => {
		fetch("/http-call", {
			headers: {
				"Content-Type": "application/json"
			}

		})
		.then((response) => {

			if (!response.ok) {
            	throw new Error("Network response was not OK");
        	}
        	console.log(response)
			response.json()
		})
		.then((responseData) => {
			console.log("LLLLLLLLLLL")
			// console.log(responseData, "<<<<<<<<")
			if (responseData) {
				setData(responseData.data)
			}
			console.log("NADA MESMO")
		})
		.catch((error) => {
		console.log(responseData, "<<<<<<<<")
        console.error("Error fetching data:", error);
        // Handle the error (e.g., show an error message)
    	});


	}, [])
	return (
		<h3>{data}</h3>
	)
}