let offset = 0;
  window.addEventListener("scroll", function () {
    let st = window.pageYOffset;
    if (st > offset) {
      document.querySelector(".fa-arrow-up").classList.add("active");
    } else {
      document.querySelector(".fa-arrow-up").classList.remove("active");
    }
  });

/* */
const buttons = document.querySelectorAll('button');

  buttons.forEach(button => {
      button.addEventListener('click', () => {
          alert(`Anda akan diarahkan ke ${button.textContent}`);
      });
  });

/* */
function changeColor(element) {
    element.style.backgroundColor = "#fef9fb";
  }
  
function resetColor(element) {
    element.style.backgroundColor = "white";
  }


  