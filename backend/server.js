const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());

const bd = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '@Abc1234',
        database: 'esmateriais'
    }
);

app.post('/login', (req, res) => 
{
    const sql = "SELECT * from usuario WHERE usuario = ? AND senha = ?";

    bd.query(sql, [req.body.usuario, req.body.senha], (err, data) => 
    {
        if(err) return res.json("Falha no login");
        if(data.length > 0 )
        {
            return res.json("Login bem sucedido");
        } else
        {
            return res.json("Sem usuário cadastrado");
        }
        
    })
})

app.listen(8081, () => 
{
    console.log('Escutando...');
});