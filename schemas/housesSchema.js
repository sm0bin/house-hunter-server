// {
//     "owner": "Carter Moore",
//     "city": "Philadelphia",
//     "bedrooms": 4,
//     "bathrooms": 3,
//     "roomSize": "Large",
//     "availability": "Available Now",
//     "rent": 3100,
//     "thumbnail": "https://source.unsplash.com/mR1CIDduGLc",
//     "featuredImages": [
//       "https://source.unsplash.com/g39p1kDjvSY",
//       "https://source.unsplash.com/aren8nutd1Q",
//       "https://source.unsplash.com/2gDwlIim3Uw"
//     ]
//   },


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const houseSchema = new Schema({
    owner: {
        type: String,
        required: [true, "Owner is required!"]
    },
    city: {
        type: String,
        required: [true, "City is required!"]
    },
    bedrooms: {
        type: Number,
        required: [true, "Bedrooms is required!"]
    },
    bathrooms: {
        type: Number,
        required: [true, "Bathrooms is required!"]
    },
    roomSize: {
        type: String,
        required: [true, "Room size is required!"]
    },
    availability: {
        type: String,
        required: [true, "Availability is required!"]
    },
    rent: {
        type: Number,
        required: [true, "Rent is required!"]
    },
    thumbnail: {
        type: String,
        required: [true, "Thumbnail is required!"]
    },
    featuredImages: {
        type: Array,
        required: [true, "Featured images are required!"]
    }
})

const House = mongoose.model('House', houseSchema);
module.exports = House;