const express = require("express");

const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (req,res) => {
    res.status(200).json({message:"bem vindos a nossa API"});
});

const livrosRouter = require("./livros");
app.use("/livros",livrosRouter);

const escritoresRouter = require("./escritores");
app.use("/escritores",escritoresRouter);

const editorasRouter = require("./editoras");
app.use("/editoras",editorasRouter);

app.listen(port, () => {
    console.info(`App rodando em: http://localhost:${port}`);
});