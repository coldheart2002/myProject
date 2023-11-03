let toolTips = document.getElementsByClassName("toolTip");
let rightNavIconContainers = document.getElementsByClassName(
  "rightNavIconContainer"
);

for (let i = 0; i < rightNavIconContainers.length; i++) {
  rightNavIconContainers[i].addEventListener("mouseover", () => {
    toolTips[i].style.opacity = 1;
  });

  rightNavIconContainers[i].addEventListener("mouseout", () => {
    toolTips[i].style.opacity = 0;
  });
}
