# MANJAR EMPANADAS 🥟

## Descripción

Manjar Empanadas es un proyecto de e-commerce desarrollado para un emprendimiento familiar dedicado a la elaboración y venta de empanadas.

El objetivo es crear una tienda online donde los clientes puedan conocer los productos, consultar sus precios, agregarlos al carrito y realizar pedidos de manera sencilla.

El proyecto fue desarrollado utilizando React y Firebase para gestionar la autenticación de usuarios, los productos y los pedidos.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- React 19
- Vite
- React Router DOM
- Firebase Authentication
- Cloud Firestore
- Git
- GitHub

## Funcionalidades

- Catálogo dinámico de empanadas.
- Productos almacenados en Cloud Firestore.
- Visualización de nombres, categorías, precios y descripciones.
- Carga asincrónica de productos.
- Filtrado de productos por categoría.
- Navegación mediante React Router.
- Detalle dinámico de cada producto.
- Carrito de compras interactivo.
- Contador de productos en el carrito.
- Cálculo automático del total del pedido.
- Registro de usuarios.
- Inicio de sesión mediante Firebase Authentication.
- Cierre de sesión.
- Checkout protegido para usuarios autenticados.
- Formulario de datos del comprador.
- Creación de pedidos en Cloud Firestore.
- Generación automática de ID para cada pedido.
- Visualización del ID del pedido después de realizar la compra.
- Vaciamiento del carrito únicamente después de guardar correctamente el pedido.
- Página 404 para rutas inexistentes.
- Estados de carga y mensajes de error.

## Catálogo de productos

Los productos se almacenan en la colección `products` de Cloud Firestore.

Cada producto contiene información como:

```text
id
name
description
price
category
img
stock