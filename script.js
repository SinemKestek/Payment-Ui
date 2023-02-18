document.querySelector("#card-number-input").oninput = () => {
  document.querySelector(".card-number").innerText =
    document.querySelector("#card-number-input").value;
};

document.querySelector("#card-holder-input").oninput = () => {
  const holdName = document
    .querySelector("#card-holder-input")
    .value.toUpperCase();
  document.querySelector(".card-holder").innerText = holdName;
};

document.querySelector("#exMounth").oninput = () => {
  document.querySelector(".card-MM").innerText =
    document.querySelector("#exMounth").value;
};
document.querySelector("#exYear").oninput = () => {
  document.querySelector(".card-YY").innerText =
    document.querySelector("#exYear").value;
};

document.querySelector("#cvv").oninput = () => {
  document.querySelector(".cvv-box").innerText =
    document.querySelector("#cvv").value;
};
document.querySelector("#cvv").onmouseenter = () => {
  document.querySelector(".front").style.transform =
    "perspective(1000px) rotateY(-180deg)";
  document.querySelector(".back").style.transform =
    "perspective(1000px) rotateY(0deg)";
};
// mouseleave
document.querySelector("#cvv").onmouseleave = () => {
  document.querySelector(".front").style.transform =
    "perspective(1000px) rotateY(0deg)";
  document.querySelector(".back").style.transform =
    "perspective(1000px) rotateY(180deg)";
};
