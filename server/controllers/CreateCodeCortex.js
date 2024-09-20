const CodeCortexModel = require('../models/CodeCortex.js'); // Ensure the correct model file is used

// Function to test server
const test = (req, res) => {
    res.json('test is working');
};

// Function to handle team creation for CodeCortex
const CreateC = async (req, res) => {
    try {
        const { ParticipantName, RegNo, VITEmail, TeamName, teamId, teamStrength } = req.body;

        console.log("Code Cortex");
        console.log(req.body);

        // Validate input
        if (!ParticipantName || !RegNo || !VITEmail || !TeamName || !teamId) {
            return res.status(400).json({ error: "Code Cortex: All fields are required" });
        }

        if (RegNo.length !== 9) {
            return res.status(400).json({ error: "Code Cortex: Registration number must be exactly 9 characters long" });
        }

        const existingRegNo = await CodeCortexModel.findOne({ TeamMembers: { $elemMatch: { RegNo } }}).exec();
        if (existingRegNo) {
            return res.status(400).json({ error: "Code Cortex: Team lead with same Registration no. exists." });
        }

        const existingMail = await CodeCortexModel.findOne({ TeamMembers: { $elemMatch: { VITEmail } }}).exec();
        if (existingMail) {
            return res.status(400).json({ error: "Code Cortex: Team lead with same Email ID exists." });
        }
        
        const existingTeam = await CodeCortexModel.findOne({ teamId }).exec();
        if (existingTeam) {
            return res.status(400).json({ error: "Code Cortex: Team with same Id already exists." });
        }

        // Check if TeamName is already taken (case-insensitive)
        const teamNameExists = await CodeCortexModel.findOne({ TeamName: { $regex: new RegExp(`^${TeamName}$`, 'i') } }).exec();
        if (teamNameExists) {
            return res.status(400).json({ error: "Code Cortex: Team name is already taken" });
        }

        // Generate a unique team ID
        // const generatedTeamId = await generateUniqueTeamId();


        // Create new team entry
        const newTeam = new CodeCortexModel({
            teamId: teamId,
            TeamName,
            TeamMembers: [{
                ParticipantName,
                RegNo,
                VITEmail
            }]
        });

        // Save the new team to the database
        const savedTeam = await newTeam.save();

        // Send success response
        return res.status(201).json({
            success: true,
            message: 'Code Cortex: Team created successfully',
            data: savedTeam,
            teamId: teamId
        });

    } catch (error) {
        console.error('Error in CreateC function:', error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                message: 'Code Cortex: Validation error',
                errors: error.errors
            });
        }
        res.status(500).json({
            success: false,
            message: 'Code Cortex: An error occurred while processing the request',
            error: error.message
        });
    }
};

// Function to generate a unique 7-digit team ID
// const generateUniqueTeamId = async () => {
//     let teamId;
//     let isUnique = false;

//     while (!isUnique) {
//         teamId = (Math.floor(1000000 + Math.random() * 9000000)).toString();
//         const existingTeam = await CodeCortexModel.findOne({ teamId }).exec();
//         if (!existingTeam) {
//             isUnique = true;
//         }
//     }

//     return teamId;
// };

module.exports = {
    test,
    CreateC
};
