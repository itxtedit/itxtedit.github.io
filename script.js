const themeToggle = document.querySelector('#theme-toggle');


onload = setTheme();


function setTheme () {
  if (!localStorage.getItem("themeSetting")) {
    localStorage.themeSetting = "light";
  }
  const theme = localStorage.getItem("themeSetting");
  if (theme=="light") {
  document.querySelector("body").classList.remove("dark");
  themeToggle.innerHTML = 'GO DARK';
    themeToggle.addEventListener("click", change);
  } else if (theme=="dark") {
    document.querySelector("body").classList.add("dark");
    themeToggle.innerHTML = 'GO LIGHT';
    themeToggle.addEventListener("click", change);
  }
}

function change() {
  dark = localStorage.getItem("themeSetting");
  if (dark=="light") {
    localStorage.themeSetting = "dark";
    themeToggle.innerHTML = "GO LIGHT";
    setTheme();
  } else if (dark=="dark") {
   localStorage.themeSetting = "light";
    themeToggle.innerHTML = "GO DARK";
    setTheme();
  }
}



themeToggle.addEventListener("click", change);


const langSelect = document.querySelector('#lang-select');

const forWho = document.querySelector('#for-who');
const text = document.querySelector('#text');
const textTwo = document.querySelector('#text-two');
const langLabel = document.querySelector('#lang-label');


onload = setLanguage();
function setLanguage() {
  let lang = localStorage.getItem("language");
  if (!localStorage.getItem("language")) {
    localStorage.setItem("language", "en");
    } else {
    let lang = localStorage.getItem("language");
      if (lang == "en") {
      
  forWho.innerText = 'for Kashumy github';
    text.innerHTML = 'You created a repo named <a href="https://github.com/kashumy/itxtedit.github.io" target="_blank">itxtedit.github.io</a> so I have created a Github Pages site with the same URL as your repo name!';
    textTwo.innerHTML = 'Kashumy github maybe change repo name to <span style="font-size: 28px;">itxtedit</span>';
    langLabel.innerText = 'Language';
    
        let theme = localStorage.getItem("themeSetting");
      if (theme == "dark") {
        themeToggle.innerHTML = 'GO LIGHT';
      } else if (theme == "light") {
        themeToggle.innerHTML = 'GO DARK';
      }
        
}
      
    if (lang == "pl") {
      
      forWho.innerText = 'dla Kashumy github';
    text.innerHTML = 'Stworzyłeś repo o nazwie <a href="https://github.com/kashumy/itxtedit.github.io" target="_blank">itxtedit.github.io</a> więc stworzyłem stronę GitHub Pages z takim samym URL jak nazwa twojego repo!';
    textTwo.innerHTML = 'Kashumy github może zmień nazwę repo na <span style="font-size: 28px;">itxtedit</span>';
    langLabel.innerText = 'Język';
      
      let theme = localStorage.getItem("themeSetting");
      if (theme == "dark") {
        themeToggle.innerHTML = 'TRYB JASNY';
      } else if (theme == "light") {
        themeToggle.innerHTML = 'TRYB CIEMNY';
      }
    
    
      
    }
    
  }
  
  if (lang=="en") {
    langSelect.value = 'eng';
  } else if (lang=="pl") {
    langSelect.value = 'pol';
  }
  
}

langSelect.addEventListener("change", e => {
  console.log(langSelect.value);
  if (langSelect.value == "eng") {
    localStorage.setItem("language", "en");
    setLanguage();
  } else if (langSelect.value == "pol") {
    localStorage.setItem("language", "pl");
    setLanguage();
  }
  
});

themeToggle.addEventListener("click", e => {
  setLanguage();
})