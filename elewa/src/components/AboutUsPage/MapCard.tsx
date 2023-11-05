import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapCard: React.FC = () => {
  const position: [number, number] = [51.505, -0.09];
  return (
    <>
      <div className="w-[300px] h-[300px]">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "200px" }} // Fixed height typo
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};

export default MapCard;
