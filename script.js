// タブ離脱検知
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    alert("画面を離れました。テストは終了します。");
    document.body.innerHTML = "<h1>失格</h1>";
  }
});

// タイマー機能
let time = 180;
const countdown = setInterval(() => {
  if (time <= 0) {
    clearInterval(countdown);
    document.getElementById("question").innerHTML = "<h2>時間切れ！</h2>";
  } else {
    document.getElementById("timer").innerText = `${time}秒`;
    time--;
  }
}, 1000);
