import express from 'express';
import { PORT } from './config.js';
import productRoutes from './routes/products.routes.js';
import userRoutes from './routes/users.routes.js';
import categoriesRoutes from './routes/categories.routes.js';
import suppliersRoutes from './routes/suppliers.routes.js';
import cors from 'cors';

const express = require('express');
const app = express();

// Middleware básico para solicitudes JSON
app.use(express.json());

// Endpoint básico para probar
app.get('/', (req, res) => {
    res.send('API is running!');
});

app.use(productRoutes);
app.use(userRoutes);
app.use(categoriesRoutes);
app.use(suppliersRoutes);
// Configuración del puerto (Azure usa process.env.PORT)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});