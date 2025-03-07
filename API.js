function getLocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        document.getElementById("location").innerHTML =
          "Latitude: " +
          position.coords.latitude +
          "<br>" +
          "Longitude: " +
          position.coords.longitude;
      },
      (error) => {
        document.getElementById("location").innerText =
          "Error: " + error.message;
      }
    );
  } else {
    document.getElementById("location").innerText =
      "Geolocation is not supported by this browser.";
  }
}

let worker;

function startWorker() {
  if (window.Worker) {
    worker = new Worker("worker.js"); // Load worker script

    worker.onmessage = function (event) {
      document.getElementById("result").innerText = event.data;
    };

    worker.postMessage("Start");
  } else {
    alert("Your browser does not support Web Workers.");
  }
}
function stopworker() {
  if (worker) {
    worker.terminate(); // Stops the worker
    worker = null;
    document.getElementById("result").innerText = "Worker Stopped";
  }
}
function saveName() {
  let name = document.getElementById("username").value;
  if (name) {
    localStorage.setItem("savedName", name);
    document.getElementById("greeting").innerText = "Hello, " + name;
  }
}

function clearName() {
  localStorage.removeItem("savedName");
  document.getElementById("greeting").innerText = "";
}

// Show stored name when page loads
window.onload = function () {
  let savedName = localStorage.getItem("savedName");
  if (savedName) {
    document.getElementById("greeting").innerText = "Hello, " + savedName;
  }
};
