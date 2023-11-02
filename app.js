import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();

const uri =
  "mongodb+srv://enzos3397:nexRP5blFJETE3cS@cluster0.twmzael.mongodb.net/?retryWrites=true&w=majority";

// Connect to MongoDB Atlas (replace with your MongoDB Atlas URL)
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema and model for your data
const itemSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  barber: Boolean,
});
const Item = mongoose.model("Item", itemSchema);

app.use(bodyParser.json());

// Define your API routes
app.get("/api/items", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.post("/api/items", async (req, res) => {
  const newItem = new Item(req.body);
  await newItem.save();

  const savedItem = await Item.findById(newItem._id);

  res.json(savedItem);
});

app.delete("/api/items/:id", async (req, res) => {
  const itemId = req.params.id;
  await Item.findByIdAndRemove(itemId);
  res.json({ message: "Item deleted" });
});

// Start the server
const port = process.env.PORT || 5500;
app.listen(port, () => {
  console.log(`Ahi lo puse en el puerto: ${port}`);
});
