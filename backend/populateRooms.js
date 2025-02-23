const mongoose = require('mongoose');
const connectDB = require('./database/connection');
const Room = require('./models/Room');
const Visitor = require('./models/Visitor');

const populateRooms = async () => {
    await connectDB();

    const rooms = [];
    for (let floor = 1; floor <= 9; floor++) {
        for (let room = 1; room <= 10; room++) {
            rooms.push({ number: `${floor * 100 + room}`, floor });
        }
    }

    for (let room = 1; room <= 7; room++) {
        rooms.push({ number: `${1000 + room}`, floor: 10 });
    }

    await Room.insertMany(rooms);
    console.log('Rooms populated successfully!');
    process.exit();
};

const populate = async () => {
    await connectDB();

    await Visitor.create({ visits: 0 });
    console.log('Rooms populated successfully!');
    process.exit();
};

// populateRooms();
populate();
