import express from "express";


import { dirname } from "path";
import  { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

function weekdayCheck() {
    const d = new Date();
    const day = d.getDay();
    var message;
    if (day === 0 || day === 6) {
        message = "Hey! It's a weekend, it's time to have fun!";
    } else {
        message = "Hey! It's a weekday, it's time to work hard!";
    };
    //console.log(message);
    return message;
}


app.get ("/", (req, res) => {
    var advice = weekdayCheck();
    res.render("index.ejs",
    {advice : advice}
    );
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });