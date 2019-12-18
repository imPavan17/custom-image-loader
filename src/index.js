import React from 'react'
import "./index.css";

export default function CustomImageLoader(props) {
     const options = {
          animationType: props.animationType,
          image: props.image,
          isLoaded: (props.isLoaded === undefined ? true : props.isLoaded),
          circle: (props.circle === undefined ? false : props.circle),
          speed: (props.speed === undefined ? 2 : props.speed)
     }
     const animation = `${options.animationType} infinite ${options.speed}s linear`
     return (
          <>
               {options.isLoaded &&
                    <img src={options.image} className="custom-image-loader" alt="logo" style={{ animation: animation, width: '89px', height: '89px', borderRadius: options.circle && '50%' }} />
               }
          </>
     )
}
