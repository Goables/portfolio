function changePage(page) {
    location.href = page;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const SKY = document.querySelector(`[data-sky]`);
const QUANTITY = 40;

if (SKY) {
    setStars();
    window.addEventListener(`resize`, setStars);

    function setStars() {
        const skySize = {
            width: SKY.offsetWidth,
            height: SKY.offsetHeight
        }

        const TOTAL_STARS = getStarsQuantity(skySize);
        let starTemplate = ``;

        for (let star = 0; star < TOTAL_STARS; star++) {
            const starPos = getStarPos(skySize);
            const starPos2 = getStarPos2(skySize);
            const starStyle = `
                position: absolute;
                top: ${starPos.top}px;
                left: ${starPos.left}px;
            `;

            const starStyle2 = `
            position: absolute;
            top: ${starPos2.top}px;
            left: ${starPos2.left}px;
        `;

            const starClass = `star star--type-${Math.floor(Math.random() * 3)}`;
            const starClass2 = `ship`;
            let chance = getRandomInt(5);

            if (chance === 1) {
                // document.getElementById("moveStars").innerHTML += `<marquee style="${starStyle2}; z-index: 5;" direction='left' scrolldelay='0' width='100%' scrollspeed='true' scrollamount='${getRandomInt(4)}' loop='-1'><div style="z-index: 5;" class="${starClass}"></div></marquee>`
                let chance2 = getRandomInt(8);
                console.log(`was 3`);
                if (chance2 === 2) {
                    document.getElementById("moveStars").innerHTML += `<marquee style="${starStyle2}; z-index: 5;" direction='left' scrolldelay='0' width='100%' scrollspeed='true' scrollamount='${getRandomInt(2)+1}' loop='-1'><img style="z-index: 5;  rotate: ${getRandomInt(360)}deg;" class="${starClass2}" src="/images/asteroid_RE.png"></img></marquee>`
                } else {
                    document.getElementById("moveStars").innerHTML += `<marquee style="${starStyle2}; z-index: 5;" direction='left' scrolldelay='0' width='100%' scrollspeed='true' scrollamount='${getRandomInt(4)}' loop='-1'><div style="z-index: 5;" class="${starClass}"></div></marquee>`
                }
            } else {
                console.log(`was not 3`)
                starTemplate += `<div style="${starStyle}" class="${starClass}"></div>`
            }
        }

        SKY.innerHTML = starTemplate;
    }
    function getStarsQuantity(skySize) {
        const qH = skySize.width / 250 * (QUANTITY / 2);
        const qV = skySize.height / 250 * (QUANTITY / 2);
        return qH + qV;
    }
    function getStarPos(skySize) {
        return {
            top: Math.floor(Math.random() * skySize.height),
            left: Math.floor(Math.random() * skySize.width)
        }
    }
    function getStarPos2(skySize) {
        return {
            top: Math.floor(Math.random() * skySize.height),
            left: Math.floor(Math.random() * skySize.width)
        }
    }
}