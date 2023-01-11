/**
 * @type {NodeListOf<HTMLDivElement>}
 */
const fieldEls = document.querySelectorAll(".field");
/**
 * @type {HTMLFormElement}
 */
const formEl = document.querySelector(".form");

/**
 * Tắt Tooltip mặc định của browser khi set field required
 */
fieldEls.forEach((field) => {
  /** @type {HTMLInputElement | HTMLTextAreaElement} */
  const fieldItemEl = field.querySelector(".field__item");

  fieldItemEl.addEventListener("invalid", (event) => {
    /** @type {HTMLInputElement | HTMLTextAreaElement} */
    const el = event.target;
    // Đặt content " " thì sẽ tắt được tooltip mặc định của html
    el.setCustomValidity(" ");
  });

  fieldItemEl.addEventListener("input", (event) => {
    /** @type {HTMLInputElement | HTMLTextAreaElement} */
    const el = event.target;
    // Nếu không đặt lại thành "" khi nhập
    // thì khi bấm submit xong báo lỗi field
    // sau đó quay lại nhập đầy đủ thì nó cứ invalid mãi
    el.setCustomValidity("");
  });
});

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("OK");
});
