function showNotice(title) {

    const notice =
        document.getElementById("notice");

    const noticeTitle =
        document.getElementById("noticeTitle");

    noticeTitle.textContent = title;

    notice.classList.add("show");

}


function closeNotice() {

    document
        .getElementById("notice")
        .classList.remove("show");

}


/*
    Automatically displays today's
    month and day in the Upcoming section.
*/

const now = new Date();

const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC"
];


document.getElementById("month").textContent =
    months[now.getMonth()];


document.getElementById("day").textContent =
    String(now.getDate()).padStart(2, "0");
