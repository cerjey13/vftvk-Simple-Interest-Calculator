
// function to update the value of the interest rate
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}

// function to compute
function compute(){
    document.getElementById("result").innerText = '';
    var principal = document.getElementById("principal").value;
    if (principal <= 0){        // validate if the amount is not 0 or less
        alert('Enter a positive number');
        document.getElementById("principal").value = '';
        document.getElementById("principal").focus();
        return;
    }
    var rate = document.getElementById("rate").value;       // make the calculations of the interest
    var years = document.getElementById("years").value;
    var interest = (principal * years * rate) / 100;
    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML = "<br/><br/><span>If you deposit <mark>" +  principal + "</mark>,<br/> at an interest rate of <mark>" + rate + "</mark>.<br/>You will recive an amount of <mark>" + interest + "</mark>,<br/>in the year <mark>" + year + "</mark></span>";     // print the result in the html
}
        