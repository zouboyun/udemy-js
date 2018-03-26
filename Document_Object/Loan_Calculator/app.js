//define UI vars

const form = document.querySelector('#loan-form');
const calculate = document.querySelector('#calculate');


// load all event listeners

loadEventListerners();

// load all event listeners

function loadEventListerners() {
  form.addEventListener('keyup', calculateRate);
}

function calculateRate(e) {
  // UI variables for calculation
  const amount = document.querySelector('#amount');
  const downPayment = document.querySelector('#down-payment');
  const interestRate = document.querySelector('#interest-rate');
  const yearToRepay = document.querySelector('#years-to-repay');
  const monthlyPayment = document.querySelector('#monthly-payment');
  const totalPayment = document.querySelector('#total-payment');
  const totalInterest = document.querySelector('#total-interest');

  // create value vars
  const dp = parseFloat(downPayment.value); // parseFloat makes it a float type otherwise it will be string
  const principal = parseFloat(amount.value - dp);
  const calInterest = parseFloat(interestRate.value) / 100 / 12;
  const calFrequency = parseFloat(yearToRepay.value) * 12;
  
  // monthly payment
  const x = Math.pow(1 + calInterest, calFrequency);
  const p = calInterest * x * principal / (x - 1);


  monthlyPayment.value = p.toFixed(2); // set decimal place to be 2
  totalPayment.value = ((p * calFrequency) + dp).toFixed(2);
  totalInterest.value = ((p * calFrequency) - principal).toFixed(2);


  e.preventDefault();
}