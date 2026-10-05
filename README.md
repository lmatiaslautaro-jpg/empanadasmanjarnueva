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
- React Router DOM

## Funcionalidades

- Catálogo dinámico de empanadas.
- Visualización de nombres, categorías, precios y descripciones.
- Carga asincrónica de productos.
- Filtrado de productos por categoría.
- Navegación mediante React Router.
- Detalle dinámico de cada producto.
- Carrito de compras interactivo.
- Contador de productos en el carrito.
- Cálculo automático del total del pedido.
- Promoción de 3 salsas gratis por cada 12 empanadas.
- Página 404 para rutas inexistentes.

## Carga asincrónica de productos

El proyecto utiliza una API simulada local para obtener los productos.

La función `getProducts()` devuelve una Promesa que se resuelve después de 2 segundos mediante `setTimeout`.

Se utilizan los hooks `useState` y `useEffect` para gestionar la carga de productos y actualizar la interfaz.

Los productos se muestran mediante los componentes `ItemListContainer`, `ItemList` e `Item`.

## Navegación con React Router

El proyecto utiliza `react-router-dom` para implementar la navegación interna del e-commerce sin recargar la página.

Las principales rutas son:

- `/` → Página de inicio y catálogo completo.
- `/category/:id` → Productos filtrados según la categoría.
- `/item/:id` → Detalle dinámico de un producto.
- `/cart` → Carrito de compras.
- `*` → Página 404 para rutas inexistentes.

Se utilizan `BrowserRouter`, `Routes`, `Route`, `NavLink` y `Link`.

El Navbar permanece visible en las diferentes rutas del sitio.

## Componentes principales

- `Navbar` → navegación principal y acceso al carrito.
- `CartWidget` → muestra la cantidad de productos del carrito.
- `ItemListContainer` → obtiene y filtra los productos.
- `ItemList` → renderiza el listado de productos.
- `Item` → muestra cada producto y permite acceder a su detalle.
- `ItemDetailContainer` → obtiene un producto mediante su ID.
- `ItemDetail` → muestra el detalle y contador de unidades.
- `ItemCount` → permite seleccionar la cantidad de productos.
- `Cart` → muestra y administra el carrito.
- `Home` → página principal del e-commerce.
- `Category` → página dinámica de categorías.
- `ItemDetailPage` → página dinámica de detalle.
- `NotFound` → página para rutas inexistentes.

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/lmatiaslautaro-jpg/empanadasmanjarnueva.git