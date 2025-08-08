function menu() {
  app.sheet.open('.menu-modal')
}

function closeMenu() {
  app.sheet.close('.menu-modal')
}

function closeShop() {
  app.sheet.close('.shop-modal')
}

function comprar(producto) {
  const inputProduct = document.getElementById('nameProduct');
  const inputUser = document.getElementById('msgUser');
  console.log(`Intentando comprar el Producto: ${producto}`);
  app.sheet.open('.shop-modal');
  inputProduct.value = producto;
  inputUser.value = '';
}

function compraEcha() {
    const producto = document.getElementById('nameProduct').value;
    const msg = document.getElementById('msgUser').value;
    const contact = document.getElementById('contact').value;
    app.sheet.close('.shop-modal')
    fetch('https://sheetdb.io/api/v1/1153h8kj2mku3', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: [
            {
                'Producto': producto,
                'Mensaje': msg,
                'Contacto': contact
            }
        ]
      })
  })
  .then((response) => response.json())
  .then((data) => console.log(data));

  }