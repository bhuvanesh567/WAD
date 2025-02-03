function calculateVehicleLoan() {
    let dob = document.getElementById("dob").value;
    let principal = parseFloat(document.getElementById("principal").value);
    let time = parseFloat(document.getElementById("time").value);
    let rate = parseFloat(document.getElementById("rate").value);

    // Check if DOB is valid and age is >= 18
    if (!dob) {
      alert("Please enter your Date of Birth!");
      return;
    }

    let birthDate = new Date(dob);
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();

    // Adjust age if birth month hasn't passed
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    if (age < 18) {
      alert("You must be at least 18 years old to apply for a loan.");
      return;
    }

    // Validate loan inputs
    if (isNaN(principal) || isNaN(time) || isNaN(rate) || principal <= 0 || time <= 0 || rate <= 0) {
      alert("Please enter valid loan details!");
      return;
    }

    // EMI Calculation Formula
    let monthlyRate = rate / (12 * 100); // Convert annual rate to monthly
    let months = time * 12; // Convert years to months

    let emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    emi = emi.toFixed(2); // Round to 2 decimal places

    alert(`Age Verified: ${age} years ✅\nYour Monthly EMI: ₹${emi}`);
  }