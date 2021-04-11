import app from './app';
import './database';
//WE USE THE PORT VAR DE ENTORNO FROM ./APP 
app.listen(app.get('port'), () => {
    console.log("server on port:", app.get('port'));
})