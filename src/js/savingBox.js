import transformPriceForm from "./transformPriceForm";
import swal from "sweetalert";

const crName = document.querySelector(".saving_name");
const crPrice = document.querySelector(".saving_price");
const crColor = document.querySelector(".saving_color");

const savingBox = document.querySelector(".saving.inner");

const getTextColorByBackgroundColor = (hexColor) => {
  const c = hexColor.substring(1); // 색상 앞의 # 제거
  const rgb = parseInt(c, 16); // rrggbb를 10진수로 변환
  const r = (rgb >> 16) & 0xff; // red 추출
  const g = (rgb >> 8) & 0xff; // green 추출
  const b = (rgb >> 0) & 0xff; // blue 추출
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
  // 색상 선택

  // 글자색이
  if (luma < 127.5) return true;
  // white
  else return false; // black
};

export const setSavingBox = () => {
  crName.focus();
  if (!validation()) return false;
  else {
    createSavingBox();
    return true;
  }
};

const validation = () => {
  const nameValue = crName.value;
  const priceValue = crPrice.value;

  if (nameValue === "") {
    swal("저금통 이름을 적어주세요!", "어떤 물건을 갖고 싶으신 가요?");
    crName.focus();
    crName.focus();
    return false;
  } else if (priceValue === "") {
    swal("가격을 적어주세요!", "원하는 물건의 가격을 숫자로 적어주세요");
    crPrice.focus();
    return false;
  } else return true;
};

const createSavingBox = () => {
  savingBox.children[0].innerHTML += `
    <li>  
      <div class="slide">
        <div class="gauge" style="background-color: ${crColor.value}">
          <span ${
            getTextColorByBackgroundColor(crColor.value) && "class='white'"
          }>${crName.value}</span>
          <span ${
            getTextColorByBackgroundColor(crColor.value) && "class='white'"
          }>${transformPriceForm(Number(crPrice.value), "원")}</span>
        </div>
      </div>
    </li>
  `;
};

export const clear = () => {
  crName.value = "";
  crPrice.value = "";
  crColor.value = "#000000";
};

export default setSavingBox;
