const descripcion = {
    demand: true, // esto significa que es obligatorio  y base es lo que poniamos en consola --base=5
    alias: 'd',//en ves de poner node app listar base 5 - ponemos- node app listar -b 5
    desc:'descripcion de la tarea por hacer'
}

const opt  = {
    descripcion
}

const opt2 = {
    descripcion,

    completado: {
        alias:'c',
        default:true,
        desc:'Marca como comletado o pendiente unaa tarea'
    }
}

const opt3 = {
    descripcion
}

const argv =require('yargs')
        .command('crear','crea un elemento para hacer', opt )
        .command('actualizar','actualiza estado completado de una tarea',  opt2 )
        .command('borrar','borra estado completado de una tarea',  opt3 )

        .help() 
        .argv;

module.exports = {
    argv
}