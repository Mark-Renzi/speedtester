import { default as settings } from "./settings.ts";

const url =
  // `http://speedtest-${settings.location}.vocus.net:8080/download?&size=${settings.size}`;
  `https://${settings.location}.testmy.net/b/download?s=${settings.size}&st=st&test_type=download`;
console.log("starting infinite speedtest at " + url);
let i = 1;
setInterval(async () => {
  try {
    await fetch(url);
    console.log("success #" + i);
  } catch (err) {
    console.log(`error #${i}:`);
    console.log(err);
  } finally {
    i++;
  }
}, settings.frequency);
