import transformPriceForm from "./transformPriceForm";

const days = document.querySelector(".days");
const daysInner = days.children[0];
const amount = document.querySelector(".amount");

const today = new Date();

const formatDate = (today) => {
  const formatted_date = `
  ${today.getFullYear()}${
    String(today.getMonth() + 1).length === 1
      ? "0" + (today.getMonth() + 1)
      : today.getMonth() + 1
  }${
    String(today.getDate()).length === 1
      ? "0" + today.getDate()
      : today.getDate()
  }`;
  return formatted_date;
};

export const setDayDetail = (data) => {
  if (data.length === 0)
    return (daysInner.innerHTML = `<div class="reloadBox"><span class="reload text">새로고침</span> <img src="../../assets/reload.png" alt="reload" class="reload icon" /></div>`);
  const filterDate = data
    .filter((item) => {
      const changeDate = item.date.split("-").join("");
      return Number(formatDate(today)) >= Number(changeDate);
    })
    .sort(
      (a, b) =>
        Number(b.date.split("-").join("")) - Number(a.date.split("-").join(""))
    );

  const currentAmount = filterDate.reduce((acc, cur) => {
    const income = cur.income;
    const price = cur.price;

    return income === "in" ? (acc += price) : (acc -= price);
  }, 0);

  amount.innerHTML = transformPriceForm(currentAmount);

  const totalPriceByDay = filterDate.reduce((acc, cur) => {
    const date = cur.date;
    const price = cur.price;
    const income = cur.income;
    const idx = acc.findIndex((item) => item.date === date);
    if (idx === -1) {
      if (income === "out") acc.push({ date, price });
      else acc.push({ date, price: -price });
    } else {
      if (income === "out") acc[idx].price += price;
      else acc[idx].price -= price;
    }
    return acc;
  }, []);

  console.log(totalPriceByDay);

  totalPriceByDay.forEach((item) => {
    writeDay(item, filterDate);
  });
};

const writeDay = (dayInfo, filterDate) => {
  const { date, price } = dayInfo;

  let customDate = "";
  if (Number(formatDate(today)) === Number(date.split("-").join(""))) {
    customDate = "오늘";
  } else if (
    Number(formatDate(today)) ===
    Number(date.split("-").join("")) + 1
  ) {
    customDate = "어제";
  } else if (
    Number(formatDate(today)) ===
    Number(date.split("-").join("")) + 2
  ) {
    customDate = "2일전";
  } else {
    let fakedate = date.split("-");
    fakedate.shift();
    customDate = fakedate.join("/");
  }

  daysInner.innerHTML += `
    <div class="day">
      <div class="day-title">
        <h2>${customDate}</h2>
        ${
          price < 0
            ? `<div class="amount">${transformPriceForm(
                Math.abs(price),
                "원"
              )} 수입</div>`
            : `<div class="amount">${transformPriceForm(
                price,
                "원"
              )} 지출</div>`
        }
        
      </div>
      <ol class="spendings"></ol>
    </div>
  `;

  const spendings = document.querySelectorAll(".spendings");

  const detailByday = filterDate.filter((item) => item.date === date);

  detailByday.forEach((item) => {
    spendings[spendings.length - 1].innerHTML += writeDetail(item);
  });
};
const writeDetail = (detail) => {
  return `
    <li>
      <p class="name">${detail.history}</p>
      ${
        detail.income === "in"
          ? `<p class="amount in">${transformPriceForm(
              Number(detail.price)
            )}</p>`
          : `<p class="amount">${transformPriceForm(Number(detail.price))}</p>`
      }
    </li>
  `;
};

export default setDayDetail;
