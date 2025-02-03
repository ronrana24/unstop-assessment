const TravelTime = ({ travelTime }) => {
  return (
    <div className="p-4 bg-gray-100 rounded shadow">
      <h2 className="text-lg font-bold">Total Travel Time</h2>
      <p>{travelTime} minutes</p>
    </div>
  );
};

export default TravelTime;
