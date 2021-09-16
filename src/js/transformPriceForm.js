export const transformPriceForm = (num, str = "원") => {
  // return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
  return num.toLocaleString("ko-KR") + str;
};

export default transformPriceForm;
