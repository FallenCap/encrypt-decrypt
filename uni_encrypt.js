const crypto = require('crypto');

async function aesEncrypt(toEncrypt, key) {
    
    if(key.length == 31){
        const plaintext = JSON.stringify(toEncrypt);  
        const method = 'aes-256-cbc'; 
        const iv = Buffer.from(key.slice(0, 16)); 
        const truncatedKey = Buffer.concat([Buffer.from(key), Buffer.alloc(32)], 32);
        const cipher = crypto.createCipheriv(method, truncatedKey, iv);
        let encrypted = cipher.update(plaintext, 'utf8', 'base64');    
        encrypted += cipher.final('base64');
        return encrypted;
    }else{
        const plaintext = JSON.stringify(toEncrypt);  
        const method = 'aes-256-cbc';
        const iv = Buffer.from(key.slice(0, 16)); 
        const cipher = crypto.createCipheriv(method, key, iv);
        let encrypted = cipher.update(plaintext, 'utf8', 'base64');    
        encrypted += cipher.final('base64');
        return encrypted;
    }
};

console.log(aesEncrypt({ consumerNo: 1472017528  }, "Yw7@2CSyGyYCkVs#qX&A#Uofo83XkM="));