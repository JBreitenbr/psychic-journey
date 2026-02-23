function multiplyNode(node, count, deep) {
   for (let i = 0, copy; i < count - 1; i++) {
        copy = node.cloneNode(deep);
        node.parentNode.insertBefore(copy, node);
    }
}
for(let i=1;i<3;i++){
if(window.innerWidth<400){
multiplyNode(document.querySelector(`#pic${i}`), 10, true);
}
else { multiplyNode(document.querySelector(`#pic${i}`),Math.floor(window.innerWidth/50)-1,true);
     };
  };

document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll("[data-scene-toggle]");

  toggles.forEach((button) => {
    const card = button.closest(".scene-card");
    const body = card.querySelector("[data-scene-body]");

    button.addEventListener("click", () => {
      const expanded = body.classList.toggle("is-expanded");
      button.classList.toggle("is-expanded", expanded);
      button.textContent = expanded ? "Weniger anzeigen" : "Mehr anzeigen";
    });
  });
});
