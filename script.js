
function convert() {

    var celsius = document.getElementById("celsius").value;
    var fahrenheit = document.getElementById("fahrenheit").value;


    if (celsius != "") {

        var result = (celsius * 9) / 5 + 32;
        document.getElementById("fahrenheit").value = result.toFixed(2);
    } else if (fahrenheit != "") {

        var result = ((fahrenheit - 32) * 5) / 9;
        document.getElementById("celsius").value = result.toFixed(2);
    } else {

        document.getElementById("result").innerHTML = "Please enter a temperature to convert.";
    }
}
