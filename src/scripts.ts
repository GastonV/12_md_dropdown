const dropdown = document.querySelector(".js_dropdown");
const btn = document.querySelector(".button__dropdown");
const outsideScope = document.querySelector(".dropdown");

const createDropdownButton: HTMLElement[] = [];
const ahrefValues = [
              "Kaķis", 
              "Sašliks", 
              "All above",
];


ahrefValues.forEach((listitems)=>{
            let doc =    document.createElement("a");
            doc.textContent = listitems;
            doc.href = "#js";
            doc.classList.add("non");
            dropdown.appendChild(doc);
});


btn.addEventListener("click", () => {
  dropdown.classList.toggle("show");
  // if (dropdown.classList.contains("show")) {
  //   dropdown.classList.remove("show");
  // } else {
  //   dropdown.classList.add("show");
  // }
});

outsideScope.addEventListener("click", (event) => {
  if (event.target !== btn && event.target !== dropdown) {
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");

    }
  }
});

