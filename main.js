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

console.log(document.getElementById("p2-1").clientWidth); // 200
console.log(document.getElementById("p2-2").clientWidth); // 220
console.log(document.getElementById("p2-3").clientWidth); // 260

// 漢字1文字に対してフリガナ2文字までは、スケール変化なし
// 3文字以上からは、フリガナ1文字で0.5漢字分の幅が増える
// 漢字1文字に対してフリガナが4文字であれば、漢字1文字分増える