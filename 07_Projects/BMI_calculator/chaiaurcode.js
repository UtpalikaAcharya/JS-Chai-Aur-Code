const form = document.querySelector('form');

//this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e) {
  e.preventDefault(); // to stop the thing to go in url
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'Please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'Please give a valid weight';
  } else {
    const result1 = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span> ${result1}</span>`;
  }
});
