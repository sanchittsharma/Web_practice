
onmessage = function(event) {
    console.log("Message received from main thread:", event.data);
    
    let sum = 0;
    for (let i = 0; i < 1e9; i++) { // Simulating a heavy computation
        sum += i;
    }

    postMessage("Sum calculated: " + sum); // Send result back to the main thread
};
