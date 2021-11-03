const express = require("express");
const router = express.Router();

let listaLivros = [
    {
    nome: 'Senhor dos anéis',
    ano: 1954
    }
];

router.get("/", (req,res) => {
    res.status(200).json({message:"Livros ok"});
});

router.get("/listar", (req,res) => {
    res.status(200).json(listaLivros);
});

// router.get("/listar/:nome", (req,res) => {
//     const nome = req.params.nome;
//     const jogador = listaJogadores.find((item) => item.nome === nome);
//     res.status(200).json(jogador);
// });

router.get("/listarindex/:id", (req,res) => {
    const id = req.params.id;
    const index = listaLivros[id];
    res.status(200).json({index:index});
});

router.post("/", (req,res) => {
    const livro = req.body;

    if(!livro.nome){
        res.status(400).json({message:"livro na requisição esta vazio"});
        return;
    }
    if(!livro.ano){
        res.status(400).json({message:"ano na requisição esta vazio"});
        return;
    }

    listaLivros.push(livro); 
    res.status(201).json({message:"cadastrado com sucesso"});
});

router.put("/listarindex/:id", (req,res) => {
    const id = req.params.id;
    const livro = listaLivros[id];
    
    console.log(livro);
    
    listaLivros[id] = req.body;

    res.status(200).json(listaLivros[id]);
});

router.delete("/listarindex/:id", (req,res) => {
    const id = req.params.id;
    delete listaLivros[id];
    console.log(listaLivros[id]);
    res.status(200).json(listaLivros);
});

// router.delete("/deletar/:id", (req,res) => {
//     const id = req.params.id;
//     listaLivros.splice(id,1);
//     res.json(listaJogadores);
// });

module.exports = router;