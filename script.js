function submitProducts() {
  const selected = [];
  document.querySelectorAll('.product:checked').forEach(item => {
    selected.push(item.value);
  });

  localStorage.setItem('selectedProducts', JSON.stringify(selected));
  alert('Products saved!');
}

function goToPage2() {
  document.getElementById('page1').style.display = 'none';
  document.getElementById('page2').style.display = 'block';

  const products = JSON.parse(localStorage.getItem('selectedProducts')) || [];
  const list = document.getElementById('productList');
  list.innerHTML = '';

  products.forEach(product => {
    const li = document.createElement('li');
    li.textContent = product;
    list.appendChild(li);
  });
}

function goBack() {
  document.getElementById('page2').style.display = 'none';
  document.getElementById('page1').style.display = 'block';
}
