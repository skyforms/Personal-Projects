document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("discount-form");
  const resultDiv = document.getElementById("result");
  const discountAmountP = document.getElementById("discount-amount");
  const totalAmountP = document.getElementById("total-amount");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const amount = parseFloat(document.getElementById("amount").value);
    const numSeniors = parseFloat(document.getElementById("num-seniors").value);
    const numPWDs = parseFloat(document.getElementById("num-pwds").value);
    const numShares = parseInt(document.getElementById("num-shares").value, 10);

    // Each senior citizen and PWD gets a 20% discount
    const totalDiscounted = numPWDs + numSeniors;
    if (totalDiscounted === 0) {
      discountAmountP.textContent = "No senior citizens or PWDs entered.";
      totalAmountP.textContent = `Total amount: ₱${amount.toFixed(2)}`;
      resultDiv.classList.remove("hidden");
      return;
    }

    const totalDiners = parseInt(
      document.getElementById("total-diners").value,
      10
    );

    if (totalDiscounted > totalDiners) {
      discountAmountP.textContent =
        "The number of senior citizens and PWDs cannot exceed the total number of diners.";
      totalAmountP.textContent =
        "Please check the number of senior citizens and PWDs.";
      resultDiv.classList.remove("hidden");
      return;
    }

    if (numShares > totalDiners) {
      discountAmountP.textContent =
        "Number of people sharing must be between 1 and total diners.";
      totalAmountP.textContent = "Please check the number of shares.";
      resultDiv.classList.remove("hidden");
      return;
    }

    const sharePerPerson = amount / numShares;
    const discountPerPerson = sharePerPerson * 0.2;
    const totalDiscount = discountPerPerson * totalDiscounted;
    const discountedTotal = amount - totalDiscount;

    discountAmountP.textContent = `Total Discount: ₱${totalDiscount.toFixed(
      2
    )}`;
    totalAmountP.textContent = `Total to pay after discount: ₱${discountedTotal.toFixed(
      2
    )}`;
    resultDiv.classList.remove("hidden");
  });

  form.addEventListener("reset", function () {
    resultDiv.classList.add("hidden");
  });

  const toggleDarkBtn = document.getElementById("toggle-dark");
  const darkIcon = document.getElementById("dark-icon");
  const darkLabel = document.getElementById("dark-label");

  toggleDarkBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    darkIcon.className = isDark ? "bi bi-sun" : "bi bi-moon";
    darkLabel.textContent = isDark ? "Light mode" : "Dark mode";
    toggleDarkBtn.classList.toggle("btn-dark", !isDark);
    toggleDarkBtn.classList.toggle("btn-light", isDark);
  });
});
