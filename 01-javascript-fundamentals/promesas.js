const empleados = [
    {
        id:1,
        nombre: 'Fernando'
    },
    {
        id:2,
        nombre: 'Linda'
    },
    {
        id:3,
        nombre: 'Karen'
    }    
];

const salarios = [
    {
        id:1,
        salario:1000
    },
    {
        id:2,
        salario:1500
    }
];

const getEmpleado = (id) =>{
    

    return  new Promise((resolve,reject)=>{
        const empleado = empleados.find((e)=> e.id == id)?.nombre;

        //Un ternario es un if simplificado como este
        (empleado)
            ? resolve(empleado)
            //Actua como resultado de catch
            : reject(`No existe empleado con id ${id}`)
    });

}


const getSalario = (id) => {

    return new Promise((resolve,reject)=> {
        const salario = salarios.find((index) => index.id == id)?.salario;

        //Un ternario es un if simplificado como este
        (salario)
            ? resolve(salario)
            //Actua como resultado de catch
            : reject(`No existe un salario con id ${id}`)
    });
}

const id = 2;

/*
getEmpleado(id)
     .then(empleado=>console.log(empleado))
     .catch(err => console.log(err));

getSalario(id)
     .then(salario=>console.log(salario))
     .catch(err => console.log(err));
*/

    // getEmpleado(id)
    //     .then(empleado =>{

    //         getSalario(id)
    //             .then(salario => {
    //                 console.log('El empleado es:', empleado, 'tiene un salario de: ', salario);
    //             })
                
    //             .catch(err => console.log(err))
    //     })
    //     .catch(err => console.log(err))


//Promesas anidadas

let nombre;

getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id)
    })
    .then (salario => console.log('El empleado ',nombre,' tiene un salario de: ',salario))
    //Catch global
    .catch(err => console.log(err));
