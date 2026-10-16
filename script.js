const marketValueInput = document.getElementById("marketValue");
const formulaDiv = document.getElementById("formula");
const resultDiv = document.getElementById("result");

// Automatically compute and update display on input typing
marketValueInput.addEventListener("input", function() {
    const val = this.value;
    
    if (val.trim() === "" || isNaN(parseFloat(val))) {
        formulaDiv.innerHTML = `Market Value × 1% × 55% <br><span style="font-size: 14px; font-weight: normal; color: #555;">(Rounded to nearest ₱10)</span>`;
        resultDiv.textContent = "₱0.00";
    } else {
        const numericVal = parseFloat(val);
        
        if (numericVal < 0) {
            formulaDiv.innerHTML = `Market Value × 1% × 55% <br><span style="font-size: 14px; font-weight: normal; color: #555;">(Rounded to nearest ₱10)</span>`;
            resultDiv.textContent = "₱0.00";
            return;
        }

        // Update formula text with formatted input
        const formattedVal = Number(numericVal).toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        formulaDiv.innerHTML = `${formattedVal} × 1% × 55% <br><span style="font-size: 14px; font-weight: normal; color: #555;">(Rounded to nearest ₱10)</span>`;

        // Compute: Market Value × 1% × 55%
        const calculatedValue = numericVal * 0.01 * 0.55;

        // Round final result to nearest ₱10
        const roundedValue = Math.round(calculatedValue / 10) * 10;

        // Display result automatically with 2 decimal places
        resultDiv.textContent = "₱" + roundedValue.toLocaleString("en-PH", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }
});

function clearCalculator() {
    marketValueInput.value = "";
    formulaDiv.innerHTML = `Market Value × 1% × 55% <br><span style="font-size: 14px; font-weight: normal; color: #555;">(Rounded to nearest ₱10)</span>`;
    resultDiv.textContent = "₱0.00";
}