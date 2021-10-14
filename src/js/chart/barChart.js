const numbers = Array.from({ length: 15 }, (v, i) => {
  return (i + 1) * 2;
});

const labels = numbers.map((i) => {
  if (String(i).length === 1) return (i = "0" + String(i));
  else return String(i);
});

const todayMonth = new Date().getMonth() + 1;

const setConfig = (expenditureInfoDays) => {
  const values = expenditureInfoDays
    .filter(
      (item) =>
        Number(item.date.substr(5, 2)) === todayMonth &&
        Number(item.date.substr(8, 2)) % 2 === 0
    )
    .map((item) => item.price);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "bar",
        backgroundColor: "#37C976",
        borderColor: "rgb(255, 99, 132)",
        data: values,
        barThickness: 5,
        borderRadius: 10,
      },
    ],
  };
  const config = {
    type: "bar",
    data: data,
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        yAxes: [
          {
            ticks: {
              min: 10000,
              max: 120000,
            },
          },
        ],
        x: {
          grid: {
            display: false,
          },
        },
      },
    },
  };

  return config;
};

export default setConfig;
