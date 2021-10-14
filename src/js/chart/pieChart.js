const setConfig = (categoryInfoData) => {
  const labels = categoryInfoData.map((item) => item.name);
  const values = categoryInfoData.map((item) => item.price);
  const data = {
    labels,
    datasets: [
      {
        label: "pie",
        data: values,
        backgroundColor: [
          "#9BC53D",
          "#235789",
          "#F58F29",
          "#FF4B3E",
          "#DB3069",
        ],
        borderWidth: 1,
        width: "100%",
      },
    ],
  };

  const config = {
    type: "doughnut",
    data: data,
    options: {
      plugins: {
        legend: {
          display: false,
        },
        tooltips: {
          enabled: false,
        },
      },
      scale: {
        ticks: {
          display: false,
        },
      },
    },
  };

  return config;
};

export default setConfig;
