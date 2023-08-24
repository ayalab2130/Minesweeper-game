const timer = document.querySelector('#timer');
const btnStart = document.querySelector('#btnStart');
const tds = document.querySelectorAll('td');
let imgForSmily = document.createElement('img');
imgForSmily.setAttribute('src', "../images/חושב.svg");
btnStart.appendChild(imgForSmily);






for (let h = 0; h < tds.length; h++) {
    let btnP = document.createElement('button');
    btnP.classList.add('bb');
    tds[h].innerText = "";
    tds[h].appendChild(btnP);


}
let btns = document.querySelectorAll('.bb');


function imageGood() {
    imgForSmily.setAttribute('src', "../images/סמיילישמח-.png");
    imgForSmily.style.width = '100%';
}
function imageNotGood() {
    imgForSmily.setAttribute('src', "../images/notGood1.png");
    imgForSmily.style.width = '100%';

}

let clock1 = 0;
let clock2 = 0;
let clock3 = 0;
let clock4 = 0;
function myClock() {
    if (clock1 === 10) {
        clock2++;
        clock1 = 0;
    }
    if (clock2 == 6) {
        clock3++;
        clock2 = 0;
    }
    if (clock3 == 10) {
        clock4++;
        clock3 = 0;
    }
    timer.innerHTML = clock4 + '' + clock3 + ':' + clock2 + clock1;
    timer.style.fontWeight = 'bold';
    clock1++;

}
let x = setInterval(myClock, 1000);






function cntNeighbors(i) {
    let num = 0;
    if (i % 10 == 9) {
        if (i != 9)
            if (tds[i - 11].getAttribute("id") == "bomb")
                num++;
        if (i != 9)
            if (tds[i - 10].getAttribute("id") == "bomb")
                num++;
        if (i != 99)
            if (tds[i + 9].getAttribute("id") == "bomb")
                num++;
        if (i != 99)
            if (tds[i + 10].getAttribute("id") == "bomb")
                num++;
        if (tds[i - 1].getAttribute("id") == "bomb")
            num++;
        return num;
    }

    if (i % 10 == 0) {
        if (i != 0)
            if (tds[i - 10].getAttribute("id") == "bomb")
                num++;
        if (i != 0)
            if (tds[i - 9].getAttribute("id") == "bomb")
                num++;
        if (i != 90)
            if (tds[i + 10].getAttribute("id") == "bomb")
                num++;
        if (i != 90)
            if (tds[i + 11].getAttribute("id") == "bomb")
                num++;
        if (tds[i + 1].getAttribute("id") == "bomb")
            num++;
        return num;
    }
    if (tds[i - 1].getAttribute("id") == "bomb")
        num++;
    if (tds[i + 1].getAttribute("id") == "bomb")
        num++;
    if (i > 10) {
        for (let j = i - 11; j < i - 8; j++) {
            if (tds[j].getAttribute("id") == "bomb")
                num++;
        }
    }
    if (i < 89) {
        for (let j = i + 9; j < i + 12; j++) {
            if (tds[j].getAttribute("id") == "bomb")
                num++;
        }
    }
    return num;

}

function stop() {
    for (let k = 0; k < btns.length; k++) {

        if (tds[k].getAttribute("id") == "bomb") {
            let poto = document.createElement('img');
            poto.setAttribute('src', "../images/bomb.png")
            btns[k].appendChild(poto);
            poto.style.width = '100%';
        }
        btns[k].setAttribute('disabled', 'disabled');
    }
    clearInterval(x);
}


function Win() {
    for (let k = 0; k < btns.length; k++) {
        if (tds[k].getAttribute("id") == "bomb") {
            let poto = document.createElement('img');
            poto.setAttribute('src', "../images/degel.png")
            btns[k].appendChild(poto);
            poto.style.width = '100%';
        }
        btns[k].setAttribute('disabled', 'disabled');
    }
    clearInterval(x);
}



function didYouWin() {
    for (let k = 0; k < btns.length; k++) {
        if (tds[k].getAttribute("id") != "bomb") {
            if (btns[k].style.backgroundColor != 'white')
                return;
        }
    }
    Win();
    imageGood();
}





for (let i = 0; i < tds.length; i++) {
    tds[i].addEventListener('click', function () {
        if (tds[i].getAttribute("id") == "bomb") {
            btns[i].style.backgroundColor = 'red';
            stop();
            imageNotGood();

        }
        else {
            let cnt = 0;
            cnt = cntNeighbors(i);
            if (cnt != 0) {
                btns[i].innerText = cnt;
                btns[i].style.fontWeight = 'bold';
                switch (cnt) {
                    case 1:
                        btns[i].style.color = 'blue';


                        break;
                    case 2:
                        btns[i].style.color = 'green';
                        break;
                    case 3:
                        btns[i].style.color = 'red';
                        break;
                    case 4:
                        btns[i].style.color = 'yellow';
                        break;
                    case 5:
                        btns[i].style.color = 'brown';
                        break;
                    case 6:
                        btns[i].style.color = 'seagreen';
                        break;
                    default:
                        btns[i].style.color = 'red';
                }
            }

            else
                btns[i].innerText = "";
            btns[i].style.backgroundColor = "white";
            btns[i].setAttribute('disabled', 'disabled');

            didYouWin();



        }

    });
 
}





btnStart.addEventListener('click', function () {
    for (let p = 0; p < tds.length; p++) {
        tds[p].removeAttribute('button');
        let bp = document.createElement('button');
        bp.classList.add('bb');
        tds[p].innerText = "";
        tds[p].appendChild(bp);
    }
    btns = document.querySelectorAll('.bb');
    imgForSmily.setAttribute('src', "../images/חושב.svg");
    imgForSmily.style.width = '100%';
    clock1 = 0;
    clock2 = 0;
    clock3 = 0;
    clock4 = 0;
    x = setInterval(myClock, 1000);


}
);



