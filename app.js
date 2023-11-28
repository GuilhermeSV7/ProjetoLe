const express = require('express');
const path = require('path');
const routes = require('./routes/routes'); // Importe as rotas
const Funcionario = require('./models/db');

const app = express();
const PORT = process.env.PORT || 3000;



// Configurando o uso do EJS como mecanismo de visualização
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Ajuste para apontar para o diretório 'public'

// Servir arquivos estáticos (CSS, JS, imagens, etc.)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Adicione este middleware para processar dados do formulário

// Use as rotas definidas em routes.js
app.use('/', routes);

// Inicializando o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});