outerLoop:
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
        if (i === 1 && j === 1) {
            break outerLoop;  // Only breaks the inner loop
        }
    }
}
console.log("Loop exited!");
