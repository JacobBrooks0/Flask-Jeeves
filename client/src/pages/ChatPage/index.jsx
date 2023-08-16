// import HttpCall from "../../components";
// import WebSocketCall from "../../components";
// import io from "socket.io-client";
// import { useEffect, useState } from "react";

// export default function ChatPage() {
//   const [socketInstance, setSocketInstance] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [buttonStatus, setButtonStatus] = useState(false);

//   const handleClick = () => {
//     if (buttonStatus === false) {
//       setButtonStatus(true);
//     } else {
//       setButtonStatus(false);
//     }
//   };

//   useEffect(() => {
//     if (buttonStatus === true) {
//       const socket = io("http://localhost:5001/", {
//         transports: ["websocket"],
//         cors: {
//           origin: "http://localhost:3000/",
//           methods: ["GET", "POST"],
//         },
//       });

//       setSocketInstance(socket);

//       socket.on("connect", (data) => {
//         console.log(data);
//       });

//       setLoading(false);

//       socket.on("disconnect", (data) => {
//         console.log(data);
//       });

//       return function cleanup() {
//         socket.disconnect();
//       };
//     }
//   }, [buttonStatus]);

//   return (
//     <div className="App">
//       <h1>React/Flask App + socket.io</h1>
//       <div className="line">
//         <HttpCall />
//       </div>
//       {!buttonStatus ? (
//         <button onClick={handleClick}>turn chat on</button>
//       ) : (
//         <>
//           <button onClick={handleClick}>turn chat off</button>
//           <div className="line">
//             {!loading && <WebSocketCall socket={socketInstance} />}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

