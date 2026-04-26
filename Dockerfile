# Imagen base ligera de Node
FROM node:20-alpine

# Crear carpeta de trabajo dentro del contenedor
WORKDIR /app

# Copiar archivos del proyecto
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el proyecto
COPY . .

# Exponer puerto de Vite
EXPOSE 5173

# Comando para ejecutar la app
CMD ["npm", "run", "dev", "--", "3000"]