/* const http = require("http") */

import app from "./src/app.js";
const port = process.env.PORT || 3000;

/* const rotas = {
    '/' : 'Curso de Node',
    '/livros' : 'Livraria de Node',
    '/autores' : 'Autores de Node',
    '/estudos' : 'Estudos de Node',
    '/sobre' : 'Infos da loja'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(rotas[req.url])
}) */

app.listen(port, () => {
    console.log(`Server is working on port: ${port}`);
    //console.log(`http://localhost:${port}`);
   /*  Object.keys(rotas).forEach((item) => {
        console.log(`http://localhost:${port}${item}`);
    }) */
})

// NodeMon faz um live reload no server - Usar: npm install nodemon@2.0.15 -d