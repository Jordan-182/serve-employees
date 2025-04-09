import cors from "cors";
import express from "express";

const app = express();
app.use(cors({ origin: ["http://localhost:5173"] }));

const port = 3310;

const sampleEmployee = {
  name: {
    first: "Charlie",
    last: "Thompson",
  },
  email: "charlie.thompson@example.com",
  picture: {
    medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
  },
  name: {
    first: "Josie",
    last: "Thompson",
  },
  email: "charlie.thompson@example.com",
  picture: {
    medium: "https://randomuser.me/api/portraits/med/women/40.jpg",
  },
};

app.get("/api/employees", (req, res) => {
  res.json({ results: [sampleEmployee] });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
