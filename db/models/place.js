//first step cerate a schema for the place model
import mongoose from "mongoose";
const { Schema } = mongoose;
const placeSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    Image: { type: String, required: true },
    mapURL: { type: String, required: true },
    description: { type: String, required: true },

});

const Place = mongoose.models.Place || mongoose.model("Place", placeSchema);
export default Place;