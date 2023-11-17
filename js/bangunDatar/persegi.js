function hitungKelilingLuasPersegi() {
    var sisi = document.getElementById("persegi_sisi").value;
    var p_luas = parseFloat(sisi) * parseFloat(sisi);
    var p_keliling = 4 * parseFloat(sisi);
    document.getElementById("persegi_luas").value = p_luas;
    document.getElementById("persegi_keliling").value = p_keliling;
}

  function resetFormPersegi() {
    document.getElementById("persegi_luas").value = "";
    document.getElementById("persegi_keliling").value = "";
    document.getElementById("persegi_sisi").value = "";
  }