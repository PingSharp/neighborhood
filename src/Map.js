import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const mapHeight = window.innerHeight;
const MyMapComponent = compose(
   
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAR10K9CLaR4od1WOlpmUhpl4d7NnK9bEY",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: mapHeight }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat:  48.743343, lng: 9.320112 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 48.743343, lng: 9.320112 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}
export default MyFancyComponent;