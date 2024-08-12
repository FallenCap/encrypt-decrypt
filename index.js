const crypto = require("crypto");
const fs = require("fs");

let output = fs.readFileSync('./output.txt', { encoding: 'utf8' });
const token = "zPDvm4RPnjugWJZEvMp6nE33cZNkeVmx8JKkjZ4ZQLrybqaWI4mBH0sY5dH63lJnbf2iU0VLcy51mm06t6gsr234vyMbyviIgBge1y2d2AGavftkMCrb8H8St5InMOQEZiLLGgqugRaEDvOi6YUUiytRxQP3AXXiboX6gNPMkxzPXOfdS8TLqGPR2kFdSK9ODmJGVgd9HuHTojP41lfYYHWnAbeuTAigaUGSJPsVSv8VMUN2fq3AX7PQZMKSIl6z";
const keyPass = token.slice(0, 16);
const method = "aes-128-cbc";

// Convert keyPass to Buffer (it will act as both key and iv)
const key = Buffer.from(keyPass, "utf8");
const iv = Buffer.from(keyPass, "utf8");

// Convert the base64 encoded encrypted data to Buffer
const encryptedData = Buffer.from(output, "base64");

// Create decipher with key and iv
const decipher = crypto.createDecipheriv(method, key, iv);

// Decrypt the data
let decryptedData = decipher.update(encryptedData, 'binary', 'utf8');
decryptedData += decipher.final('utf8');

console.log(decryptedData);
