import express from 'express';
import 'dotenv/config' ; // permite procesar variable de entorno
import cors from 'cors';
import morgan from 'morgan';

console.log("hola amigos")

//1- configurar un puerto
const app = express();
app.set ('port', process.env.PORT || 4000);
app.listen(app.get('port'), ()=>{
    console.log('Estoy en el puerto '+ app.get('port'))
})

//2- Configurar los middlewares
app.use(cors()); // permite conexiones remotas
app.use(morgan('dev'));//
app.use(express.json());
app.use(express.urlencoded({extended:true}));;
//todo : configurar index.html

//3_ configurar las rutas

app.get('/nuevo/producto', (req, res)=>{
    console.log('aqui obtener lista de todos los productos');
    res.send('Aqui enviaremos la lista de productos')
})
