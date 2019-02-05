const calcGrowth = (pastVal, currentVal) => (currentVal - pastVal) / pastVal *100;

const btcBought = document.querySelector(".price__input--bought");
const btcToday = document.querySelector(".price__input--now");
const btcAmount = document.querySelector(".investment__btc");
const calculate = document.querySelector(".investment__btn");
const result = document.querySelector(".result");

calculate.addEventListener("click", () => {
  const investment = btcAmount.value * btcBought.value;
  const current = btcAmount.value * btcToday.value;
  const profit = current - investment;
  // const profit = btcToday.value - btcBought.value;
  const growth = calcGrowth(investment, current);
  
let message = "";
  
if (profit > 0) {
  message = `Woah you made a profit of $${profit} (${growth}%).`;
  result.style.color = "green";
}
else if (profit < 0) {
  message = `whoops you have a loss of $${profit}(${growth}%).`;
  result.style.color = "red";
}
else if (profit === 0) { 
  message = "No difference";
}
  result.textContent = message;
  
});