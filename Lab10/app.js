const fs = require('fs');


console.log("Corriend app.js");

const mascotas = ["Firulais", "Paco", "Luna"];

const http = require('http');

const server = http.createServer((request, response) => {

    if (request.url === '/') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Mascotas</title><meta charset="utf-8"></meta></head>');
        response.write('<body>');
        response.write('<h1>Bienvenido a este sitio de mascotas</h1>');
        response.write('<main>');
        response.write('<h2>Aquí se habla se de mascotas</h2>');
        response.write('<p>Estos son nuestros mascotas:</p>');
        response.write('<ol>');
        for (let i in mascotas) {
            response.write('<li>' + mascotas[i] + '</li>');
        }
        response.write('</ol>');
        response.write('<a href="/perros">Ver la pagina de perros</a>');
        response.write('</main>');
        response.write('</body>');
        response.end();
    } else if (request.url === '/perros' && request.method === 'GET') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html lang="es-mx"><head><title>mascotas</title><meta charset="utf-8"></meta></head>');
        response.write('<body>');
        response.write('<h1>Bienvenido a este sitio de mascotas</h1>');
        response.write('<main>');
        response.write('<h2>Aquí se habla se de nuevos mascotas</h2>');
        response.write('<p>Ingresa los datos del nuevo mascota:</p>');
        response.write('<form action="/perros" method="POST">');
        response.write('<label for="nombre">Nombre del nuevo mascota: </label>');
        response.write('<input type="text" name="nombre" required>');
        response.write('<input type="submit" value="Enviar">');
        response.write('</form>');
        response.write('<br><br>');
        response.write('<a href="/">Regresar a la lista de mascotas</a>');
        response.write('</br>');
        response.write('</body>');
        response.end();
    }
    else if (request.url === '/perros' && request.method === 'POST') {
        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });
        return request.on('end', () => {
            console.log(datos);
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const nuevo_dato = datos_completos.split('=')[1];
            console.log(nuevo_dato);
            mascotas.push(nuevo_dato);
            console.log(mascotas);
            response.setHeader('Content-Type', 'text/html');
            response.write('<!DOCTYPE html><html lang="es-mx"><head><title>mascotas</title><meta charset="utf-8"></meta></head>');
            response.write('<body>');
            response.write('<h1>Bienvenido a este sitio de mascotas</h1>');
            response.write('<main>');
            response.write('<h2>Aquí se habla se de mascotas</h2>');
            response.write('<h3>' + nuevo_dato + ' fue agregado a la lista.</h3>');
            response.write('<p>Estos son nuestros mascotas:</p>');
            response.write('<ol>');
            for (let i in mascotas) {
                response.write('<li>' + mascotas[i] + '</li>');
            }
            response.write('</ol>');
            response.write('<a href="/perros">Agregar un nuevo mascota</a>');
            response.write('</main>');
            response.write('</body>');
            return response.end();
        });
    }
    else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html lang="es-mx"><head><title>mascotas | Page not found</title><meta charset="utf-8"></meta></head>');
        response.write('<body>');
        response.write('<h1>La página ' + request.url + ' no se encontró</h1>');
        response.write('</body>');
        response.end();
    }});

    server.listen(6000);