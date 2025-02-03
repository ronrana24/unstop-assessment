const Room = require('../models/Room');

// Get all rooms
exports.getRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.json(rooms);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching rooms' });
    }
};

const getTotalTravelTime = (selectedRooms) => {
    let totalTravelTime = 0;
    let previousFloor = 1;
    let previousRoom = 1;

    selectedRooms.forEach((room) => {
        const currentFloor = room.floor;
        const currentRoom = parseInt(room.number) % 100; // Extract room number on the current floor

        // Calculate vertical travel time (between floors)
        if (currentFloor !== previousFloor) {
            totalTravelTime += Math.abs(currentFloor - previousFloor) * 2; // 2 minutes per floor
        }

        // Calculate horizontal travel time (on the same floor)
        totalTravelTime += Math.abs(currentRoom - previousRoom); // 1 minute per room

        // Update current floor and room
        previousFloor = currentFloor;
        previousRoom = currentRoom;
    });

    return totalTravelTime;
};


// Book rooms based on travel time and proximity
exports.bookRooms = async (req, res) => {
    const { count } = req.body;

    if (count < 1 || count > 5) {
        return res.status(400).json({ message: 'You can book between 1 and 5 rooms only.' });
    }

    try {
        const availableRooms = await Room.find({ isBooked: false }).sort({ floor: 1, number: 1 });
        if (availableRooms.length < count) {
            return res.status(400).json({ message: 'Not enough rooms available.' });
        }

        // Prioritize rooms on the same floor
        let selectedRooms = [];
        for (let i = 0; i < availableRooms.length; i++) {
            const currentFloor = availableRooms[i].floor;
            const sameFloorRooms = availableRooms.filter(room => room.floor === currentFloor);

            if (sameFloorRooms.length >= count) {
                selectedRooms = sameFloorRooms.slice(0, count); // here
                break;
            }
        }

        // If rooms aren't available on the same floor, select nearest rooms
        if (selectedRooms.length < count) {
            selectedRooms = availableRooms.slice(0, count); // Minimum travel time
        }

        // Mark rooms as booked
        const bookedRoomIds = selectedRooms.map(room => room._id);
        await Room.updateMany({ _id: { $in: bookedRoomIds } }, { $set: { isBooked: true } });

        const totalTimeTravel = getTotalTravelTime(selectedRooms);

        res.json({ message: 'Rooms booked successfully!', rooms: selectedRooms, totalTimeTravel });
    } catch (err) {
        res.status(500).json({ message: 'Error booking rooms' });
    }
};

// Reset all rooms
exports.resetRooms = async (req, res) => {
    try {
        await Room.updateMany({}, { $set: { isBooked: false } });
        res.json({ message: 'All rooms reset successfully!' });
    } catch (err) {
        res.status(500).json({ message: 'Error resetting rooms' });
    }
};

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

// Randomize room availability
exports.randomizeRooms = async (req, res) => {
    try {
        const totalRoomsBooked = await Room.countDocuments({isBooked: true});
        console.log(totalRoomsBooked);
        const randomNumber = getRandomInt(totalRoomsBooked) + 1;
        console.log(randomNumber);
        const rooms = await Room.find({isBooked: true}).limit(randomNumber);
        const updatedRooms = rooms.map(room => ({
            ...room,
            isBooked: false,
        }));

        for (const updatedRoom of updatedRooms) {
            await Room.updateOne({ _id: updatedRoom._doc._id }, { $set: { isBooked: updatedRoom.isBooked } });
        }

        res.json({ message: 'Rooms randomized successfully!' });
    } catch (err) {
        res.status(500).json({ message: 'Error randomizing rooms' });
    }
};
