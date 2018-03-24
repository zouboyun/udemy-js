//define UI vars

const form = document.querySelector('#loan-form');
const calculate = document.querySelector('#calculate');


// load all event listeners

loadEventListerners();

// load all event listeners

function loadEventListerners() {
  form.addEventListener('submit', calculateRate);
}

function calculateRate(e) {
  // UI variables for calculation
  const amount = document.querySelector('#amount');
  const interestRate = document.querySelector('#interest-rate');
  const yearToRepay = document.querySelector('#years-to-repay');
  const monthlyPayment = document.querySelector('#monthly-payment');
  const totalPayment = document.querySelector('#total-payment');
  const totalInterest = document.querySelector('#total-interest');
  e.preventDefault();
}