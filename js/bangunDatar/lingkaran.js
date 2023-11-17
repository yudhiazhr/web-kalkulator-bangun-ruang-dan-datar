function hitungLuasKelilingLingkaran() { 
    var lingkaran_jari = document.getElementById("lingkaran_jari").value; 
    var lingkaran_luas = parseFloat(lingkaran_jari)*parseFloat(lingkaran_jari)*3.14; 
    var lingkaran_keliling = 3.14*(2*parseFloat(lingkaran_jari)); 
    document.getElementById("lingkaran_luas").value = lingkaran_luas; 
    document.getElementById("lingkaran_keliling").value = lingkaran_keliling; 
   }

   function resetFormLingkaran() {
    document.getElementById("lingkaran_jari").value = "";
    document.getElementById("lingkaran_luas").value = "";
    document.getElementById("lingkaran_keliling").value = "";

  }