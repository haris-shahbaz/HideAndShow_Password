function hideAndshowPass () {
    let inputpass = document.getElementById("password");
    let showPass = document.getElementById("hideAndshow");

    if (showPass.checked) {
        inputpass.type = "text";
    } else {
        inputpass.type = "password"; 
    }
}