const pointHistoryData = [];

const pointHistoryList = document.getElementById("pointHistoryList");

function displayPointHistory(data) {
  pointHistoryList.innerHTML = "";

  if (data.length === 0) {
    pointHistoryList.innerHTML =
      '<div class="no-data-message">Riwayat Poin akan segera hadir...</div>';
    return;
  }

  data.forEach((item) => {
    const historyItemDiv = document.createElement("div");
    historyItemDiv.classList.add("history-item");

    historyItemDiv.innerHTML = `
                    <span>${item.description}</span>
                    <span class="points">+${item.points}</span>
                `;

    pointHistoryList.appendChild(historyItemDiv);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayPointHistory(pointHistoryData);
});
