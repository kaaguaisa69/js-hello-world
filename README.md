# Proyecto: js-hello-world

Este proyecto es un ejemplo simple en **JavaScript** que muestra "Hola Mundo" en el navegador, utilizando un servidor creado con **Node.js** y **Express**. Además, se proporciona un contenedor Docker para desplegar el proyecto de manera uniforme y se guía sobre cómo subir el proyecto a **Docker Hub** y **GitHub**.

---

## Índice

- [Requisitos previos](#requisitos-previos)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Configuración del servidor con Node.js y Express](#configuración-del-servidor-con-nodejs-y-express)
- [Dockerización del proyecto](#dockerización-del-proyecto)
  - [Construcción de la imagen Docker](#construcción-de-la-imagen-docker)
  - [Subir la imagen a Docker Hub](#subir-la-imagen-a-docker-hub)
- [Subir el proyecto a GitHub](#subir-el-proyecto-a-github)

---

## Requisitos previos

Para completar este proyecto, asegúrate de tener los siguientes programas instalados:

- [Node.js y npm](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)
- Una cuenta en [Docker Hub](https://hub.docker.com/)
- Una cuenta en [GitHub](https://github.com/)

---

## Estructura del proyecto

La estructura de archivos del proyecto debe ser la siguiente:

```plaintext
js-hello-world/
│
├── Dockerfile       # Archivo de configuración para Docker
├── index.js         # Código JavaScript con la lógica de "Hola Mundo"
├── server.js        # Servidor Node.js que sirve "Hola Mundo"
├── package.json     # Archivo de configuración de npm (contiene las dependencias)
├── node_modules/    # Directorio de dependencias de Node.js
└── README.md        # Documentación del proyecto (este archivo)
```
## Configuración del servidor con Node.js y Express
**Inicializar el proyecto de Node.js:**

```bash
npm init -y
```
**Instalar Express:**

```bash
npm install express
```
**Crear el archivo server.js en la raíz del proyecto con el siguiente contenido:**

```javascript
Copiar código
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hola Mundo</h1>');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
```
**Ejecutar el servidor:**

Ejecuta el siguiente comando para iniciar el servidor en localhost:

```bash
node server.js
```
Abre un navegador y visita http://localhost:3000 para ver el mensaje "Hola Mundo".

## Dockerización del proyecto
Para ejecutar este proyecto en Docker, crearemos una imagen Docker.

**Crear el archivo Dockerfile en la raíz del proyecto con el siguiente contenido:**

```Dockerfile
Copiar código
FROM node:16

WORKDIR /app

COPY . .

RUN npm install

CMD ["node", "server.js"]
```
**Construcción de la imagen Docker**

Construye la imagen Docker utilizando el siguiente comando:

```bash
docker build -t js-hello-world .
```
Este comando crea una imagen llamada js-hello-world.

**Ejecutar el contenedor**

Ejecuta el contenedor en tu máquina local:

```bash
docker run -p 3000:3000 js-hello-world
```
Ahora puedes acceder a tu proyecto en http://localhost:3000.

## Subir la imagen a Docker Hub
Iniciar sesión en Docker Hub:

```bash
docker login
```
**Etiquetar la imagen:**

Reemplaza usuario_docker con tu nombre de usuario en Docker Hub:

```bash
docker tag js-hello-world usuario_docker/js-hello-world:latest
```
**Subir la imagen a Docker Hub:**

```bash
docker push usuario_docker/js-hello-world
```
Ahora la imagen estará disponible en tu cuenta de Docker Hub.

## Subir el proyecto a GitHub
**Crear un repositorio en GitHub:**

Ve a GitHub y crea un nuevo repositorio llamado js-hello-world.
**Inicializar Git en el proyecto:**

En la terminal, dentro de la carpeta js-hello-world, ejecuta:

```bash
git init
```
**Agregar archivos y hacer un commit inicial:**

```bash
git add .
git commit -m "feat: initial commit"
```
**Agregar el repositorio remoto:**

Enlaza el repositorio remoto de GitHub con el proyecto local. 

```bash
git remote add origin https://github.com/kaaguaisa69/js-hello-world.git
```
**Subir los cambios a GitHub:**

```bash
git push -u origin main
```
Ahora tu proyecto estará disponible en GitHub.

## Despliegue en Railway (Serverless)
1. Ve a Railway e inicia sesión.
2.Crea un nuevo proyecto e importa el repositorio desde GitHub.
3. Railway automáticamente detectará el Dockerfile y creará un contenedor.
4. Configura los ajustes necesarios y despliega la aplicación.
5. Obtén la URL de despliegue y verifica que el proyecto se ejecute correctamente.
