const express = require("express");
const app = express();
const localPort = 3000;
const docType = `<!DOCTYPE html>`;
const siteAddress = `http://localhost:3000/`;
const bottleMsg = "Bottles of beer on the wall";
const passAround = "take one down, pass it around";

app.get(`/`, function (req, res) {
  res.send(
    `${docType}<p>99 ${bottleMsg}</p><a href="/98" title="${passAround}">${passAround}</a>`
  );
});

app.get(`/:number_of_bottles`, function (req, res) {
  let nextTotal;
  if (req.params.number_of_bottles > 0) {
    nextTotal = req.params.number_of_bottles - 1;
    res.send(
      `${docType}<p>${req.params.number_of_bottles} ${bottleMsg}</p><a href="/${nextTotal}" title="${passAround}">${passAround}</a><a href="/" title="Start Over">Start Over</a>`
    );
  }else{
    res.send(
      `${docType}<p>No more bottles of beer on the wall.</p>`
    );
  }
});

app.listen(localPort, () => {
  console.log(`listening on port ${localPort}`);
  console.log(siteAddress);
});
