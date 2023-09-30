import React, { useState } from "react";
import "./App.css";

function App() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [shipmentData, setShipmentData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTrackButtonClick = async () => {
    if (!trackingNumber) return;

    setLoading(true);

    try {
      const response = await fetch(
        `https://tracking.bosta.co/shipments/track/${trackingNumber}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setShipmentData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Shipment Tracking</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter tracking number"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
        />
        <button onClick={handleTrackButtonClick}>Track</button>
      </div>
      {loading && <p>Loading...</p>}
      {shipmentData && (
        <div className="tracking-results">
          <h2>Tracking Information for {trackingNumber}</h2>
          <pre>{JSON.stringify(shipmentData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
