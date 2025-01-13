export function showMenu(){
  const buttons = document.querySelectorAll(".button-navigation");
  const contentWraps = document.querySelectorAll(".content-wrap");

  buttons.forEach((btn, indx) => {
    btn.addEventListener("click", () => {
      contentWraps.forEach((content) => {
        content.style.display = "none";
      });

      if (contentWraps[indx]) {
        contentWraps[indx].style.display = "flex";
      }

      buttons.forEach((button) => {
        button.classList.remove("active-button-nav");
      });

      btn.classList.add("active-button-nav");
    });
  });

  contentWraps.forEach((content, index) => {
    content.style.display = index === 0 ? "flex" : "none";
  });
};