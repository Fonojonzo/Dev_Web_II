const express = require("express");

const app = express();

app.use(express.json())

app.listen(8080, () => {
    console.log("O server está ativo na porta 8080");
});

app.post('/includeAluno', (req, res) => {
    const { nome } = req.body;
    res.send(`<h1> Olá ${nome}, Bem Vindo!`);
})

let Alunos = ['Maria','João','José'];

//CREATE 
app.post('/includeAluno', (req, res) => {
    const { nome } = req.body;
    Alunos.push(nome);
    res.send(`<h1> Ola ${nome}, Bem Vindo!`)
})

app.get('/getAluno', (req, res) => {
    const { index } = req.body;
    //connect SQL - 
//SELECT * FROM Alunos WHERE id = index
    res.send(`<h1> O aluno ${Alunos[index]} foi encontrado </h1> `)
});

app.get('/getAlunos', (req, res) => {
   //SELECT * FROM Alunos
   console.log(Alunos);
   res.send(`Todos os alunos cadastrados são: ${Alunos}`)
});

//UPDATE
app.put('/updateAluno', (req, res) => {
    //UPDATE nome FROM Alunos WHERE id = index;
    const {index, nome} = req.body;
    Alunos[index] = nome;
    res.send("<h1>O nome foi atualizado com sucesso!!! </h1>");
    console.log(Alunos);
});

app.delete('/deleteAluno', (req, res) => {
    //DELETE FROM Alunos WHERE id = index
    const {index} = req.body;
    Alunos.splice(index, 1)
    res.send(`<h1>Alunos após o delete: ${Alunos}</h1>`);
})
