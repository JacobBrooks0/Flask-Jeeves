import React from "react";
import HttpCall from "../../components/HttpCall";
import WebSocketCall from "../../components/WebSocketCall";
import {io} from "socket.io-client"

export default function ChatPage() {
  const[socketInstance, setSocketInstance] = React.useState("")
  const[loading, setLoading] = React.useState(true)
  const[buttonStatus, setButtonStatus] = React.useState(false)
  const handleClick = () => {
    if (buttonStatus === false){
      setButtonStatus(true)
    }else{
      setButtonStatus(false)
    }
  }

  React.useEffect(() => {
    if(buttonStatus === true){
      const socket = io("http://127.0.0.1:5001", {
        transports:['websocket'],
        cors:{
          origin: "http://localhost:5173/"
        }
      })
      setSocketInstance(socket)
      socket.on('connect', (data) => {
        console.log(data)
      })

      setLoading(false)

      socket.on('disconnect', (data) => {
        console.log(data)
      })

      return function cleanup(){
        socket.disconnect()
      }
    }
  }, [buttonStatus])

  return(
    <div className="App">
      <h1>React Flask App + Socket io</h1>
      <div className='line'>
        <HttpCall/>
        </div>
        {!buttonStatus ? (
          <button onClick={handleClick}>Turn Chat on</button>
        ) : <>
        <button onClick={handleClick}>Turn Chat off</button>
        <div className="line">
          {!loading && <WebSocketCall socket={socketInstance} />}
        </div>
        </>}
    </div>
    )
}
