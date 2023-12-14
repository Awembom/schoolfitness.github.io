// JavaScript code for the fitness dashboard

// Function to handle the click on sidebar items
function handleSidebarClick(event) {
    const sidebarItems = document.querySelectorAll('.sidebar li');
    
    // Remove the 'active' class from all sidebar items
    sidebarItems.forEach(item => {
      item.classList.remove('active');
    });
    
    // Add the 'active' class to the clicked item
    event.target.classList.add('active');
  }
  
  // Add event listeners to sidebar items
  const sidebarItems = document.querySelectorAll('.sidebar li');
  sidebarItems.forEach(item => {
    item.addEventListener('click', handleSidebarClick);
  });

  // Get the canvas element and create a chart context
const fitnessChartCanvas = document.getElementById('fitnessChart').getContext('2d');

// Sample data for the line chart
const fitnessData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Steps',
      data: [5000, 6000, 5500, 7000, 8000, 7500],
      backgroundColor: 'rgba(54, 162, 235, 0.2)', // Fill color under the line
      borderColor: 'rgba(54, 162, 235, 1)', // Line color
      borderWidth: 2,
    },
  ],
};

// Create the line chart
const fitnessLineChart = new Chart(fitnessChartCanvas, {
  type: 'line',
  data: fitnessData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1000, // Customize the step size on the y-axis
        },
      },
    },
  },
});