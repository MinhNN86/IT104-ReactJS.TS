type Callback = () => void;

function delayedCallback(callback: Callback, delay: number): void {
  setTimeout(() => {
    callback();
  }, delay);
}

delayedCallback(() => {
  console.log("Callback được gọi sau 1 giây");
}, 1000);
