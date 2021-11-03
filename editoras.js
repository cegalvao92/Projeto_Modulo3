const express = require("express");
const router = express.Router();

let listaEditoras = [
    {
    nome: 'Happer Collins',
    sede: 'Nova York'
    }
];

router.get("/", (req,res) => {
    res.status(200).json({message:"Editoras ok"});
});

router.get("/listar", (req,res) => {
    res.status(200).json(listaEditoras);
});

// router.get("/listar/:nome", (req,res) => {
//     const nome = req.params.nome;
//     const jogador = listaJogadores.find((item) => item.nome === nome);
//     res.status(200).json(jogador);
// });

router.get("/listarindex/:id", (req,res) => {
    const id = req.params.id;
    const index = listaEditoras[id];
    res.status(200).json({index:index});
});

router.post("/", (req,res) => {
    const editora = req.body;

    if(!editora.nome){
        res.status(400).json({message:"editora na requisição esta vazio"});
        return;
    }
    if(!editora.sede){
        res.status(400).json({message:"editora na requisição esta vazio"});
        return;
    }

    listaEditoras.push(editora); 
    res.status(201).json({message:"cadastrado com sucesso"});
});

router.put("/listarindex/:id", (req,res) => {
    const id = req.params.id;
    const editora = listaEditoras[id];
    
    console.log(editora);
    
    listaEditoras[id] = req.body;

    res.status(200).json(listaEditoras[id]);
});

router.delete("/listarindex/:id", (req,res) => {
    const id = req.params.id;
    delete listaEditoras[id];
    console.log(listaEditoras[id]);
    res.status(200).json(listaEditoras);
});

// router.delete("/deletar/:id", (req,res) => {
//     const id = req.params.id;
//     listaLivros.splice(id,1);
//     res.json(listaJogadores);
// });

module.exports = router;