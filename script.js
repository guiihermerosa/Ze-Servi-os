document.getElementById('search-btn').addEventListener('click', function() {
  const specialty = document.getElementById('specialty').value;
  if (specialty) {
      alert(`Buscando serviços para: ${specialty}`);
  } else {
      alert("Por favor, escolha uma especialidade.");
  }
});

const locationTabs = document.querySelectorAll('.location-tabs li');
locationTabs.forEach(tab => {
  tab.addEventListener('click', function() {
      locationTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
  });
});
