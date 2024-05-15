import React from 'react'
import {
    GoogleMap,
    withGoogleMap,
    withScriptjs
} from 'react-google-maps'

const Map = (props) => {
  return (
    <GoogleMap defaultZoom={10} />
        
  )
}

export default withScriptjs(
    withGoogleMap(
        Map
    )
)