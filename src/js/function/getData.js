export const sendDate = (ajax, URL) => {
  ajax.open("GET", URL);
  ajax.send();
};

export default sendDate;
