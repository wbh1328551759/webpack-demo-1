import x from "./x.js";
import png from "./assets/add.png";
console.log(x);
console.log(png);

const div = document.querySelector("#add");

const button = document.createElement("button");
button.innerHTML = "懒加载";
button.onclick = () => {
  const promise = import("./lazy");
  promise.then(
    (module) => {
      const fn = module.default;
      fn();
    },
    () => {}
  );
};

div.appendChild(button);
