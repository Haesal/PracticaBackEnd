# Práctica de Backend
En este repositorio se almacena nuestra solución de la práctica _Back-end_ de la materia de Desarrollo de aplicaciones web. Su descripción aparece a continuación:

## ¿Qué hay que hacer?
Realizar servicios *backend* que permitan agregar a una base de datos, ya sea no relacional o relacional, playlists de libros y canciones de manera no exclusiva, es decir, se podrá almacenar en una sola playlist tanto material de lectura como música. 

Se tiene que crear las cuatro operaciones CRUD, en concreto, nuestro enfoque fue el siguiente:
1. **CREATE** --> Seremos capaces de agregar un elemento, ya sea libro o canción. Dentro de este servicio, se verificará si el elemento dado cuenta con toda la información necesaria, de acuerdo a su tipo, para que se guarde correctamente en la base de datos. 
2. **READ** --> Seremos capaces de ver los elementos en particular de acuerdo a un cierto atributo del schema pasado en forma de _JSON query_. Es decir, este servicio reflejará la información solicitada de acuerdo a un JSON mandado.
3. **UPDATE** --> Seremos capaces de actualizar, a partir de un filtro (atributo de un elemento en particular) un cambio en específico. Para este servicio se tendría que mandar un JSON de la siguiente forma:
4. **DELETE** --> Seremos capaces de poder eliminar un elemento en particular dentro de la base de datos, este elemento será especificado a partir de su ID. 

## ¿Cómo verificar?
La verificación se tiene que hacer por medio de postman usando las siguientes rutas:

```console
# post para agregar un elemento --> 'localhost:8080/elemento/agregarElemento'
# get para obtener un elemento -->  'localhost:8080/elemento/obtenerElemento'
# post para actualizar un elemento -->  'localhost:8080/elemento/actualizarElemento'
# post para borrar un elemento -->  'localhost:8080/elemento/borrarElemento'
```

## ¿Cómo funciona?
Específicando cómo es que cada operación CRUD funciona, se ideo por operación una tabla que despliega la siguiente información:

Método      | JSON body  | Validaciones   | Errores   | Respuesta con error  | Respuesta sin error
----------- | ---------- | -------------- | --------- | -------------------  | --------------------
Contenido   | ```json``` | Contenido      | Contenido |  ```console```       |  ```console```
              
              
* **CREATE**

Método  | JSON body  | Validaciones   | Errores   | Respuesta con error  | Respuesta sin error
------- | ---------------------------- | -------------- | -------------- | --------------  | --------------
POST | `{ "tipo_elemento" : "Libro",`<br>`"nombre_elemento" : "Manifiesto del partido comunista",`<br>`"autor" : "Marx & Engels",`<br>`"fecha_creacion" : "febrero 21, 1848",`<br>`"editorial" : "Independently Published" }`| Las validaciones se hacen únicamente revisando si, por el tipo de elemento a agregar, se da toda la información. La validación de elementos se definió en el Schema usando validaciones de **mongoose** como _enum_, _maxLength_ o _minLength_. | Los errores que verificamos en controllers surgen de que no se haya dado toda la información. Se usa una validación _if_ del tipo `req.body.tipo_elemento == 'Libro'`. | `Type editorial cannot be undefined` | `Elemento registrado`

* **READ**

Método      | JSON body  | Validaciones   | Errores   | Respuesta con error  | Respuesta sin error
----------- | ---------- | -------------- | --------- | -------------------  | --------------------
GET   | `{ "tipo_elemento" : "Cancion"`<br> `"autor" : "Muse" }` | Las validaciones se hacen únicamente revisando si el elemento en la base de datos existe por medio de un query. | Los errores se verifican por medio de un _if_ del tipo `elem.length == 0`. | `There are no elements` |  `element`
              
* **UPDATE**

Método      | JSON body  | Validaciones   | Errores   | Respuesta con error  | Respuesta sin error
----------- | ---------- | -------------- | --------- | -------------------  | --------------------
POST   | `{ "filtro": { "_id": "61773908ee18c1c3495e7940", ` <br> `"tipo_elemento": "Libros", "nombre_elemento": "sdjfhs", ` <br> `"autor": "sdfsd", "fecha_creacion": "dshfsdfs", ` <br> `"editorial": "dsfkjsdkf", "__v": 0 }, ` <br> `"cambio": { "nombre_elemento": "Hola" } }` | Las validaciones se hacen únicamente revisando si el elemento en la base de datos existe por medio de un query. | Los errores se verifican por medio de un _if_ del tipo `elem.length == 0`. | `The element does not exist` |  `Cambio realizado`
              
* **DELETE**

Método      | JSON body  | Validaciones   | Errores   | Respuesta con error  | Respuesta sin error
----------- | ---------- | -------------- | --------- | -------------------  | --------------------
POST   | `{ "_id": "6177389537ab921a388c3b0b" }` | Las validaciones se hacen únicamente revisando si el elemento en la base de datos existe por medio de un query. | Los errores se verifican por medio de un _if_ del tipo `elem.length == 0`. | `The element does not exist` |  `Elemento eliminado`
              
## Screenshots de prueba

* **CREATE**
![create](https://user-images.githubusercontent.com/42308682/139518375-445e20e0-1ab3-449e-a82a-d2b0d150d600.jpeg)

* **READ**
![read](https://user-images.githubusercontent.com/42308682/139518378-918e08fc-2532-4876-aa2c-4178334ce41c.jpeg)

* **UPDATE**
![update](https://user-images.githubusercontent.com/42308682/139518383-c0e0c4ba-dcb8-44be-8bb3-78dc9bb9c5ac.jpeg)

* **DELETE**
![delete](https://user-images.githubusercontent.com/42308682/139518388-6cfc8fb7-2f4c-496a-b36c-91d125f37d65.jpeg)


