function hitungLuas() {
    var sisiLuas = document.getElementById("sisi-luas").value;
    
    document.getElementsByClassName("result-luas").style.visibility="visible";
    console.log(sisiLuas);
    document.getElementById("output_luas").innerHTML = '<span>' +sisiLuas+ '</span>'
}