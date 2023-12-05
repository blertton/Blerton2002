const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const list = document.getElementById("selectedValuesList");

function shuffleValues() {
  const checkboxContainer = document.querySelector("form");

  Array.from(checkboxes)
    .sort(() => Math.random() - 0.5)
    .forEach((checkbox) => {
      checkboxContainer.appendChild(checkbox.previousElementSibling);
      checkboxContainer.appendChild(checkbox);
    });
}

function changeValues() {
  checkboxes.forEach((checkbox, index) => {
    checkbox.value = `Option ${index + 1}`;
    checkbox.checked = false;
  });
}

function showSelectedValues() {
  const values = Array.from(checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  list.innerHTML = "";
  values.forEach((value) => {
    const items = document.createElement("li");
    items.textContent = value;
    list.appendChild(items);
  });
}