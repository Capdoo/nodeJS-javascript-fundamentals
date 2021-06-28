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



//Transforma esta funcion en una funcion que retorna una promesa
const getInfoUsuario = async()=>{
        
    try {
        
            const empleado = await getEmpleado(id)
            const salario = await getSalario(id)
            
            return `El salario del empleado ${empleado} es ${salario}`;
        
    } catch (error) {
        throw error;   
    }
}


const id = 3;

getInfoUsuario(id)
    .then(msg => {
        console.log('TODO BIEN')
        console.log(msg)
    })
    .catch(err => {
        console.log('TODO MAL')
        console.log(err)
    })



