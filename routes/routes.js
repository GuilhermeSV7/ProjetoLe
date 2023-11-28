const express = require('express');
const router = express.Router();
const path = require('path');
const { Funcionario } = require('../models/Funcionario'); // Importe o modelo Funcionario

// Rota para a página inicial
router.get('/', (req, res) => {
  // Lógica para renderizar a página Index
  res.render('index'); // Certifique-se de que 'index' corresponde ao nome do arquivo HTML/EJS em 'public'
});

// Rota para a página de Funcionários
router.get('/Funcionarios', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/Funcionario.html'));
});

router.post('/cadastrarFuncionario', async (req, res) => {
  try {
    console.log(req.body); // Adicione esta linha para imprimir o corpo da requisição no console

    const { nomeFuncionario, rgFuncionario, funcao, dataIngresso } = req.body;

    console.log('Antes de Funcionario.create');

    const novoFuncionario = await Funcionario.create({
      nome: nomeFuncionario,
      rg: rgFuncionario,
      funcao: funcao,
      dataIngresso: dataIngresso,
    });

    console.log('Depois de Funcionario.create');

    res.status(201).json({ message: 'Funcionário cadastrado com sucesso', funcionario: novoFuncionario });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao cadastrar funcionário', error: error.message });
  }
});

module.exports = router;
