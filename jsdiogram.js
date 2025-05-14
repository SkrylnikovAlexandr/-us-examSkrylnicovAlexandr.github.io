
    // --- Polar Area Chart ---
    const polarData = {
      labels: ['Доставка', 'Возврат', 'Отзывы', 'Поддержка', 'Оффтоп'],
      datasets: [{
        label: 'Темы',
        data: [120, 90, 200, 150, 75],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)'
        ]
      }]
    };

    new Chart(document.getElementById('polarChart'), {
      type: 'polarArea',
      data: polarData,
      options: {
        responsive: true,
        plugins: {
          legend: { labels: { color: '#333' } }
        }
      }
    });

    // --- Bar Chart: Full Week & Weekend Switch ---
    const barDataWeek = {
      labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
      datasets: [{
        label: 'Сообщения',
        data: [45, 60, 55, 80, 70, 95, 30],
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    };

    const barDataWeekend = {
      labels: ['Суббота', 'Воскресенье'],
      datasets: [{
        label: 'Сообщения',
        data: [95, 30],
        backgroundColor: 'rgba(255, 159, 64, 0.7)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1
      }]
    };

    const barCtx = document.getElementById('barChart').getContext('2d');
    let barChart = new Chart(barCtx, {
      type: 'bar',
      data: barDataWeek,
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: { color: '#333' }
          },
          x: {
            ticks: { color: '#333' }
          }
        },
        plugins: {
          legend: { labels: { color: '#333' } }
        }
      }
    });

    function showFullWeek() {
      barChart.data = barDataWeek;
      barChart.update();
    }

    function showWeekend() {
      barChart.data = barDataWeekend;
      barChart.update();
    }

    // --- Mixed Chart: Сообщения + Время ответа ---
    const mixedData = {
      labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
      datasets: [
        {
          type: 'bar',
          label: 'Сообщения',
          data: [45, 60, 55, 80, 70, 95, 30],
          backgroundColor: 'rgba(75, 192, 192, 0.7)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        },
        {
          type: 'line',
          label: 'Среднее время ответа (мин)',
          data: [15, 20, 18, 12, 17, 10, 22],
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'transparent',
          tension: 0.4,
          yAxisID: 'y1'
        }
      ]
    };

    new Chart(document.getElementById('mixedChart'), {
      type: 'bar',
      data: mixedData,
      options: {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false
        },
        scales: {
          y: {
            beginAtZero: true,
            position: 'left',
            ticks: { color: '#333' },
            title: {
              display: true,
              text: 'Количество сообщений',
              color: '#333'
            }
          },
          y1: {
            beginAtZero: true,
            position: 'right',
            grid: { drawOnChartArea: false },
            ticks: { color: '#333' },
            title: {
              display: true,
              text: 'Среднее время ответа (мин)',
              color: '#333'
            }
          },
          x: {
            ticks: { color: '#333' }
          }
        },
        plugins: {
          legend: { labels: { color: '#333' } }
        }
      }
    });
  