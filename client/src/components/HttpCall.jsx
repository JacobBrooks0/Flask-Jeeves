import { useEffect, useState } from "react";

export default function HttpCall() {
  const [data, setData] = useState("");

<<<<<<< HEAD
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
=======
  useEffect(() => {
    fetch("http://localhost:5001/http-call", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.data);
      });
  });
  return (
    <>
      <h2>HTTP Communication</h2>
      <h3 className="http">{data}</h3>
    </>
  );
}
>>>>>>> ea326f4e3bc2bee4ccc5716c61f13f66b48cbd30
