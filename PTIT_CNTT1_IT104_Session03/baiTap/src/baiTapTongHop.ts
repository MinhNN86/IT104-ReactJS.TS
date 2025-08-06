enum SystemMode {
  AUTO = "AUTO",
  MANUAL = "MANUAL",
}

type Direction = "left" | "right" | "forward" | "backward";

const logMovement = (direction: Direction): string => {
  return `🔄 Moving ${direction}`;
};

const setMode = (systemMode: SystemMode): string => {
  return `⚙️ System set to ${systemMode} mode`;
};

const receivedInput = (input: any): void => {
  console.log(`📥 Received input (any): ${input}`);
};

const processInput = (input: any): void => {
  if (typeof input === "string") {
    console.log(`Input length: ${input.length}`);
  } else {
    console.log(`Input length: ${input}`);
  }
};

const validateInput = (input: unknown) => {
  if (typeof input === "number") {
    console.log(`✅ Valid number input: ${input}`);
  } else {
    console.log(`❌ Invalid input type`);
  }
};

const crash = (message: string): never => {
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
