// Chart JS
var ctx = document.getElementById("myChart").getContext("2d");

var myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [23, 7],
        label: "75%",
        backgroundColor: ["rgba(201, 176, 94, 0.2)", "rgba(255, 255, 255, 1)"],
        borderColor: ["rgba(201, 176, 94, 1)", "rgba(255, 255, 255, 1)"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {},
    cutout: 40,
    elements: {
      center: {
        text: "Red is 2/3 of the total numbers",
        color: "#FF6384", // Default is #000000
        fontStyle: "Arial", // Default is Arial
        sidePadding: 20, // Default is 20 (as a percentage)
        minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
        lineHeight: 25, // Default is 25 (in px), used for when text wraps
      },
    },
  },
});
