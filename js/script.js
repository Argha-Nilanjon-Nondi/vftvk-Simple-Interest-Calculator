let amount = document.getElementById("calculator-input-amount");
let rate = document.getElementById("calculator-input-rate");
let year = document.getElementById("calculator-input-year");
let result_box = document.getElementById("calculator-result");
let submit = document.getElementById("container-submit");
let show_rate = document.getElementById("calculator-interest-display");

function showRate() {
  show_rate.innerHTML = `${rate.value}%`;
  hideResult();
}

function showResult() {
  result_box.style.display = "block";
}

function hideResult() {
  result_box.style.display = "none";
}

hideResult();

show_rate.innerHTML = `${rate.value}%`;

function compute() {
  showResult();
  result_box.innerHTML = `<p>
            If you deposit <span class="calculator-highlight">${
              amount.value
            }</span><br />
            at an interest rate of
            <span class="calculator-highlight">${rate.value}%</span>.<br />
            You will receive an amount of
            <span class="calculator-highlight">${
              amount.value * (rate.value/100) * year.value
            }</span>,<br />
            in the year <span class="calculator-highlight">${year.value}</span>
          </p>`;
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if(Number(amount.value)<=0){
    alert("Please enter a positive number")
  }
  else{

  compute();
  }
});
