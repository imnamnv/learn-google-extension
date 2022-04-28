const nameInput = document.getElementById("name-input");
const saveBtn = document.getElementById("save-btn");
const timerInput = document.getElementById("timer-input");

saveBtn.addEventListener("click", () => {
  const name = nameInput.value ?? "NONAME";
  const notificationTime = timerInput.value;

  chrome.storage.sync.set({ name, notificationTime }, () => {
    // console.log("name", name);
  });
});

chrome.storage.sync.get(["name", "notificationTime"], (res) => {
  nameInput.value = res.name;
  timerInput.value = res.notificationTime ?? 100;
});
