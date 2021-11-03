const express = require("express");
const router = express.Router();

let listaEscritores = [
    {
    nome: 'J. RR Tolkien',
    nascimento: '03/01/1892'
    }
];

router.get("/", (req,res) => {
    res.status(200).json({message:"Escritores ok"});
});

router.get("/listar", (req,res) => {
    res.status(200).json(listaEscritores);
});

// router.get("/listar/:nome", (req,res) => {
//     const nome = req.params.nome;
//     const jogador = listaJogadores.find((item) => item.nome === nome);
//     res.status(200).json(jogador);
// });

router.get("/listarindex/:id", (req,res) => {
    const id = req.params.id;
    const index = listaEscritores[id];
    res.status(200).json({index:index});
});

router.post("/", (req,res) => {
    const escritor = req.body;

    if(!escritor.nome){
        res.status(400).json({message:"escritor na requisição esta vazio"});
        return;
    }
    if(!escritor.nascimento){
        res.status(400).json({message:"nascimento na requisição esta vazio"});
        return;
    }

    listaEscritores.push(escritor); 
    res.status(201).json({message:"cadastrado com sucesso"});
});

router.put("/listarindex/:id", (req,res) => {
    const id = req.params.id;
    const escritor = listaEscritores[id];
    
    console.log(escritor);
    
    listaEscritores[id] = req.body;

    res.status(200).json(listaEscritores[id]);
});

router.delete("/listarindex/:id", (req,res) => {
    const id = req.params.id;
    delete listaEscritores[id];
    console.log(listaEscritores[id]);
    res.status(200).json(listaEscritores);
});

// router.delete("/deletar/:id", (req,res) => {
//     const id = req.params.id;
//     listaLivros.splice(id,1);
//     res.json(listaJogadores);
// });

module.exports = router;