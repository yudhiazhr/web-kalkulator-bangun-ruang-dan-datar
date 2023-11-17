function hitungLuasKelilingJajarGenjang() { 
    var jg_alas = document.getElementById("jg_alas").value; 
    var jg_tinggi = document.getElementById("jg_tinggi").value; 
    var jg_luas = parseFloat(jg_alas)*parseFloat(jg_tinggi); 
    var jg_keliling = 2*(parseFloat(jg_alas)+parseFloat(jg_tinggi));
    document.getElementById("jg_luas").value = jg_luas; 
    document.getElementById("jg_keliling").value = jg_keliling;
}

function resetFormJajarGenjang() {
    document.getElementById("jg_alas").value = "";
    document.getElementById("jg_tinggi").value = "";
    document.getElementById("jg_luas").value = "";
    document.getElementById("jg_keliling").value = "";

  }

