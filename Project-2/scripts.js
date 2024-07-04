const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please give a valid height`;
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please give a valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // Show the result
    results.innerHTML = `<span>Your BMI is ${bmi}</span>`;

    if (bmi < 18.5) {
      results.innerHTML += "<br>You are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      results.innerHTML += "<br>You have a normal weight.";
    } else if (bmi >= 25 && bmi <= 29.9) {
      results.innerHTML += "<br>You are overweight.";
    } else {
      results.innerHTML += "<br>You are obese.";
    }
  }
});
