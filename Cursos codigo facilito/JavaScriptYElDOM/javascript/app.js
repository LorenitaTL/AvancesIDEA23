//Esta instrucción se utiliza cuando es necesario definir el script
//en el head del HTML
document.addEventListener("DOMContentLoaded", function () {
  console.log("EL DOM ya fue construido");
  /*------------------OBTENER ELEMENTOS--------------------- */
  //Obtener elementos por ID
  const title = document.getElementById("title");
  title.innerHTML = "Cursos";

  const description = document.getElementById("description");
  //description.innerHTML = "Lista de cursos";

  //Obtener elementos por Clase
  // const items = document.getElementsByClassName("list-group-item");
  // for (let i = 0; i < items.length; i++) {
  //     let element = items[i]
  //     console.log(element)

  // }

  //Obtener elementos por tipo de elemento
  // const items = document.getElementsByTagName("li");
  // for (let i = 0; i < items.length; i++) {
  //   if (i % 2 == 0) {
  //     let element = items[i];
  //     element.style.background ="#f2f2f2"
  //   }
  // }

  const items = document.querySelectorAll("li:nth-child(even)");
  for (let i = 0; i < items.length; i++) {
    if (i % 2 == 0) {
      let element = items[i];
      element.style.background = "#f2f2f2";
    }
  }

  const element = document.querySelector("div.row > ul.list-group > li");

  //Imprime el padre del elemento
  console.log(element.parentElement);

  //Imprime el abuelo del elemento
  console.log(element.parentElement.parentElement);

  //Imprime el hermano del elemento
  console.log(element.nextElementSibling);

  //Imprime el siguiente hermano del elemento
  console.log(element.nextElementSibling.nextElementSibling);

  const last_element = document.getElementById("last-course");

  //Imprime el hermano anterior
  //console.log(last_element.previousSibling);

  //NODOS
  const elemento = document.getElementById("first-course");
  //Imprime la cantidad de elementos hijos
  console.log(elemento.childElementCount);

  //Imprime la cantidad de contenido que tiene la etiqueta,
  //así sea solo texto o saltos de línea
  console.log(elemento.childNodes.length);

  /**---------------------ATRIBUTOS-------------------------- */
  const descriptionElement = document.getElementById("description");
  descriptionElement.textContent = "Listado de cursos";
  descriptionElement.innerHTML =
    "<strong>" + descriptionElement.textContent + "</strong>";

  //innerHTML imprime todo el contenido del elemento que se indica,
  //incluyendo las etiquetas que se encuentran dentro
  //Pertenece a un elemento
  console.log(descriptionElement.innerHTML);

  //textContent imprime solo el texto del ellemento, excluyendo etiquetas
  //Pertenece a un nodo
  console.log(descriptionElement.textContent);

  /**EVENTOS */

  const button = document.querySelector(".btn.btn-primary");

  //El evento addListener puede agregarse a cualquier elemento html
  // click, dblclick
  button.addEventListener("click", function (e) {
    //e.target almacena el elemento que dispara el evento
    if (title.style.display != "none") {
      title.style.display = "none";
      descriptionElement.style.display = "none";
      //button.textContent='Mostrar'
      //e.target.textContent = "Mostrar";
      this.textContent = "Mostrar";
    } else {
      title.style.display = "block";
      descriptionElement.style.display = "block";
      //button.textContent ="Ocultar"
      //e.target.textContent = "Ocultar";
      this.textContent = "Ocultar";
    }
  });

  //Eventos del mouse

  button.addEventListener("mouseenter", function () {
    this.className = "btn btn-danger";
  });

  button.addEventListener("mouseout", function () {
    this.className = "btn btn-primary";
  });

  //setTimeOut

  setTimeout(
    function (p1, p2, p3) {
      console.log(p1);
      console.log(p2);
      console.log(p3);
    },
    3000,
    "argumento1",
    "argumento2",
    "argumento3"
  );

  //Eventos del teclado
  const input = document.getElementById("title");

  title.addEventListener("keydown", function (e) {
    console.log("Tecla presionada: " + e.key + " con un código: " + e.keyCode);
  });

  //Evento submit
  //const form = document.getElementById("course-form");

  // form.addEventListener("submit", function (e) {
  //   //Evita que redireccione la página
  //   e.preventDefault();

  //   let titleForm = document.getElementById("title-form").value;
  //   let descriptionForm = document.getElementById("description-form").value;

  //   console.log(titleForm);
  //   console.log(descriptionForm);
  // });

  const checkbox = document.getElementById("checkbox");
  const title_form = document.getElementById("title-form");
  title_form.addEventListener("change", function () {
    console.log("Cambio de valor");
  });

  /**-------------PROPAGACION DE EVENTOS-------------- */
  const elem = document.querySelector("li");
  const list = document.querySelector("ul");
  const div_row = document.querySelector(".row");
  const div_container = document.querySelector(".container");
  const body = document.querySelector("body");

  // elem.addEventListener("click", show_messages);
  // list.addEventListener("click", show_messages);
  // div_row.addEventListener("click", show_messages);
  // div_container.addEventListener("click", show_messages);
  // body.addEventListener("click", show_messages);

  // for (let element of document.querySelectorAll("*")) {
  //   element.addEventListener("click", show_messages);
  // }

  //Detener propagación
  elem.addEventListener("click", function (e) {
    console.log("Click sobre el elemento");

    //DETENER PROPAGACION
    e.stopPropagation();
  });

  list.addEventListener("click", function () {
    console.log("Click sobre la lista");
  });

  /** ---------------MODIFICAR EL DOM------------------ */

  const row = document.querySelector(".row");
  const form = document.getElementById("course-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let title = document.getElementById("title-form").value;
    let description = document.getElementById("description-form").value;

    createCard(title, description, row);
  });
});

function show_messages(e) {
  console.log("Elemento actual " + this.tagName);
  console.log("Elemento que disparó el evento " + e.target.tagName);
}

let div = null;

function createCard(title, description, row) {
  div = document.createElement("div");
  div.className = "col-sm-6 col-md-4";

  let thumbnail = document.createElement("div");
  thumbnail.className = "thumbnail";

  let caption = document.createElement("div");
  caption.className = "caption";

  let h3 = document.createElement("h3");
  h3.textContent = title;
  let p1 = document.createElement("p");
  p1.textContent = description;

  let p2 = document.createElement("p");
  let a = document.createElement("a");
  a.className = "btn btn-danger";
  a.textContent = "Eliminar";

  p2.addEventListener("click", deleteCard(row));

  p2.appendChild(a);
  caption.appendChild(h3);
  caption.appendChild(p1);
  caption.appendChild(p2);

  thumbnail.appendChild(caption);
  div.appendChild(thumbnail);
  row.appendChild(div);
}

function deleteCard(row) {
  row.removeChild(div);
}

function createCardByInnerHTML(title, description, row) {
  let html = `
 <div class="col-sm-6 col-md-4">
          <div class="thumbnail">
            <div class="caption">
              <h3 id="title_card">${title}</h3>
              <p id="description_card">${description}</p>
              <p>
                <a href="" class="btn btn-danger">Acción</a>
              </p>
            </div>
          </div>
        </div>
 `;
  row.innerHTML += html;
}
