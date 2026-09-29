/* =========================================
   BIRTHDAY COUNTDOWN
   1 OCTOBER 2026
   WIB / UTC+7
========================================= */


const targetDate =
    new Date(
        "2026-10-01T00:00:00+07:00"
    );


/* =========================================
   ELEMENTS
========================================= */

const daysElement =
    document.getElementById("days");

const hoursElement =
    document.getElementById("hours");

const minutesElement =
    document.getElementById("minutes");

const secondsElement =
    document.getElementById("seconds");

const enterButton =
    document.getElementById("enterButton");


/* =========================================
   FORMAT NUMBER
========================================= */

function formatNumber(number) {

    return String(
        Math.max(
            0,
            Math.floor(number)
        )
    ).padStart(2, "0");

}


/* =========================================
   UPDATE COUNTDOWN
========================================= */

function updateCountdown() {

    const now =
        new Date();

    const difference =
        targetDate.getTime()
        -
        now.getTime();


    /* =========================
       BIRTHDAY HAS ARRIVED
    ========================== */

    if (difference <= 0) {

        daysElement.textContent =
            "00";

        hoursElement.textContent =
            "00";

        minutesElement.textContent =
            "00";

        secondsElement.textContent =
            "00";


        enterButton.querySelector("span:first-child")
            .textContent =
            "enter";


        return;

    }


    /* =========================
       CALCULATE
    ========================== */

    const totalSeconds =
        Math.floor(
            difference / 1000
        );


    const days =
        Math.floor(
            totalSeconds / 86400
        );


    const hours =
        Math.floor(
            (totalSeconds % 86400)
            / 3600
        );


    const minutes =
        Math.floor(
            (totalSeconds % 3600)
            / 60
        );


    const seconds =
        totalSeconds % 60;


    /* =========================
       UPDATE
    ========================== */

    daysElement.textContent =
        formatNumber(days);

    hoursElement.textContent =
        formatNumber(hours);

    minutesElement.textContent =
        formatNumber(minutes);

    secondsElement.textContent =
        formatNumber(seconds);

}


/* =========================================
   INITIAL UPDATE
========================================= */

updateCountdown();


/* =========================================
   UPDATE EVERY SECOND
========================================= */

setInterval(
    updateCountdown,
    1000
);