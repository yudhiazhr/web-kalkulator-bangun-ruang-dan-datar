function hitungLuasKelilingTrapesium() { 
    var trapesium_sisi1 = document.getElementById("trapesium_sisi1").value;
    var trapesium_sisi2 = document.getElementById("trapesium_sisi2").value;
    var trapesium_sisi3 = document.getElementById("trapesium_sisi3").value;
    var trapesium_tinggi = document.getElementById("trapesium_tinggi").value;
    var trapesium_alas = document.getElementById("trapesium_alas").value; 
    var trapesium_luas = (parseFloat(trapesium_alas)+parseFloat(trapesium_sisi3))*trapesium_tinggi/2; 
    var trapesium_keliling = parseFloat(trapesium_alas)+parseFloat(trapesium_sisi2)+parseFloat(trapesium_sisi1)+parseFloat(trapesium_sisi3); 
    document.getElementById("trapesium_luas").value = trapesium_luas; 
    document.getElementById("trapesium_keliling").value = trapesium_keliling; 
   }

   function resetFormTrapesium() {
    document.getElementById("trapesium_sisi1").value = "";
    document.getElementById("trapesium_sisi2").value = "";
    document.getElementById("trapesium_sisi3").value = "";
    document.getElementById("trapesium_tinggi").value = "";
    document.getElementById("trapesium_alas").value = "";
    document.getElementById("trapesium_luas").value = "";
    document.getElementById("trapesium_keliling").value = "";
  }