let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let changeme = () => {
  intervalid = setInterval(() => {
    document.body.style.backgroundColor = getRandomColor();

    function getRandomColor() {
      const r = Math.floor(Math.random() * 256); // 0–255
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
    }
  }, 1000);
};

start.addEventListener('click', () => {
  changeme();
});
stop.addEventListener('click', () => {
  clearInterval(intervalid);
  intervalid = null;
});
