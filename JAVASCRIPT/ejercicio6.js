//* ====== EJERCICIO 6 ======

const colegio = {
  cantidadProfesores: 5,
  cantidadAlumnos: 193,
  profesores: [
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
      totalAlumnos: 42,
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
  ],
};

//* Crear una funcion que reciba 2 (dos) parámetros: el objeto "colegio" definido aquí arriba y un string indicando el nombre del profesor a consultar.
//* La función debe retornar lo siguiente:
//* si el profesor no se encuentra habilitado a dar algunas de las catedras asignadas, retornar un string que diga "El profesor XXX no cuenta con habilitación para dar las siguientes catedras: XXX, XXX, XXX..."
//* si no tiene problemas de habilitación, pero el total de alumnos no coincide con el total de todas sus catedras, retornar un string que diga "El profesor XXX se encuentra habilitado perfectamente pero faltan asignar XXX alumnos"
//* ... indicando la cantidad de alumnos que falten por asignar en ese string retornado
//* si no tiene problemas de habilitacion y tiene la totalidad de alumnos repartidos en sus catedras, retornar un objeto con el siguiente formato:
//* {
//*   ok: true,
//*   data:
//* }
//* donde "ok" es un booleano con el valor de true, y "data" es el mismo objeto que se esta consultando.

function colegioFun(colegio, nombreProfe) {

  const { profesores } = colegio
  const catedrasNoHabilitadas = []
  let sumAlumno = 0

  profesores.map(profe => {

    if (profe.nombre === nombreProfe) {
      //console.log(profe)
      //console.log(profe.materiasHabilitadas)
      //console.log(profe.catedras)

      profe.catedras.map(cate => {
        //console.log(cate.materia)
        if (!profe.materiasHabilitadas.includes(cate.materia)) {
          catedrasNoHabilitadas.push(cate.materia)
        }   
      })
      if (catedrasNoHabilitadas.length > 0) return console.log(`El profesor ${profe.nombre} no cuenta con habilitación para dar las siguientes catedras: ${catedrasNoHabilitadas}`)

      profe.catedras.map(cate => sumAlumno += cate.alumnos)

      if (profe.totalAlumnos !== sumAlumno) return console.log(`El profesor ${profe.nombre} se encuentra habilitado perfectamente, pero faltan asignar ${profe.totalAlumnos - sumAlumno} alumnos`)
      

      console.log({
        ok: true,
        data: profe
      }) 
    }

  })
  //console.log(profesores)

}

colegioFun(colegio, 'Francisco Gonzalez')