# MANJAR EMPANADAS 🥟

## Descripción

Manjar Empanadas es un proyecto de e-commerce desarrollado para un emprendimiento familiar dedicado a la elaboración y venta de empanadas.

El objetivo es crear una tienda online donde los clientes puedan conocer nuestros productos, consultar sus precios y realizar pedidos de manera sencilla.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- React 19
- Vite

## Funcionalidades

- Catálogo dinámico de empanadas.
- Visualización de nombres, precios y descripciones.
- Carga asincrónica de productos.
- Carrito de compras interactivo.
- Cálculo automático del total del pedido.
- Promoción de 3 salsas gratis por cada 12 empanadas.

## Carga asincrónica de productos

El proyecto utiliza una API simulada local para obtener los productos.

La función `getProducts()` devuelve una Promesa que se resuelve después de 2 segundos mediante `setTimeout`.

Se utilizan los hooks `useState` y `useEffect` para gestionar la carga de productos y actualizar la interfaz.

Los productos se muestran mediante los componentes `ItemListContainer`, `ItemList` e `Item`.

## Instalación

Clonar el repositorio:

    git clone https://github.com/lmatiaslautaro-jpg/empanadasmanjarnueva.git

Ingresar a la carpeta del proyecto:

    cd empanadasmanjarnueva

Instalar las dependencias:

    npm install

Iniciar el proyecto:

    npm run dev

## Autor

Matías - Proyecto académico de Desarrollo Web.