const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const roomModel = require("./models/room");
const dbConfig = require("./db");
const roomsRoute = require("./routes/roomsRoute");
const usersRoute = require("./routes/usersRoute");
const bookingsRoute = require("./routes/bookingsRoute");
app.use(express.json());
app.use(
  cors({
    origin: ["https://tsghotelbackend.vercel.app/"],
    methods: ["POST", "GET"],
    credentials: true,
  }),
);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);
app.use("/api/bookings", bookingsRoute);
const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Node Server Started using ${port}`));
