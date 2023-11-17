function hitungLuasKelilingSegitiga() { 
    var segi3_sisi1 = document.getElementById("segi3_sisi1").value;
    var segi3_sisi2 = document.getElementById("segi3_sisi2").value;
    var segi3_tinggi = document.getElementById("segi3_tinggi").value;
    var segi3_alas = document.getElementById("segi3_alas").value; 
    var segi3_luas = 0.5 * parseFloat(segi3_alas) * parseFloat(segi3_tinggi);
    var segi3_keliling = parseFloat(segi3_sisi1) + parseFloat(segi3_sisi2) + parseFloat(segi3_alas); 
    document.getElementById("segi3_luas").value = segi3_luas;
    document.getElementById("segi3_keliling").value = segi3_keliling; 
}


   function resetFormSegitiga() {
    document.getElementById("segi3_sisi1").value = "";
    document.getElementById("segi3_sisi2").value = "";
    document.getElementById("segi3_tinggi").value = "";
    document.getElementById("segi3_alas").value = "";
    document.getElementById("segi3_luas").value = "";
    document.getElementById("segi3_keliling").value = "";
  }