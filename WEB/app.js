document.addEventListener("DOMContentLoaded", (e) => {

     
    console.log('soy matias')
    const contenedorImg = document.getElementById('contenedorImg')
    const subtitulo = document.getElementById('subtitulo')
    const tarjetaHtml = document.getElementById('html')
    const tarjetaCss = document.getElementById('css')
    const tarjetaJavascript = document.getElementById('javascript')
    const tarjetaGit = document.getElementById('git')
    const contenedorTarjeta = document.getElementById('contenerdorTarjeta')
    let tarjeta = ''

    //console.log(data)
    
    console.log(data)

    data.forEach(element => {
        console.log(element.tarjeta)

        document.addEventListener("click", e => {
            //console.log(e.target)
            //console.log(tarjetaHtml)
            
            if (e.target === tarjetaHtml && element.tarjeta === 'html') {
                
                contenedorImg.innerHTML = `<img src="${element.imagen}" alt="${element.tarjeta}">`
                subtitulo.innerHTML = element.tarjeta
                tarjeta = ''
                const arraySeccion = element.secciones

                arraySeccion.forEach(element => {
                    console.log(element.nombre)
                    
                    tarjeta += `
                    <div class="tajerta-horizontal">
                        <a href="${element.link}" target="_blank">Obten más info...</a>
                        <h2>${element.nombre}</h2>
                        <p>
                        ${element.descripcion}
                        </p>
                    </div>`
                });
            }

            if (e.target === tarjetaCss && element.tarjeta === 'css') {

                contenedorImg.innerHTML = `<img src="${element.imagen}" alt="${element.tarjeta}">`
                subtitulo.innerHTML = element.tarjeta
                tarjeta = ''
                //console.log(element.secciones)
                const arraySeccion = element.secciones

                arraySeccion.forEach(element => {
                    console.log(element.nombre)

                    tarjeta += `
                    <div class="tajerta-horizontal">
                        <a href="${element.link}" target="_blank">Obten más info...</a>
                        <h2>${element.nombre}</h2>
                        <p>
                        ${element.descripcion}
                        </p>
                    </div>`
                });
            }

            if (e.target === tarjetaJavascript && element.tarjeta === 'javascript') {

                contenedorImg.innerHTML = `<img src="${element.imagen}" alt="${element.tarjeta}">`
                subtitulo.innerHTML = element.tarjeta
                tarjeta = ''
                //console.log(element.secciones)
                const arraySeccion = element.secciones

                arraySeccion.forEach(element => {
                    console.log(element.nombre)

                    tarjeta += `
                    <div class="tajerta-horizontal">
                        <a href="${element.link}" target="_blank">Obten más info...</a>
                        <h2>${element.nombre}</h2>
                        <p>
                        ${element.descripcion}
                        </p>
                    </div>`
                });
            }

            if (e.target === tarjetaGit && element.tarjeta === 'git') {

                contenedorImg.innerHTML = `<img src="${element.imagen}" alt="${element.tarjeta}">`
                subtitulo.innerHTML = element.tarjeta
                tarjeta = ''
                //console.log(element.secciones)
                const arraySeccion = element.secciones

                arraySeccion.forEach(element => {
                    console.log(element.nombre)

                    tarjeta += `
                    <div class="tajerta-horizontal">
                        <a href="${element.link}" target="_blank">Obten más info...</a>
                        <h2>${element.nombre}</h2>
                        <p>
                        ${element.descripcion}
                        </p>
                    </div>`
                });
            }

            contenedorTarjeta.innerHTML = tarjeta
            console.log(contenedorTarjeta)
        })

        
    });

 

    
})