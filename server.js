//importar express
const express = require("express");

// iniciar o express
const app = express();

// nome do meu projeto
const appName = "curso-angular-basico";

// local onde sera feito o build no Heroku
const outputPath = `${__dirname}/dist/${appName}`;

// seta o diretorio de build para servir conteudo estatico
app.use(express.static(outputPath));

// redireciona as requisicoes para o index.html
app.get("/*", (req, res) => {
  res.sendFile(`${outputPath}/index.html`);
});

// express vai ouvir na porta que o Heroku disponibilizar
app.listen(process.env.PORT);
