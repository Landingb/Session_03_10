//selectionner le bouton:
document.querySelector("#menu-button").addEventListener("click", () => {
  //Selectionner le menu
  const menuElement = document.querySelector("#menu");
  menuElement.className =
    menuElement.className == "menu-closed" ? "menu-opened" : "menu-closed";
});
