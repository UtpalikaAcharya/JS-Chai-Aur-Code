const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((item) => {
  console.log(item);
  item.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target);
    body.style.backgroundColor = event.target.id;

    // if (event.target.id === 'grey') {
    //   body.style.backgroundColor = event.target.id;
    // }
    // if (event.target.id === 'white') {
    //   body.style.backgroundColor = event.target.id;
    // }
    // if (event.target.id === 'blue') {
    //   body.style.backgroundColor = event.target.id;
    // }
    // if (event.target.id === 'yellow') {
    //   body.style.backgroundColor = event.target.id;
    // }
  });
});
