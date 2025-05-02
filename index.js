const pilot = {
    main: document.getElementById("pilot"),
    li: document.getElementById("pilotLi")
  };
  const lore = {
  main: document.getElementById("lore"),
  //   li: document.getElementById("loreLi")
  };
  const conceptArt = {
  main: document.getElementById("conceptArt"),
  //   li: document.getElementById("conceptArtLi")
  };
  const languages = {
  main: document.getElementById("languages"),
  //   li: document.getElementById("languagesLi")
  }
  
  setupDropdown(pilot);
  setupDropdown(lore);
  setupDropdown(conceptArt);
  setupDropdown(languages);
  
  function setupDropdown(ID){
    ID.main.addEventListener("mouseover", function (){ colorChange(ID.main, "green");})
    ID.main.addEventListener("mouseout", function (){ colorChange(ID.main, "#e6d7a1");})
    ID.main.addEventListener("click", function (){ dropDown(ID.main);})
    ID.li.style.display = "block";
    ID.main.isOn = false;
  }
  
  function colorChange(ID, color){
    ID.main.style.color = color;
  }
  
  function dropDown(ID){
    if(ID.isOn){
    ID.main.innerHTML = ID.innerHTML.replace("⮝", "⮟");
    ID.li.style.display = "block";
    ID.isOn = false;
    } else {
    ID.main.innerHTML = ID.innerHTML.replace("⮟", "⮝"); 
        ID.li.style.display = "none";
    ID.main.isOn = true;
    }
  }