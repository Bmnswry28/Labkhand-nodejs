// ثبت صفحه ویزیت

const popup = document.getElementById("popup");
const btnPopup = document.getElementById("open-popup");

btnPopup.addEventListener("click", function () {
  if (popup.classList.contains("open_popup")) closePopup();
  else openPopup();
});

function openPopup() {
  popup.classList.add("open_popup");
}
function closePopup() {
  popup.classList.remove("open_popup");
}
