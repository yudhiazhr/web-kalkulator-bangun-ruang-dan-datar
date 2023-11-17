function hitungLuasKelilingLayang() { 
    var layang_sisi1 = document.getElementById("layang_sisi1").value;
    var layang_sisi2 = document.getElementById("layang_sisi2").value;
    var layang_d1 = document.getElementById("layang_d1").value; 
    var layang_d2 = document.getElementById("layang_d2").value; 
    var layang_luas = 0.5*parseFloat(layang_d1)*parseFloat(layang_d2); 
    var layang_keliling = (2*parseFloat(layang_sisi2))+(2*parseFloat(layang_sisi1)); 
    document.getElementById("layang_luas").value = layang_luas; 
    document.getElementById("layang_keliling").value = layang_keliling; 
}

function resetFormLayang() {
    document.getElementById("layang_sisi1").value = "";
    document.getElementById("layang_sisi2").value = "";
    document.getElementById("layang_d1").value = "";
    document.getElementById("layang_d2").value = "";
    document.getElementById("layang_luas").value = "";
    document.getElementById("layang_keliling").value = "";

  }