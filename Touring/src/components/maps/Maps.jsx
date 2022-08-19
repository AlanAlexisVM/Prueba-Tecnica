import React from "react";
import { GoogleMap, 
        withScriptjs, 
        withGoogleMap 
        } from "react-google-maps";

    const Maps = (props) => {
        return (
            <GoogleMap
                defaultZoom={10}
                defaultCenter={{ lat: 19.432608, lng: -99.133209 }}
            />
        );
    }

export default Maps;