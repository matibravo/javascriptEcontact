//* ====== EJERCICIO 4 ======

const profesores = [
  {
    nombre: "Pablo Mendez",
    materiasHabilitadas: ["Quimica", "Matematicas", "Fisica"],
    totalAlumnos: 43,
    catedras: [
      {
        materia: "Fisica",
        alumnos: 18,
      },
      {
        materia: "Matematicas",
        alumnos: 25,
      },
    ],
  },
  {
    nombre: "Ana Gimenez",
    materiasHabilitadas: ["Lengua", "Matematicas"],
    totalAlumnos: 38,
    catedras: [
      {
        materia: "Psicologia",
        alumnos: 21,
      },
      {
        materia: "Lengua",
        alumnos: 15,
      },
    ],
  },
  {
    nombre: "Georgina Barrientos",
    materiasHabilitadas: [
      "Ciencias Sociales",
      "Ciencias Naturales",
      "Historia",
    ],
    totalAlumnos: 54,
    catedras: [
      {
        materia: "Fisica",
        alumnos: 17,
      },
      {
        materia: "Lengua",
        alumnos: 15,
      },
    ],
  },
  {
    nombre: "Carlos Benitez",
    materiasHabilitadas: ["Filosofia", "Ciencias Naturales", "Historia"],
    totalAlumnos: 31,
    catedras: [
      {
        materia: "Ciencias Sociales",
        alumnos: 10,
      },
      {
        materia: "Matematicas",
        alumnos: 15,
      },
    ],
  },
  ,
  {
    nombre: "Francisco Gonzalez",
    materiasHabilitadas: ["Matematicas", "Educacion Fisica"],
    totalAlumnos: 68,
    catedras: [
      {
        materia: "Matematicas",
        alumnos: 17,
      },
      {
        materia: "Educacion Fisica",
        alumnos: 25,
      },
    ],
  },
];

//* Crear una funcion que reciba el arreglo "profesores" establecido aquí arriba y retornar un arreglo de objetos indicando los profesores que tienen materias habilitades en comun
//* El arreglo debe tener el siguiente formato:
//* [
//*   {
//*     materia: "Matematicas"
//*     profesores: ["Pablo Mendez", "Ana Gimenez"]
//*   }
//* ]
//* donde "materia" es un string y "profesores" es un arreglo de strings
//* Si la materia la da un solo profesor, no debe ser incluído en el arreglo.

//? AYUDA: Investigar objeto SET puede ser de gran ayuda.

function profesoresfun(profesores = []) {
  const materiasUnicas = new Set()
  const materiasRepetidas = []

  profesores.map(profe => {


    const { nombre, materiasHabilitadas } = profe

    //console.log(nombre,materiasHabilitadas)

    materiasHabilitadas.map(materia => {
      //console.log(materia)
      if (materiasUnicas.has(materia)) {
        materiasRepetidas.push(materia)
      } else {
        materiasUnicas.add(materia)
      }
    })

    materiasRepetidas.map(mate => {
      console.log({
        materia: mate,
        profesores: [nombre]
      })
    })

  })   

  
  //console.log(materiasRepetidas)

  
}

profesoresfun(profesores)