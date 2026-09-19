import express from "express";
import cors from "cors";
import categoryRouter from "./routes/category/category.route";
import postRouter from "./routes/post/post.route";

const app = express();
const PORT = 5000;

// WAJIB sebelum route lain. Tanpa ini, Flutter Web (Chrome) kena blokir
// CORS dari browser dengan pesan "ClientException: Failed to fetch".
app.use(cors());

app.use(express.json());

app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/posts", postRouter);

app.get("/", (req, res) => {
    res.send("Hello Express + TypeScript!");
});


app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});