import express from 'express';
import { PORT } from './config.js';
import productRoutes from './routes/products.routes.js';
import userRoutes from './routes/users.routes.js';
import categoriesRoutes from './routes/categories.routes.js';
import suppliersRoutes from './routes/suppliers.routes.js';
import cors from 'cors';

const app = express();

app.use(express.json());

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'],  
  credentials: true, 
};

app.get('/', (req, res) => {
  res.send('¡La API está funcionando correctamente!');
});

app.use(cors(corsOptions));  
app.use(express.json());

// Usar las rutas
app.use(productRoutes);
app.use(userRoutes);
app.use(categoriesRoutes);
app.use(suppliersRoutes);

app.listen(PORT, () => {
  console.log('Servidor iniciado... Puerto: ', PORT);
});