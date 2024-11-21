import express from 'express';
import { PORT } from './config.js';
import productRoutes from './src/routes/products.routes.js';
import userRoutes from './src/routes/users.routes.js';
import categoriesRoutes from './src/routes/categories.routes.js';
import suppliersRoutes from './src/routes/suppliers.routes.js';
import cors from 'cors';

const app = express();

// Configuración CORS
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'],  
  credentials: true,
};

app.use(cors(corsOptions));  
app.use(express.json());

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).send('Internal Server Error');
});

// Usar las rutas
app.use(productRoutes);
app.use(userRoutes);
app.use(categoriesRoutes);
app.use(suppliersRoutes);

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto: ${PORT}`);
});