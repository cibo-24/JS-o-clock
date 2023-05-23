function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  

    const clockElement = document.getElementById('clock');
    clockElement.innerText = `${hours}:${minutes}:${seconds}`;
  }
  setInterval(updateClock, 1000);

  const name1 = prompt("Lütfen Adinizi ve Soyadinizi Giriniz:");
  console.log(name1);

  let middle = document.querySelector("div#middle>p");
  middle.innerHTML = `${middle.innerHTML}  ${name1} `;
 