function calculateEMI() {
  let principal = parseFloat(document.getElementById("principal").value);
  let time = parseFloat(document.getElementById("time").value);
  let rate = parseFloat(document.getElementById("rate").value);

  if (isNaN(principal) || isNaN(time) || isNaN(rate) || principal <= 0 || time <= 0 || rate <= 0) {
    alert("Please enter valid values!");
    return;
  }

  let monthlyRate = rate / (12 * 100); // Convert annual % rate to monthly decimal
  let months = time * 12; // Convert years to months

  let emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
  emi = emi.toFixed(2); // Round to 2 decimal places

  alert(`Your Monthly EMI: ₹${emi}`);
}


