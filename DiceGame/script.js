function start() {
  console.log("Game started");
  document.getElementById("roll1").disabled = false;
  document.getElementById("restart").disabled = false;
  document.getElementById("start").disabled = true;
}

function restart() {
  window.location.reload();
}

function p1Play() {
  console.log("Player1Playing");
  let Score = Number(document.getElementById("p1Score").innerText);

  const DF = Math.floor(Math.random() * 6) + 1;
  if (DF == 6) {
    document.getElementById("roll1").disabled = true;
    document.getElementById("roll2").disabled = false;
  } else {
    Score = Score + DF;
    document.getElementById("p1Score").innerText = Score;
  }
}

function p2Play() {
  console.log("Player2Playing");
    let Score = Number(document.getElementById("p2Score").innerText);

    const DF = Math.floor(Math.random() * 6) + 1;

    if (DF == 6) {
      document.getElementById("roll1").disabled = false;
      document.getElementById("roll2").disabled = true;
    } else {
      Score = Score + DF;
      document.getElementById("p2Score").innerText = Score;
    }
  }

