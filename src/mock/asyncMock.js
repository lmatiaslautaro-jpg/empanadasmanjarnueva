const productos = [
  {
    id: 1,
    name: 'Vacío y provoleta',
    price: 3000,
    category: 'Carnes',
    img: '🥟',
    stock: 20,
    description: 'Vacío asado con 5hs de cocción, finamente desmechado, combinación de provoleta con queso muzarella y vegetales asados.'
  },
  {
    id: 2,
    name: 'Cheeseburger',
    price: 3000,
    category: 'Carnes',
    img: '🥟',
    stock: 20,
    description: 'Blend de Roastbeef y Tapa de Asado, bacón crujiente, cebolla y mucho queso Cheddar.'
  },
  {
    id: 3,
    name: 'Carne al cuchillo',
    price: 3000,
    category: 'Carnes',
    img: '🥟',
    stock: 20,
    description: 'Corte de Cuadrada magro cortado a cuchillo, cebolla, morrón, huevo duro y un toque de sabor salteño.'
  },
  {
    id: 4,
    name: 'Carne picante',
    price: 3000,
    category: 'Carnes',
    img: '🥟',
    stock: 20,
    description: 'Corte de Paleta magro, cebolla, morrón, huevo duro, especias y ají picante.'
  },
  {
    id: 5,
    name: 'Carne suave',
    price: 3000,
    category: 'Carnes',
    img: '🥟',
    stock: 20,
    description: 'Corte de Paleta magro, cebolla, morrón, huevo duro y suavemente condimentado.'
  },
  {
    id: 6,
    name: 'Carne con aceitunas',
    price: 3000,
    category: 'Carnes',
    img: '🥟',
    stock: 20,
    description: 'Corte de Paleta magro, cebolla, morrón, aceitunas en rodajas y suavemente condimentado.'
  },
  {
    id: 7,
    name: 'Pollo',
    price: 3000,
    category: 'Pollo',
    img: '🥟',
    stock: 20,
    description: 'Corte de pechuga cocinado a fuego lento, huevo duro, cebolla caramelizada y un toque de salsas a base de especias.'
  },
  {
    id: 8,
    name: 'Pollo al champiñón',
    price: 3000,
    category: 'Pollo',
    img: '🥟',
    stock: 20,
    description: 'Pechuga de pollo, cebolla, morrón, verdeo, fusionada con salsa blanca y champiñones.'
  },
  {
    id: 9,
    name: 'Jamón y queso',
    price: 3000,
    category: 'Clásicas',
    img: '🥟',
    stock: 20,
    description: 'Jamón cocido con suave queso muzarella seleccionado.'
  },
  {
    id: 10,
    name: 'Calabresa',
    price: 3000,
    category: 'Clásicas',
    img: '🥟',
    stock: 20,
    description: 'Muzarella y longaniza a la calabresa con un ligero toque picantón.'
  },
  {
    id: 11,
    name: 'Jamón y huevo',
    price: 3000,
    category: 'Clásicas',
    img: '🥟',
    stock: 20,
    description: 'Jamón, huevo, muzarella y crematto de milkaut.'
  },
  {
    id: 12,
    name: 'Jamón, tomate y albahaca',
    price: 3000,
    category: 'Clásicas',
    img: '🥟',
    stock: 20,
    description: 'Jamón cocido, muzarella, tomates y albahaca fresca.'
  },
  {
    id: 13,
    name: 'Caprese',
    price: 3000,
    category: 'Vegetarianas',
    img: '🥟',
    stock: 20,
    description: 'Masa a base de espinaca con un relleno de queso muzarella seleccionado, tomates frescos y un toque de albahaca.'
  },
  {
    id: 14,
    name: 'Panceta y ciruela',
    price: 3000,
    category: 'Especiales',
    img: '🥟',
    stock: 20,
    description: 'Panceta ahumada, muzarella y ciruelas pasas sin carozo.'
  },
  {
    id: 15,
    name: 'Calabaza integral',
    price: 3000,
    category: 'Vegetarianas',
    img: '🥟',
    stock: 20,
    description: 'Masa integral con semillas, exquisito relleno de puré de calabaza, nuez moscada, azúcar, una pizca de sal y suave queso muzarella.'
  },
  {
    id: 16,
    name: 'Verduras',
    price: 3000,
    category: 'Vegetarianas',
    img: '🥟',
    stock: 20,
    description: 'Bechamel en vegetales, espinaca, queso sardo, cebolla y morrón.'
  },
  {
    id: 17,
    name: 'Salchicha y cheddar',
    price: 3000,
    category: 'Especiales',
    img: '🥟',
    stock: 20,
    description: 'Salchicha tipo Viena troceada cubierta de exquisitas fetas de queso cheddar que se derriten uniendo los sabores.'
  },
  {
    id: 18,
    name: 'Panceta y morrón',
    price: 3000,
    category: 'Especiales',
    img: '🥟',
    stock: 20,
    description: 'Panceta ahumada, queso muzarella seleccionado con trozos de morrón fresco.'
  },
  {
    id: 19,
    name: 'Jamón y roquefort',
    price: 3000,
    category: 'Especiales',
    img: '🥟',
    stock: 20,
    description: 'Intenso queso roquefort con delicioso jamón cocido seleccionado y queso muzarella.'
  },
  {
    id: 20,
    name: 'Jamón y provolone',
    price: 3000,
    category: 'Especiales',
    img: '🥟',
    stock: 20,
    description: 'Delicioso queso provolone con jamón cocido seleccionado.'
  },
  {
    id: 21,
    name: 'Queso y cebolla',
    price: 3000,
    category: 'Vegetarianas',
    img: '🥟',
    stock: 20,
    description: 'Perfecta unión de queso muzarella seleccionado con cebolla rehogada.'
  },
  {
    id: 22,
    name: 'Choclo',
    price: 3000,
    category: 'Vegetarianas',
    img: '🥟',
    stock: 20,
    description: 'Deliciosa mezcla entre choclo entero seleccionado, choclo cremoso, cebolla, morrón, nuez moscada y exquisito queso muzarella.'
  },
  {
    id: 23,
    name: 'Cuatro quesos',
    price: 3000,
    category: 'Vegetarianas',
    img: '🥟',
    stock: 20,
    description: 'Mezcla de exquisito queso muzarella seleccionado, queso sardo, provolone y roquefort intenso.'
  }
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos)
    }, 2000)
  })
}