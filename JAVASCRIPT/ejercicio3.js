//* ====== EJERCICIO 3 ======

const familia = [
  {
    nombre: "Pedro",
    posicion: "padre",
    edad: 45,
    parientes: {
      padres: false,
      hijos: {
        cantidad: 3,
        mayores: 2,
        menores: 1,
      },
      nietos: {
        cantidad: 1,
        mayor: 0,
        menor: 1,
      },
    },
  },
  {
    nombre: "Ana",
    posicion: "madre",
    edad: 39,
    parientes: {
      padres: false,
      hijos: {
        cantidad: 3,
        mayores: 2,
        menores: 1,
      },
      nietos: {
        cantidad: 1,
        mayor: 0,
        menor: 1,
      },
    },
  },
  {
    nombre: "Juan",
    posicion: "hijo",
    edad: 24,
    parientes: {
      padre: {
        nombre: "Francisco",
        edad: 50,
      },
      madre: {
        nombre: "Ana",
        edad: 39,
      },
      hijos: false,
    },
  },
  {
    nombre: "Carla",
    posicion: "hija",
    edad: 14,
    parientes: {
      padre: {
        nombre: "Pedro",
        edad: 45,
      },
      madre: {
        nombre: "Ana",
        edad: 39,
      },
      hijos: false,
    },
  },
  {
    nombre: "Cristian",
    posicion: "hijo",
    edad: 29,
    parientes: {
      padre: {
        nombre: "Pedro",
        edad: 45,
      },
      madre: {
        nombre: "Ana",
        edad: 39,
      },
      hijos: {
        cantidad: 1,
        mayores: 0,
        menores: 1,
      },
    },
  },
];

//* Crear una funcion que reciba el arreglo familia definido aquí arriba que valide si la cantidad de hijos establecida como su distribucion entre mayores y menores es correcta.
//* En caso de no coincidir la relación de cantidad, retornar un string que diga "La cantidad de hijos establecida no es coherente"
//* En caso de no coincidir la distribución entre mayores y menores, retornar un string que diga "La distribución de hijos entre mayores y menores es incorrecta"
//* En caso de que toda la información sea coherete, retornar un true.

function personas(familia = []) {

  let mayor = 0
  let menor = 0
  
  familia.map(persona => {

    const { posicion,
            edad,
            parientes: { hijos }
          } = persona
        

          //console.log(posicion, edad)

    if (hijos !== false) {

      if (hijos.cantidad !== (hijos.mayores + hijos.menores)) return console.log('La cantidad de hijos establecida no es coherente')
    }

    if (posicion === 'hijo' || posicion === 'hija') {

       if (edad > 18) {
        mayor += 1
       } else {
        menor += 1
       }       
    }
  })
  
  familia.map(persona => {
    const { posicion,
            parientes: { hijos }
             } = persona

    if (posicion === 'padre' || posicion === 'madre') {

      if (hijos.mayores !== mayor && hijos.menores !== menor) return console.log('La distribución de hijos entre mayores y menores es incorrecta')
    }
  })

  return console.log(true)
  
  
}

personas(familia)