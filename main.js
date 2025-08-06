function menu() {
  app.sheet.open('.menu-modal')
}

function closeMenu() {
  app.sheet.close('.menu-modal')
}

function comprar(producto) {
  console.log(`Intento de compra del Producto: ${producto}`)
  window.open(`https://wa.me/51987160920?text=Hola, me gustaría obtener más información del producto *${producto}*, además de saber ¿Cuáles medios de pago están disponibles?`, '_blank')
}