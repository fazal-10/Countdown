// let deadline = new Date("jul 29, 2022 22:37:00").getTime();
let deadline;
document.getElementById("userDate").addEventListener("change", function () {
    var input = this.value;
    deadline = new Date(input).getTime();

    let id = setInterval(() => {
        let current = new Date().getTime();
        let diff = deadline - current;
        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        // console.log(days);
        let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        // console.log(hours);
        let min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        // console.log(min);
        let sec = Math.floor((diff % (1000 * 60)) / 1000);
        // console.log(sec);
        document.getElementById('timer').innerHTML = days + " Day - " + hours + " hrs:" + min + " min:" + sec + " s";
    }, 1000);
});