import React from 'react'

export default function HttpCall(){

	const[data, setData] = React.useState("")

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

			return response.json()
		})
		.then((responseData) => {
			setData(responseData.data)
		})
		.catch((error) => {
        console.error("Error fetching data:", error);
        // Handle the error (e.g., show an error message)
    	});


	}, [])
	return (
		<h3>{data}</h3>
	)
}