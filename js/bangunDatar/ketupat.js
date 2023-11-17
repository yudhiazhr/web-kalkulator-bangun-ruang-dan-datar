function hitungLuasKelilingBelahKetupat() { 
    var ketupat_sisi = document.getElementById("ketupat_sisi").value;
    var ketupat_d1 = document.getElementById("ketupat_d1").value; 
    var ketupat_d2 = document.getElementById("ketupat_d2").value; 
    var ketupat_luas = 0.5*parseFloat(ketupat_d1)*parseFloat(ketupat_d2); 
    var ketupat_keliling = 4*parseFloat(ketupat_sisi); 
    document.getElementById("ketupat_luas").value = ketupat_luas;
    document.getElementById("ketupat_keliling").value = ketupat_keliling; 
}

function resetFormBelahKetupat() {
    document.getElementById("ketupat_sisi").value = "";
    document.getElementById("ketupat_d1").value = "";
    document.getElementById("ketupat_d2").value = "";
    document.getElementById("ketupat_luas").value = "";
    document.getElementById("ketupat_keliling").value = "";
  }