/**
 * @file users.js
 * @summary Defines user schema
 * */

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    questions1:[
        {
            number: {
                type: Number
            },
            answer: {
                type: Boolean
            }
        }
    ],
    questions2 :[
        {
            number: {
                type: Number
            },
            answer: {
                type: Boolean
            }
        }
    ]

});

module.exports = {
    Users: mongoose.model("Users", userSchema)
};
