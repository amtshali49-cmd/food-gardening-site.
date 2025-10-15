// Chart - Yield per Vegetable
const ctx = document.getElementById('yieldChart').getContext('2d');
const yieldChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Spinach', 'Tomato', 'Carrot', 'Cabbage', 'Pepper'],
    datasets: [{
      label: 'Yield (kg/m²)',
      data: [3.2, 5.1, 2.8, 4.0, 2.6],
      backgroundColor: [
        '#81c784',
        '#ff8a65',
        '#4fc3f7',
        '#aed581',
        '#f06292'
      ]
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Yield Calculator
function calculateYield() {
  const area = parseFloat(document.getElementById('area').value);
  const density = parseFloat(document.getElementById('density').value);
  const yieldPerPlant = parseFloat(document.getElementById('yieldPerPlant').value);

  if (area && density && yieldPerPlant) {
    const totalYield = area * density * yieldPerPlant;
    document.getElementById('yieldResult').textContent = totalYield.toFixed(2);
  }
}

// Water Usage Estimator
function calculateWater() {
  const area = parseFloat(document.getElementById('area').value);
  const waterPerM2 = parseFloat(document.getElementById('waterPerM2').value);
  const days = parseInt(document.getElementById('daysWatered').value);

  if (area && waterPerM2 && days) {
    const totalLitres = area * waterPerM2 * days;
    document.getElementById('waterResult').textContent = totalLitres.toFixed(0);
  }
}

// Cost Estimator
function calculateCost() {
  const fertCost = parseFloat(document.getElementById('fertilizerCost').value);
  const fertQty = parseFloat(document.getElementById('fertilizerQty').value);
  const seedCost = parseFloat(document.getElementById('seedCost').value);
  const otherCost = parseFloat(document.getElementById('otherCost').value);

  if (fertCost && fertQty && seedCost && otherCost) {
    const totalCost = (fertCost * fertQty) + seedCost + otherCost;
    document.getElementById('costResult').textContent = `R${totalCost.toFixed(2)}`;
  }
}