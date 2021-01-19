function isIE() {
    let ua = navigator.userAgent;
    return ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
}
if (isIE()){
    alert('Внимание!\nВы используете истаревший браузер.\nСтраница будет отражена некорректно.');
}

let json;
let noTitleSvg = `<svg width="70" height="20" viewBox="0 0 70 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.2333 20C14.6809 19.3631 13.8736 18.259 12.8113 16.6879C11.749 15.0743 10.6655 13.4607 9.56067 11.8471C8.49837 13.9278 7.41483 15.7749 6.31004 17.3885C5.20525 18.9597 4.10046 19.7452 2.99567 19.7452C3.71804 18.6837 4.29168 17.7495 4.7166 16.9427C5.184 16.0934 5.60892 15.2442 5.99135 14.3949C6.37378 13.5032 6.81994 12.5053 7.32984 11.4013C5.41771 11.4013 3.76053 11.2951 2.3583 11.0828C0.998559 10.828 0.212459 10.2335 0 9.29936C1.0623 9.21444 2.16708 9.15074 3.31436 9.10828C4.46164 9.06582 5.84263 9.02335 7.45732 8.98089C6.56499 7.49469 5.82138 6.11465 5.2265 4.84077C4.6741 3.52442 4.39791 2.46285 4.39791 1.65605C4.39791 1.27389 4.50414 0.955415 4.7166 0.700639C4.92905 0.44586 5.12027 0.212314 5.29024 0C6.05509 1.61359 6.73496 3.05733 7.32984 4.33121C7.96722 5.6051 8.73207 6.92145 9.6244 8.28026C10.6017 6.19958 11.494 4.39491 12.3014 2.86624C13.1087 1.29512 14.2348 0.339703 15.6795 0C15.2971 1.06157 14.6809 2.39915 13.8311 4.01274C13.0238 5.58387 12.2164 7.23992 11.4091 8.98089C12.2589 8.93843 13.2362 8.89597 14.341 8.8535C15.4458 8.81104 16.5081 8.9172 17.5279 9.17198C18.5902 9.38429 19.4825 9.87261 20.2049 10.6369L11.919 11.4013C12.4289 12.1656 12.9388 12.9299 13.4487 13.6943C13.9586 14.4161 14.3835 15.2866 14.7234 16.3057C15.0634 17.2824 15.2333 18.5138 15.2333 20Z" fill="#DDB97D"/>
                <path d="M40.1309 20C39.5785 19.3631 38.7711 18.259 37.7089 16.6879C36.6466 15.0743 35.563 13.4607 34.4582 11.8471C33.3959 13.9278 32.3124 15.7749 31.2076 17.3885C30.1028 18.9597 28.998 19.7452 27.8932 19.7452C28.6156 18.6837 29.1892 17.7495 29.6142 16.9427C30.0816 16.0934 30.5065 15.2442 30.8889 14.3949C31.2713 13.5032 31.7175 12.5053 32.2274 11.4013C30.3153 11.4013 28.6581 11.2951 27.2559 11.0828C25.8961 10.828 25.11 10.2335 24.8976 9.29936C25.9599 9.21444 27.0646 9.15074 28.2119 9.10828C29.3592 9.06582 30.7402 9.02335 32.3549 8.98089C31.4626 7.49469 30.7189 6.11465 30.1241 4.84077C29.5717 3.52442 29.2955 2.46285 29.2955 1.65605C29.2955 1.27389 29.4017 0.955415 29.6142 0.700639C29.8266 0.44586 30.0178 0.212314 30.1878 0C30.9527 1.61359 31.6325 3.05733 32.2274 4.33121C32.8648 5.6051 33.6296 6.92145 34.522 8.28026C35.4993 6.19958 36.3916 4.39491 37.199 2.86624C38.0063 1.29512 39.1323 0.339703 40.5771 0C40.1946 1.06157 39.5785 2.39915 38.7287 4.01274C37.9213 5.58387 37.114 7.23992 36.3066 8.98089C37.1565 8.93843 38.1338 8.89597 39.2386 8.8535C40.3433 8.81104 41.4056 8.9172 42.4254 9.17198C43.4877 9.38429 44.3801 9.87261 45.1024 10.6369L36.8165 11.4013C37.3264 12.1656 37.8363 12.9299 38.3462 13.6943C38.8561 14.4161 39.2811 15.2866 39.621 16.3057C39.9609 17.2824 40.1309 18.5138 40.1309 20Z" fill="#DDB97D"/>
                <path d="M65.0285 20C64.4761 19.3631 63.6687 18.259 62.6064 16.6879C61.5441 15.0743 60.4606 13.4607 59.3558 11.8471C58.2935 13.9278 57.21 15.7749 56.1052 17.3885C55.0004 18.9597 53.8956 19.7452 52.7908 19.7452C53.5132 18.6837 54.0868 17.7495 54.5117 16.9427C54.9791 16.0934 55.404 15.2442 55.7865 14.3949C56.1689 13.5032 56.6151 12.5053 57.125 11.4013C55.2128 11.4013 53.5557 11.2951 52.1534 11.0828C50.7937 10.828 50.0076 10.2335 49.7951 9.29936C50.8574 9.21444 51.9622 9.15074 53.1095 9.10828C54.2568 9.06582 55.6378 9.02335 57.2524 8.98089C56.3601 7.49469 55.6165 6.11465 55.0216 4.84077C54.4692 3.52442 54.193 2.46285 54.193 1.65605C54.193 1.27389 54.2993 0.955415 54.5117 0.700639C54.7242 0.44586 54.9154 0.212314 55.0854 0C55.8502 1.61359 56.5301 3.05733 57.125 4.33121C57.7623 5.6051 58.5272 6.92145 59.4195 8.28026C60.3968 6.19958 61.2892 4.39491 62.0965 2.86624C62.9039 1.29512 64.0299 0.339703 65.4746 0C65.0922 1.06157 64.4761 2.39915 63.6262 4.01274C62.8189 5.58387 62.0115 7.23992 61.2042 8.98089C62.054 8.93843 63.0313 8.89597 64.1361 8.8535C65.2409 8.81104 66.3032 8.9172 67.323 9.17198C68.3853 9.38429 69.2776 9.87261 70 10.6369L61.7141 11.4013C62.224 12.1656 62.7339 12.9299 63.2438 13.6943C63.7537 14.4161 64.1786 15.2866 64.5185 16.3057C64.8585 17.2824 65.0285 18.5138 65.0285 20Z" fill="#DDB97D"/>
            </svg>`;

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

function shuffle(arr) {
    let j, temp;
    for (let i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

$.getJSON("json/lyrics.json", function (data) {
    json = data;
    let jsonFileVersion = Object.keys(data).toString();
    if (localStorage.getItem("version") === jsonFileVersion) {
        console.log("relative version");
    } else {
        console.log("old version - ", localStorage.getItem("version"));
        localStorage.setItem("version", jsonFileVersion);
        console.log("new version - " + localStorage.getItem("version"));

        let newArr = [];
        for (let i = 0; i < Object.keys(data[jsonFileVersion]).length; i++) {
            newArr.push(i);
        }
        let shuffledArr = shuffle(newArr);
        console.log("new shuffled arr: ", shuffledArr);
        localStorage.setItem("queue", JSON.stringify(shuffledArr));
        localStorage.setItem("nowIndex", "0");
    }
})
    .then(r => {
    console.log("success get json");

    delay(4200).then(() => {
        $("#main").css("transform", "translateY(0)")
    }).then(() => {
        fadeOut("#poem-title");
        fadeOut("#poem-text");
        delay(500).then(() => {
            updateHtml();
            fadeIn("#poem-title");
            fadeIn("#poem-text");
        })
    })
});

function changeIndex() {
    if (parseInt(localStorage.getItem("nowIndex")) >= (Object.keys(json[localStorage.getItem("version")]).length) - 1) {
        localStorage.setItem("nowIndex", "0");
    } else {
        localStorage.setItem("nowIndex", parseInt(localStorage.getItem("nowIndex")) + 1);
    }
}
function fadeOut(element) {
    $(element)
        .css("opacity", "0")
        .css("transform", "translateY(-20px)");
}
function fadeIn(element) {
    $(element)
        .css("opacity", "1")
        .css("transform", "translateY(0px)");
}
function updateHtml() {
    let jsonIndex = JSON.parse(localStorage.getItem("queue"))[localStorage.getItem("nowIndex")];

    if (json[localStorage.getItem("version")][jsonIndex]["title"] === "xxx") {
        $("#poem-title").html(noTitleSvg);
    } else {
        $("#poem-title").html(json[localStorage.getItem("version")][jsonIndex]["title"]);
    }

    $("#poem-text").html(json[localStorage.getItem("version")][jsonIndex]["text"]);

    $("#poem-svg-wrapper")
        .html(json[localStorage.getItem("version")][jsonIndex]["image"])
        .css("opacity", "1");
    let svgLength = $("#poem-path").get(0).getTotalLength();
    $("#poem-path")
       .css("stroke-dasharray", svgLength)
        .css("stroke-dashoffset", svgLength)
        .animate({"stroke-dashoffset": "0"}, {duration: 2000, easing: "linear"});
}

$("#button-next").on("click", function () {
    fadeOut("#poem-title");
    fadeOut("#poem-text");
    $("#poem-svg-wrapper").css("opacity", "0");
    delay(500).then(() => {
        changeIndex();
        updateHtml();
    }).then(() => {
        fadeIn("#poem-title");
        fadeIn("#poem-text");
    });
});

$("#email-icon").on("click", function () {
    // Вся эта дичь чтобы скопировать текст в общем. Добавляю textarea \ оттуда беру нужный текст \ удаляю.
    let email = "scott.wohlberg09@gmail.com";
    let textArea = document.createElement("textarea");
    textArea.style.position = 'fixed';
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = "0";
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    textArea.value = email;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        let successful = document.execCommand('copy');
        let msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }
    document.body.removeChild(textArea);
   $("#email-copied-layout").css("opacity", "1");
   delay(2000).then(() => {
       $("#email-copied-layout").css("opacity", "0");
   })
});