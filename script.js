let boxes = document.querySelectorAll(".box");
let button = document.getElementById("btn");
let msg = document.querySelector(".winner");
let msg_container=document.querySelector(".msg");
let newbtn=document.getElementById("new");
let turn0 = true;
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]
boxes.forEach(e => {
    e.addEventListener("click", () => {

        if (turn0) {
            e.innerHTML = "X";
        }
        else {
            e.innerHTML = "O";
        }
        e.disabled = true;
        turn0 = !turn0;
        checkwinner();
    })
})
const checkwinner = () => {
    for (let pattern of winpatterns) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 !== "" && val1 === val2 && val2 === val3) {
            console.log("WINNER", val1);
            boxes.forEach(box => box.disabled = true);
            showwinner(val1);
            return 0;
        }
    }
};

button.addEventListener("click", () => {
    location.reload();
})
newbtn.addEventListener("click", () => {
    location.reload();
})
const showwinner = (win) => {
    msg.innerText=`Congratulations, ${win} is Winner.`;
    msg_container.classList.remove("hide");
}