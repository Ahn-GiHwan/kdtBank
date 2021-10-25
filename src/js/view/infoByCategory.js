import transformPriceForm from "../function/transformPriceForm";

const infoByCategory = document.querySelector(".infoByCategory");
const sumAmount = document.querySelector(".sumAmount");

export const setInfoByCategory = (categoryInfoData) => {
  const nameDataByCategory = categoryInfoData.map((item) => item.name);
  const priceDataByCategory = categoryInfoData.map((item) => item.price);

  nameDataByCategory.map(
    (item, i) =>
      (infoByCategory.innerHTML += writeInfoByCategory(
        item,
        priceDataByCategory[i],
        i
      ))
  );
  const totalPrice = priceDataByCategory.reduce((a, b) => a + b, 0);
  sumAmount.innerHTML = transformPriceForm(totalPrice, "");
};

const categoryKo = (word) => {
  switch (word) {
    case "health":
      return "건강관리비";
    case "shopping":
      return "상점";
    case "mart":
      return "장보기";
    case "oiling":
      return "주유비";
    case "eatout":
      return "외식비";
    default:
      break;
  }
};

const writeInfoByCategory = (name, price) => {
  return `<li>
      <div class="categorys">
        <img
          src="./img/${name}.png"
          alt="${name}"
          class="${name} icon"
        />
        <p class="category">${categoryKo(name)}</p>
      </div>
      <p class="amount">${transformPriceForm(price, "원")}</p>
    </li>`;
};

export default setInfoByCategory;
