// import Avatar from "../../components/Avatar";
// import SupportWindow from "./SupportWindow";


// export default function SupportAdmin() {
//    const [visible, setVisible] = useState(false)
//   return (
//     <div>
//     <SupportWindow />
//       <Avatar
//         onClick={() => setVisible(true)}
//         style ={{position: 'fixed', bottom: '24px', right: '24px'}}
//       />
//     </div>
//   );
// };



import React, { useRef, useEffect, useState } from "react";

import Avatar from './Avatar'
import SupportWindow from './SupportWindow'

const SupportEngine = () => {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    const [visible, setVisible] = useState(false)

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setVisible(false)
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    return (

        <div ref={wrapperRef}>
            <SupportWindow visible={visible} />

            <Avatar
                onClick={() => setVisible(true)}
                style={{
                    position: 'fixed',
                    bottom: '24px',
                    right: '24px',
                }}
            />
        </div>
    )
}
export default SupportEngine;