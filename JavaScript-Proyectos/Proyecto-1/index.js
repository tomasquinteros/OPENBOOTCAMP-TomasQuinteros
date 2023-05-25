const input = document.getElementById("change-color");
const background = document.querySelector("div.background");
const colorValue = document.querySelector("span.color-value");


const valueDefault = input.value;
background.style.backgroundColor = `${valueDefault}`
colorValue.innerHTML = valueDefault


input.addEventListener("change", event => {
    const { value } = event.target
    background.style.backgroundColor =`${value}`;
    colorValue.innerHTML = value ? value : valueDefault;
})