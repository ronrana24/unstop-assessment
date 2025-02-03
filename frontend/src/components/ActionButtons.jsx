import { useState } from "react";

const ActionButtons = ({ onBook, onReset, onRandom }) => {
  const [roomCount, setRoomCount] = useState("");

  const handleBook = () => {
    if (roomCount >= 1 && roomCount <= 5) {
      onBook(Number(roomCount));
    } else {
      alert("Enter a number between 1 and 5.");
    }
  };

  return (
    <div className="flex gap-4 mb-4">
      <input
        type="number"
        value={roomCount}
        onChange={(e) => setRoomCount(e.target.value)}
        placeholder="No of Rooms"
        className="p-2 border rounded"
      />
      <button
        onClick={handleBook}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Book
      </button>
      <button onClick={onReset} className="p-2 bg-gray-500 text-white rounded">
        Reset
      </button>
      <button
        onClick={onRandom}
        className="p-2 bg-yellow-500 text-white rounded"
      >
        Random
      </button>
    </div>
  );
};

export default ActionButtons;
