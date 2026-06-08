
function fmt(m) {
  return "$"  + m.toLocaleString('en-US', { minimumFractionDigits: 2 });
}

const tipPcts = [5, 10, 12, 14, 15, 18, 20, 25, 30, 50];

function render() {
  const bill = parseFloat(document.getElementById('price1').value) || 0;
  const body = document.getElementById('tipbody');
  body.innerHTML = '';

  tipPcts.forEach((pct) => {
    const tip = bill * pct / 100;
    const total = bill + tip;

    const tr = document.createElement('tr');

    if (pct === 15) {
      tr.classList.add('highlight');
    }

    tr.innerHTML = `
      <td>${pct}%</td>
      <td>${fmt(tip)}</td>
      <td>${fmt(total)}</td>
    `;

    body.appendChild(tr);
  });
}

document.querySelector('.btn-calculate').addEventListener('click', render);

document.querySelector('.btn-clear1').addEventListener('click', function() {
  document.getElementById('price1').value = '';
  render();
});

render();

function calculate() {
  const bill = parseFloat(document.getElementById('price').value);
  const tipPct = parseFloat(document.getElementById('tip').value);
  const people = parseFloat(document.getElementById('people').value);

  if (!bill || isNaN(bill)) {
    alert('Price is required!');
    return;
  }

  const tip = bill * tipPct / 100;
  const total = bill + tip;
  const perPerson = total / people;

  document.getElementById('result-tip').textContent = fmt(tip);
  document.getElementById('result-total').textContent =  fmt(total);
  document.getElementById('result-shared').textContent = fmt(perPerson);
  document.querySelector('.result-section').style.display = 'block';
}

function clearAll() {
  document.getElementById('price').value = '';
  document.getElementById('tip').value = '15';
  document.getElementById('people').value = '1';
  document.querySelector('.result-section').style.display = 'none';
}

document.querySelector('.btn-calc').addEventListener('click', calculate);
document.querySelector('.btn-clear2').addEventListener('click', clearAll);


