import express from "express";

const app = express();

app.use(express.json())

const livros = [
    {
        id: 1, 
        titulo: 'Livro de Id 1 - Teste 1000'
    },
    {
        id: 2, 
        titulo: 'Livro de Id 2 - Teste 2500'
    }
]

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node');
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
})

app.post('/livros', (req, res) => {
    console.log(res);
    livros.push(req.body);
    console.log(req.body);
    res.status(201).send(`Livro cadastrado com sucesso!`)
})

export default app