import { useState, useEffect } from "react";
import RoomGrid from "./components/RoomGrid";
import ActionButtons from "./components/ActionButtons";
import TravelTime from "./components/TravelTime";
import { getRooms, bookRooms, resetRooms, randomizeRooms } from "./api";

const App = () => {
  const [rooms, setRooms] = useState([]);
  const [travelTime, setTravelTime] = useState(0);

  const fetchRooms = async () => {
    try {
      const response = await getRooms();
      setRooms(response.data);
    } catch (err) {
      console.error("Error fetching rooms:", err);
    }
  };

  const handleBook = async (count) => {
    try {
      const response = await bookRooms(count);
      setTravelTime(response.data.totalTimeTravel || 0); // Assuming travel time is returned
      fetchRooms();
    } catch (err) {
      console.error("Error booking rooms:", err);
      alert(err.response.data.message);
    }
  };

  const handleReset = async () => {
    try {
      await resetRooms();
      setTravelTime(0);
      fetchRooms();
    } catch (err) {
      console.error("Error resetting rooms:", err);
    }
  };

  const handleRandom = async () => {
    try {
      await randomizeRooms();
      fetchRooms();
    } catch (err) {
      console.error("Error randomizing rooms:", err);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Hotel Room Reservation</h1>
      <ActionButtons
        onBook={handleBook}
        onReset={handleReset}
        onRandom={handleRandom}
      />
      <RoomGrid rooms={rooms} />
      <TravelTime travelTime={travelTime} />
    </div>
  );
};

export default App;
