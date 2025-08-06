var SystemMode;
(function (SystemMode) {
    SystemMode["AUTO"] = "AUTO";
    SystemMode["MANUAL"] = "MANUAL";
})(SystemMode || (SystemMode = {}));
const logMovement = (direction) => {
    return `🔄 Moving ${direction}`;
};
const setMode = (systemMode) => {
    return `⚙️ System set to ${systemMode} mode`;
};
const receivedInput = (input) => {
    console.log(`📥 Received input (any): ${input}`);
};
const processInput = (input) => {
    if (typeof input === "string") {
        console.log(`Input length: ${input.length}`);
    }
    else {
        console.log(`Input length: ${input}`);
    }
};
const validateInput = (input) => {
    if (typeof input === "number") {
        console.log(`✅ Valid number input: ${input}`);
    }
    else {
        console.log(`❌ Invalid input type`);
    }
};
const crash = (message) => {
    throw new Error(message);
};
console.log(logMovement("forward"));
console.log(logMovement("left"));
console.log(setMode(SystemMode.AUTO));
console.log(setMode(SystemMode.MANUAL));
receivedInput("Hello robot!");
processInput(12);
receivedInput(12345);
validateInput("Test");
validateInput(78);
crash("💥 SYSTEM CRASHED: Overheat detected!");
export {};
