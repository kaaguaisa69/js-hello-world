# Usar una imagen base de Node.js
FROM node:16

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos al contenedor
COPY . .

# Instalar las dependencias
RUN npm install

# Ejecutar el servidor cuando se inicie el contenedor
CMD ["node", "server.js"]
