const form = document.querySelector(".login-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form disubmit");

  const formData = new FormData(this);

  fetch("https://wscsidoharjo.page.gd/registrasi.php", {
    method: "POST",
    body: formData,
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Server error");
      }
      return res.json();
    })
    .then((data) => {
      console.log("Respon dari PHP:", data);
      if (data.status === "success") {
        Swal.fire({
          icon: "success",
          title: "Registrasi Berhasil!",
          text: "Registrasi Berhasil",
          confirmButtonText: "OK",
          timer: 2000,
          didClose: () => {
            window.location.href = "../../component/page/login.html";
          },
        });

        this.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Username dipakai",
          text: "Silakan gunakan username yang lain",
          confirmButtonText: "OK",
        });
      }
    })
    .catch((err) => {
      console.error("Gagal kirim:", err);
      Swal.fire({
        icon: "error",
        title: "Terjadi kesalahan!",
        text: "Coba lagi nanti.",
        confirmButtonText: "Tutup",
      });
    });
});
