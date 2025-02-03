const RoomGrid = ({ rooms }) => {
  return (
    <div className="grid grid-cols-10 gap-2 p-4">
      {rooms.map((room) => (
        <div
          key={room.number}
          className={`p-2 border rounded ${
            room.isBooked ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {room.number}
        </div>
      ))}
    </div>
  );
};

export default RoomGrid;
