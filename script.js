const countEl = document.getElementById("count");
const decrementBtn = document.getElementById("do");
const incrementBtn = document.getElementById("in");
const clearBtn = document.getElementById("cl");
const errorMsg = document.querySelector(".error");

let count = 1;

function backendWala() {
    countEl.textContent = count;

    if (count === 0) {
        errorMsg.classList.remove("hide");
        clearBtn.classList.add("hide");
        decrementBtn.disabled = true;  
    } else {
        errorMsg.classList.add("hide");
        clearBtn.classList.remove("hide");
        decrementBtn.disabled = false;
    }
}

incrementBtn.addEventListener("click", () => {
    count++;
    backendWala();
});

decrementBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
    }
    backendWala();
});

clearBtn.addEventListener("click", () => {
    count = 1;
    backendWala();
});

backendWala();
