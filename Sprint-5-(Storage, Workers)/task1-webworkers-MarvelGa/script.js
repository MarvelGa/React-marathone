let worker = new Worker('worker.js');

worker.onmessage = workerResponse => {
    let toResult = document.getElementById("result");
    toResult.innerText = 'Result: ' + workerResponse.data;
}

function calculate() {
    const number = document.getElementById("inputNumber");
    const inputNumber = Number.parseInt(number.value);

    worker.postMessage({data: inputNumber});

}
