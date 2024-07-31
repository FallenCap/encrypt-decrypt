const crypto = require("crypto");
const fs = require("fs");

let output = fs.readFileSync('./output.txt', { encoding: 'utf8' });
const token = "fq2mPLrFg5JJOfRotN52NsOJDPaEDgjZU5Ku4SHpvKWHQWXyoMlNLkA7m73I0DZ1w9pHzMPdIGdqHDeZZsecHY8rn8glM2NHPOBjRwl9558ffgv29Ssu6Dwb8mciHH9U51LsB8QU8PG5QSSacaXbORgVMBFdiYkIyu7gffrAFuzztU47CXBrTc6YxLCFoiucaPAldhXr4Jl1SG8lryBVs1M31hsD7u7NU6pK01mZPS183lz7SVGhnMNBHJQh2dea";
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
