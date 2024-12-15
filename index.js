// //1
// const result = _.add(2, 3);
// console.log(result);
// //2
// window.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     console.log("scroll event handler invocation every 300ms");
//   }, 300)
// );

// //3
// document.querySelector("input").addEventListener(
//   "input",
//   _.debounce(() => {
//     console.log(
//       "Input event handler invocation after 300ms of inactivity past burst."
//     );
//   }, 300)
// );
// // leading and trailing
// document.addEventListener(
//   "scroll",
//   _.debounce(
//     () => {
//       console.log("Scroll handler call on every event stream start");
//     },
//     300,
//     {
//       leading: true,
//       trailing: false,
//     }
//   )
// );
// На практиці режим leading може
// застосовуватись, наприклад, у разі,
// коли необхідно виконати функцію
// відправлення запиту на сервер при
// першому натисканні кнопки, після чого,
// ігнорувати всі наступні кліки до паузи.

// First task
const sliderInput = document.querySelector(".slider__input");
const sliderImage = document.querySelector(".slider__image");

function resizeImage(event) {
  const size = event.target.value;
  sliderImage.style.transform = `scale(${size / 50})`;
}

const debouncedResize = _.debounce(resizeImage, 100);

sliderInput.addEventListener("input", debouncedResize);

//second task
const box = document.getElementById("box");

function moveBox(event) {
  const { clientX, clientY } = event;
  box.style.transform = `translate(${clientX}px, ${clientY}px)`;
}

const debouncedMove = _.debounce(moveBox, 100);

document.addEventListener("mousemove", debouncedMove);
