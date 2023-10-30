# Desafio Node.js + Nginx Full Cycle

### Descrição:

App feito em Node.js se conectando a um banco de dados MySQL, e utilizando o Nginx como proxy reverso para realizar a comuniação entre cliente e servidor. O Node.js e o Nginx serão configurados através do Dockerfile e orquestrados pelo docker-compose juntamente com o MySQL. O app deverá exibir um HTML com a seguinte informação:

Full Cycle Rocks!

- Lista de nomes cadastradas no MySQL

### Premissas:

- Usar linguagem Node.js e empacotar usando o Dockerfile
- Usar o banco de dados MySQL
- Criar arquivo do docker-compose para orquestrar os containers
- Ao executar o comando `docker compose up -d` o app deverá ficar disponível na porta 8080

### Para rodar o app:

```bash
git clone git@github.com:vitorluigiorsini/nodejs-nginx.git

cd nodejs-nginx

docker compose up -d
```
