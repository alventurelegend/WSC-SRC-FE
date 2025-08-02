function displayEvent(data) {
  const EventSetCollection = document.getElementsByClassName("week-event");

  if (EventSetCollection.length === 0) {
    console.error("Elemen dengan class 'week-event' tidak ditemukan.");
    return;
  }

  const targetElement = EventSetCollection[0];

  targetElement.innerHTML = "";

  if (data.length === 0) {
    targetElement.innerHTML =
      '<div class="no-data-message" style="color:white;">Belum ada Event yang tersedia....</div>';
    return;
  }

  data.forEach((item) => {
    const eventSetting = document.createElement("div");
    eventSetting.classList.add("event");

    eventSetting.innerHTML = `
            <div class="top-event">
              <p id="idEvent">ID Chalengge : ${item.id}</p>
              <p id="pts">+${item.poin}</p>
            </div>
            <div class="item-event">
              <h2>${item.title}</h2>
              <p>${item.deskripsi}</p>
              <span>${item.date}</span>
            </div>
        `;

    targetElement.appendChild(eventSetting);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("https://wscsidoharjo.page.gd/geteventadmin.php")
    .then((res) => {
      if (!res.ok) throw new Error("Gagal mengambil data dari server");
      return res.json();
    })
    .then((data) => {
      console.log("Data dari server:", data);
      displayEvent(data);
    })
    .catch((err) => {
      console.error("Terjadi kesalahan:", err);
    });
});
