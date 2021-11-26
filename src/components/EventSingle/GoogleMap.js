// import React, { Component } from 'react';
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

// const Marker= ({ text }) => <div>{text}</div>;

// class GoogleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 11
//   };
  

//   render(){
//     return (
   
//       <div style={{ height: '20rem', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: 'AIzaSyD8fY5DEYdmYwYY2bhrq0PC73DkY5tBK1E' }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
         
//         >
//           <Marker
//             latitude={59.955413}
//             longitude={30.337844}
//             text="My Marker"
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
}

// const GoogleMap = ({ latitude, longitude }) => {
//  const renderMarkers = (map, maps) => {
//   let marker = new maps.Marker({
//   position: { latitude, longitude },
//   map,
//   title: 'Hello World!'
//   });
//   return marker;
//  };

//  return (
//    <div style={{ height: '20rem', width: '100%' }}>
//     <GoogleMapReact
//       bootstrapURLKeys={{ key: 'AIzaSyD8fY5DEYdmYwYY2bhrq0PC73DkY5tBK1E' }}
//       defaultCenter={{ lat: latitude, lng: longitude }}
//       defaultZoom={16}
//       yesIWantToUseGoogleMapApiInternals
//       onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
//     >
//     </GoogleMapReact>
//    </div>
//  );
// };

export default GoogleMap;