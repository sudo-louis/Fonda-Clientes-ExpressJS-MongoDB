const app = require('./app');

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});