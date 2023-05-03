const main = document.querySelector("main")
const p = main.querySelector("p");

function verifyNumber(number, input, tryNumber) {
    if (input === number) {
        main.innerHTML = `
        <h1>Você Ganhou</h1>
        <h2>O número era ${number}</h2>
        <button class="button-36">Jogar Novamente</button>
        <p>Você tentou ${tryNumber}x</p>
        `;
        const restart = document.querySelector(".button-36");
        restart.addEventListener("click", () => {
            window.location.reload();
        })

    } else if (input > number) {
        p.innerHTML = `O número é menor <i class="fa-solid fa-arrow-down"></i> que ${input}`;
    } else {
        p.innerHTML = `O número é maior <i class="fa-solid fa-arrow-up"></i> que ${input}`;
    }
}

export default verifyNumber;