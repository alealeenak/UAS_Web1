document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formTransaksi");

  if (form) {
    form.addEventListener("submit", function (e) {
      const nama = document.getElementById("nama").value.trim();
      const jumlah = document.getElementById("jumlah").value.trim();
      const kategori = document.getElementById("kategori").value;

      if (nama === "" || jumlah === "" || kategori === "") {
        e.preventDefault();
        alert("Semua kolom harus diisi!");
      }
    });
  }
});
