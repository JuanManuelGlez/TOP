document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add('is-active');
    }
  
    function closeModal($el) {
      $el.classList.remove('is-active');
    }
  
    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }
  
    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);
      console.log($target);
  
      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });
  
    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');
  
      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });
  
    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      const e = event || window.event;
  
      if (e.keyCode === 27) { // Escape key
        closeAllModals();
      }
    });
  });

let carrito = new Array();

function ver_carrito() {
  document.getElementById("carrito").innerHTML = "";
  let total = 0;

  for (let i in carrito){
    document.getElementById("carrito").innerHTML += carrito[i].producto + " $" + carrito[i].precio +"<br>"
  }

  for (let i in carrito){
    total += carrito[i].precio;
  }
  document.getElementById("carrito").innerHTML += "------------------------ <br>";
  document.getElementById("carrito").innerHTML += "El total es: $" + total;


  
}

  document.getElementById("comprar_macanuda").onclick=() => {
    carrito.push({producto: "macanuda", precio: 50});
    ver_carrito();
  }

  document.getElementById("comprar_huracan").onclick=() => {
    carrito.push({producto: "huracan", precio: 75});
    ver_carrito();
  }

  document.getElementById("comprar_pajaro").onclick=() => {
    carrito.push({producto: "pajaro", precio: 80});
    ver_carrito();
  }