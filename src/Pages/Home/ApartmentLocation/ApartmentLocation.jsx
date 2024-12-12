import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { useState } from 'react';

const ApartmentLocation = () => {
    const [location, setLocation] = useState({ lat: 90.4152, lng: 23.8041});
    const [directions, setDirections] = useState("");

    // Function to update location based on map clicks
    const LocationMarker = () => {
        useMapEvents({
            click(e) {
                setLocation({ lat: e.latlng.lat, lng: e.latlng.lng });
            },
        });
        return location === null ? null : (
            <Marker position={location}></Marker>
        );
    };

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Apartment Location</h2>

            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Address</label>
                    <input
                        type="text"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Enter your apartment address"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Directions</label>
                    <textarea
                        rows="4"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Provide directions to reach your apartment"
                        value={directions}
                        onChange={(e) => setDirections(e.target.value)}
                    />
                </div>

                <div className="h-60">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pin your location</label>
                    <MapContainer center={location} zoom={13} className="w-full h-full rounded-md">
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <LocationMarker />
                    </MapContainer>
                </div>

                <button
                    type="submit"
                    className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Save Location
                </button>
            </form>
        </div>
    );
};

export default ApartmentLocation