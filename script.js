const tipForm = document.getElementById('tipForm');
    const billTotal = document.getElementById('billTotal');
    const tip = document.getElementById('tip');
    const tipPercentage = document.getElementById('tipPercentage');
    const tipAmount = document.getElementById('tipAmount');
    const totalWithTip = document.getElementById('totalWithTip');

    tipForm.addEventListener('input', function() {
        const billAmount = Number(billTotal.value);
        const tipValue = Number(tip.value);
        
        if (isNaN(billAmount) || isNaN(tipValue)) {
            alert('Please enter valid numbers.');
            var elements = document.getElementsByTagName("input");
            for (var ii=0; ii < elements.length; ii++) {
                if (elements[ii].type == "text") {
                    elements[ii].value = "";
                }
            }
            return;
        }

        const calculatedTip = (billAmount * tipValue) / 100;
        const totalBillWithTipValue = billAmount + calculatedTip;

        tipPercentage.value = `${tipValue}%`;
        tipAmount.value = `$${calculatedTip.toFixed(2)}`;
        totalWithTip.value = `$${totalBillWithTipValue.toFixed(2)}`;
    });