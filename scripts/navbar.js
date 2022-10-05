const navbar = document.querySelector("nav");

navbar.innerHTML = `
        <div>
          <svg id="menu-button" width="40" height="40" viewBox="0 0 512 512" fill="#5371C0">
            <rect x="23" y="220" width="463" height="73" rx="18" />
            <rect x="23" y="347" width="463" height="73" rx="18" />
            <rect x="23" y="93" width="463" height="73" rx="18" />
          </svg>
  
          <p>LOGO</p>
        </div>
        <ul id="menu" class="menu-closed">
          <li>
            <a href="/index.html">Acceuil</a>
          </li>
          <li>
            <a href="/personnages.html">Personnages</a>
          </li>
          <li>
            <a href="/animations.html">Animations</a>
          </li>
        </ul>
`;

//selectionner le bouton:
document.querySelector("#menu-button").addEventListener("click", () => {
  //Selectionner le menu
  const menuElement = document.querySelector("#menu");
  menuElement.className =
    menuElement.className == "menu-closed" ? "menu-opened" : "menu-closed";
});
