// import React, {useState} from 'react'

// const styles = {
// 		cursor: 'pointer',
//         boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
//         // Border
//         borderRadius: '50%',
//         // Background
//         backgroundImage: `url(https://chat-engine-assets.s3.amazonaws.com/tutorials/my-face-min.png)`,
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center',
//         backgroundSize: '84px',
//         // Size
//         width: '84px',
//         height: '84px',
//  };

// export default function Avatar(props) {

// 	const [hovered, setHovered] = useState(false)
// 	return (
// 		<div style={props.style}>
// 			<div>Hello!!</div>

// 			<div style={styles} onMouseLeave={() => setHovered(true)} onMouseEnter={() => setHovered(false)}></div>
// 		</div>
// 		)
// }

import React, { useState } from "react";

import { styles } from './styles'

const Avatar = props => {
    const [hovered, setHovered] = useState(false)

    return (
        <div style={props.style}>
            <div
                className='transition-3'
                style={{
                    ...styles.avatarHello,
                    ...{ opacity: hovered ? '1' : '0' }
                }}
            >
                Hey it's Adam 🤙
            </div>

            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => props.onClick && props.onClick()}
                className='transition-3'
                style={{
                    ...styles.chatWithMeButton,
                    ...{ border: hovered ? '1px solid #f9f0ff' : '4px solid #7a39e0' }
                }}
            />
        </div>
    )
}

export default Avatar;