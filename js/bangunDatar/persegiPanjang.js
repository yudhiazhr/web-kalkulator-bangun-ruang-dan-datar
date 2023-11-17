function hitungLuasKelilingPersegiPanjang() { 
    var pp_panjang = document.getElementById("pp_panjang").value; 
    var pp_lebar = document.getElementById("pp_lebar").value;
    var pp_luas = parseFloat(pp_lebar)*parseFloat(pp_panjang); 
    var pp_keliling = 2*parseFloat(pp_panjang)+2*parseFloat(pp_lebar); 
    document.getElementById("pp_luas").value = pp_luas; 
    document.getElementById("pp_keliling").value = pp_keliling; 
}

function resetFormPersegiPanjang() {
    document.getElementById("pp_panjang").value = "";
    document.getElementById("pp_lebar").value = "";
    document.getElementById("pp_luas").value = "";
    document.getElementById("pp_keliling").value = "";

  }