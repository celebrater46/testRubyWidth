"use strict";

let div = document.getElementById("box");

const encodeRuby = (line) => {
    if(line.indexOf("｜") > -1
        && line.indexOf("《") > -1
        && line.indexOf("》") > -1)
    {
        return line.replace(
            /｜(.*)《(.*)》/g,
            "<ruby><rb>$1</rb><rp>(</rp><rt>$2</rt><rp>)</rp></ruby>"
        );
    }
    return line;
}

const addLine = (str) => {
    const encoded = encodeRuby(str);
    // console.log(encoded);
    let p = document.createElement("p");
    p.innerHTML = encoded;
    div.appendChild(p);
    let scaleP = document.createElement("p");
    scaleP.innerText = p.clientWidth;
    div.appendChild(scaleP);
}

addLine("｜堕天男《ルシフアァー》");
addLine("｜堕天男《ルシフアアァー》");
addLine("｜堕天男《ルシフアアアルシフアアア》");