function createGallowsContainer() {
  //gallows container
  const gallowsContainer = document.createElement("div");
  gallowsContainer.classList.add("gallows-container");

  const imgGallow = document.createElement("img");
  imgGallow.classList.add("gallows-image");
  imgGallow.setAttribute("src", "./assets/images/gallows.png");
  imgGallow.setAttribute("alt", "gallow-img");

  const containerPartBody = document.createElement("div");
  containerPartBody.classList.add("container__part-body-elements");

  //gallows container parts of body
  const headContainer = document.createElement("div");
  headContainer.classList.add("head-container");
  const headElement = document.createElement("div");
  headElement.classList.add("head-element");

  const bodyContainer = document.createElement("div");
  bodyContainer.classList.add("body-container");
  const leftHand = document.createElement("div");
  leftHand.classList.add("left-hand");
  leftHand.textContent = "/";
  const bodyElement = document.createElement("div");
  bodyElement.classList.add("body-element");
  const rightHand = document.createElement("div");
  rightHand.classList.add("right-hand");
  rightHand.textContent = "\\";

  const legsContainer = document.createElement("div");
  legsContainer.classList.add("legs-container");
  const leftLeg = document.createElement("div");
  const rightLeg = document.createElement("div");
  leftLeg.classList.add("left-leg");
  rightLeg.classList.add("right-leg");
  leftLeg.textContent = "/";
  rightLeg.textContent = "\\";

  // Append the containers to the body
  gallowsContainer.appendChild(imgGallow);
  gallowsContainer.appendChild(containerPartBody);
  containerPartBody.appendChild(headContainer);
  headContainer.appendChild(headElement);
  containerPartBody.appendChild(bodyContainer);
  bodyContainer.appendChild(leftHand);
  bodyContainer.appendChild(bodyElement);
  bodyContainer.appendChild(rightHand);
  containerPartBody.appendChild(legsContainer);
  legsContainer.appendChild(leftLeg);
  legsContainer.appendChild(rightLeg);

  return gallowsContainer;
}

export  {createGallowsContainer};
