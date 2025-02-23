const Visitor = require('../models/Visitor');
const Room = require('../models/Visitor');

exports.getVisitor = async (req, res) => {
    try {
        const visits = await Visitor.findById("67baebdbbac8b189fe6a0a07");
        res.json(visits);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching visitor' });
    }
}

exports.addVisitor = async (req, res) => {
    try {
        const visitor = await Visitor.findById("67baebdbbac8b189fe6a0a07");

        if (!visitor) {
            return res.status(404).json({ message: "Visitor record not found" });
        }

        visitor.visits += 1; // Increment visits count
        await visitor.save(); // Save updated record

        res.json({ message: "Visit updated", visits: visitor.visits });
    } catch (err) {
        console.error("Error updating visits:", err);
        res.status(500).json({ message: "Error updating visits" });
    }
};
