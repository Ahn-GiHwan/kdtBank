// chart.js
import Chart from "chart.js/auto";

// reset-css
import "reset-css";

// style.css
import "../css/style.css";

// chart config
import barConfig from "./chart/barChart";
import pieConfig from "./chart/pieChart";

// view render
import setInfoByCategory from "./view/infoByCategory";
import setDayDetail from "./view/dayDetail";

// modal render & controll
import setSavingBox, { clear } from "./view/savingBox";

// Ajax
import fetchData from "./function/fetchData";

// swiper
import Swiper from "swiper";

import "swiper/css";

const barChart = document.querySelector("#barchart");
const pieChart = document.querySelector("#piechart");

const statusbar = document.querySelector(".statusbar");
const managePage = document.querySelector(".manage-page");

const total = document.querySelector(".total");
const details = document.querySelector(".details");

const modal = document.querySelector(".modal");
const swiper = document.querySelector(".swiper");
const URL = `https://syoon0624.github.io/json/test.json`;

const ajax = new XMLHttpRequest();

const state = {
  data: [],
};

window.addEventListener("click", (e) => {
  const elClassName = e.target.className;
  const el = e.target;

  // manage-page controll
  if (elClassName.includes("close") || elClassName.includes("opengraph")) {
    // mainPage.classList.toggle("off");
    managePage.classList.toggle("off");
    statusbar.classList.toggle("open");
    swiper.classList.toggle("off");
  }

  // io list size controll
  if (elClassName.includes("bar")) {
    total.classList.toggle("open");
    details.classList.toggle("open");
  }

  // savingBox open & close controll
  if (
    el.parentElement.className.includes("plusBox") ||
    elClassName.includes("exit") ||
    elClassName.includes("plusBox")
  ) {
    clear();
    modal.classList.toggle("on");
  }

  // savingBox create controll
  if (elClassName.includes("create")) {
    if (setSavingBox()) {
      modal.classList.toggle("on");
      clear();
    }
  }

  // reload button
  if (elClassName.includes("reload")) {
    location.href = location.href;
  }
});

window.addEventListener("keyup", (e) => {
  // modal exit
  if (e.key.includes("Escape")) {
    modal.classList.remove("on");
    clear();
  }
});

window.addEventListener("DOMContentLoaded", async () => {
  fetchData(URL).then((res) => (state.data = [...res.bankList]));
});

window.addEventListener("load", () => {
  const categoryInfoData = state.data
    .reduce((acc, cur) => {
      const classify = cur.classify;
      const price = cur.price;
      if (classify === "") return acc;
      const idx = acc.findIndex((item) => item.name === classify);

      if (idx === -1) {
        acc.push({ name: classify, price });
      } else {
        acc[idx].price += price;
      }

      return acc;
    }, [])
    .sort((a, b) => b.price - a.price);

  const expenditureInfoDays = state.data.reduce((acc, cur) => {
    const date = cur.date;
    const price = cur.price;
    const income = cur.income;
    const idx = acc.findIndex((item) => item.date === date);
    if (idx === -1) {
      if (income === "out") acc.push({ date, price });
      else acc.push({ date, price: 0 });
    } else {
      if (income === "out") acc[idx].price += price;
    }
    return acc;
  }, []);

  setInfoByCategory(categoryInfoData);
  setDayDetail(state.data);

  new Chart(barChart, barConfig(expenditureInfoDays));
  new Chart(pieChart, pieConfig(categoryInfoData));
  new Swiper(".swiper", {
    threshold: 100,
    edgeSwipeThreshold: 20,
    effect: "creative",
    creativeEffect: {
      prev: {
        translate: ["-20%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  });
});
