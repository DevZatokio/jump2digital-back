# PROJECT NAME: jump2digital-back

Barcelona Digital Talent organiza JUMP2DIGITAL, el primer evento de referencia del talento digital en Barcelona impulsado por Mobile World Capital Barcelona, Ayuntamiento de Barcelona, Generalitat de Catalunya y ACCIÓ , dónde podrás conocer las tecnologías y profesiones digitales más emergentes en este ecosistema, poner a prueba tus habilidades digitales a través de actividades de reclutamiento y conectar con las empresas que están liderando la digitalización del sector. Lugar un Hackathon dónde empresas del hub tecnológico de Barcelona buscarán nuevos profesionales con perfil de Frontend, Backend y Data para incorporarlos a sus compañías. ¿Te lo vas a perder? Participa en la primera fase del Hackathon que tendrá lugar del 22 – 28 de noviembre y, si eres una de las 80 personas seleccionadas, conseguirás una plaza en la competición presencial que organizaremos el 10 de diciembre en La Llotja de Barcelona.

## USER STORIES / OBJETIVOS 

✅ Task 1 → Configurar un servicio REST utilizando alguno de las tecnologías propuestas que escuche a peticiones en el PUERTO=5000

✅ Task 2 → Configurar una base de datos (alguna de las propuestas) y añadir los modelos de TICKET y PRODUCT

✅ Task 3 → Los parámetros de productType y paymentType son validados antes de ser guardados.

✅ Task 4 → El endpoint de /ticket me permite: leer, crear y eliminar TICKETS

✅ Task 5 → El endpoint product /product me permite: leer, crear, eliminar y actualizar PRODUCTS

✅ Task 6 → El endpoint /ticket/analytics devuelve la siguiente información: Valor total de los productos vendidos, números de productos venidos por tipo, número de tickets que han utilizado Visa y número de tickets que han utilizado MasterCard


![screen shot](https://drive.google.com/uc?export=view&id=1D_C0-oiEh5y4sj3OufFOG57gDVdtibv6)
## Usage

env.local.js: Archivo configuración del entorno.
server.js: Archivo de configuración del servidor.
src: Carpeta contenedora de aplicación.
components: Carpeta componentes estructurales e importante.
configs: Carpeta configuracion de los components o otros.
controllers: Carpeta controladores, endpoints ordenado carpeta segun actividad.
routes: Carpeta de rutas ordenas por el nombre de carpeta de controladores.
schemas: Esquemas que se presentan para interactuar con mongoDB.

- Archivos importantes

src/components/database.js: configuración clase database metodos importantes conexión, model, desconexión.

src/components/response.js: implementación de respuesta node.js estandar.

- Arquitectura
  - JavaScript
  - MongoDB
  - Express
## API
![screen shot](https://drive.google.com/uc?export=view&id=1THaBKhMPF0tVYwJRiZ0x1dA9DgDapbKX)

/product/:_id GET = revisar producto individual
/product GET = todos productos
/product DELETE = recibe body: {_id:'XX'}
/product PUT = actualizar parametros ejemplo body: {"_id":"XXXX","name": "mac mini","price": 1200,"description": "Laptops"}
/product POST = crear producto ejemplo body: {"name": "mac mini","price": 1200,"description": "Laptops"}

/ticket/read/:_id GET = revisar ticket individual
/ticket GET = todos ticket solo por revisión
/ticket DELETE = recibe body: {_id:'XX'}
/ticket POST = crear producto ejemplo body: {"productId": "XXX","amount": 500000,"paymentType": "Visa"}
/ticket/analytics = entrega de resultado.

![screen shot](https://drive.google.com/uc?export=view&id=18Ji5ptbSvKrjlqhaWEI8ekZYZdyfIO40)
## Installation

- Instalar dependencia

```
npm i
```
o
```
npm install
```

- Iniciar proyecto

```
npm start
```

## License 

Inlcuir la licéncia y el link a esta
[MIT](https://opensource.org/licenses/MIT)