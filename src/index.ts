import express from "express";
import categoryRouter from "./routes/category/category.route";
import postRouter from "./routes/post/post.route";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/posts", postRouter);

app.get("/", (req, res) => {
    res.send("Hello Express + TypeScript!");
});


app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});