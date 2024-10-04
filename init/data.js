const { default: mongoose } = require("mongoose")

const sampleUser = [
    {
        firstName: "Arpit",
        lastName: "Saraswat",
        email: "arpit@123",
        password: "arpit123"
    },
    {
        firstName: "Ram",
        lastName: "ram",
        email: "arpit@123",
        password: "arpit123"
    }
]

module.exports = { data: sampleUser };