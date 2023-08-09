import React from 'react'

export default function WebSocketCall({socket}){

	const[message, setMessage] = React.useState("")
	const[messages, setMessages] = React.useState([])

	const handleText = (e) => {
		const inputMessage = e.target.value
		setMessage(inputMessage)
	}

	const handleSubmit = () => {
		if(!message){
			return
		}

		socket.emit('data', message)
		setMessage("")
	}

	React.useEffect(() => {
		socket.on('data', (data) => {
			setMessages([...messages, data.data])

		})

		return() => {
			socket.off('data', () => {
				console.log("data event was removed")
			})
		}
	}, [socket, messages])

	return (
		<div>
			<h2>Websocket Communication</h2>
			<input type="text" value={message} onChange={handleText}/>
			<button onClick={handleSubmit}>Submit</button>

			<ul>
				{messages.map((message, index) => {
					return <li key={index}>{message}</li>
				})}
			</ul>
		</div>
	)
}