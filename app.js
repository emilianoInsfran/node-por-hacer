
const argv = require('./config/yargs').argv

const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors')
//console.log(argv);

let comando = argv._[0];

switch( comando )  {
    
    case 'crear':
        let tarea = porHacer.crear( argv.descripcion)
        console.log(tarea);
        break;
    
    case 'listar':

        let listado = porHacer.getListado();

        for( let tarea of listado) {
            console.log('==========='.green);
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado);
            console.log('==========='.green);

        }

        console.log('Mostrar todas las tareas por ahcer');
        break;

    case 'actualizar':

        let actualizado = porHacer.actualizar(argv.descripcion,argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':

        let actualiza = porHacer.borrar(argv.descripcion);
        console.log(actualiza);
        break;
    
    default:
        console.log('Comando no es reconocido');
        break;
    }