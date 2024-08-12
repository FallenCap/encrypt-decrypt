const crypto = require("crypto");

async function aesDecrypt(encryptedData, key) {
  if (key.length == 31) {
    const method = "aes-256-cbc";
    const iv = Buffer.from(key.slice(0, 16));
    const truncatedKey = Buffer.concat(
      [Buffer.from(key), Buffer.alloc(32)],
      32
    );
    const decipher = crypto.createDecipheriv(method, truncatedKey, iv);
    let decrypted = decipher.update(encryptedData, "base64", "utf8");
    decrypted += decipher.final("utf8");
    resultData = JSON.parse(decrypted);
    return resultData;
  } else {
    const iv = Buffer.alloc(16, key.slice(0, 16));
    const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
    let decrypted = decipher.update(encryptedData, "base64", "utf-8");
    decrypted += decipher.final("utf-8");
    resultData = JSON.parse(decrypted);
    return resultData;
  }
}

console.log(aesDecrypt("wAOERNEwf1BlgwNyaBWIg31tPVHFYvKQsN18gT9QPWS8Cu1lKqi1SEGvBP0xCll7czPP/QKzu2rU/Z8h58OKBMXesQn4ITG64vSRnRK0yDSU09lPPwsIkXxlQnYxuUw1pHyNe5qxKBhjEFbICMuRUmlTM2xb5V+PDmn9ubas9xj8o7GS5RK1Oyukh2BOHiwWXs1X2rVD/ddXMwS9595bMgfWjNc1eusgxZxSizmi7z3iUegnXRETBfI+t51rQvRJzCM93fnZLMFcYDwRnAEKcBjv4sEnesOEu5CHTse5zH49xjOmU8q6R7DXFfSdA3LqkhRoK23rA6flK9M7/Tpp2XNo/RyBFJReL4lYV1G+jK3nc5hlPkryNgjf7hKpKDZ6CS0hj1mzLGOM/CpIiY7kXhURknDrN+sfd0s6l6gW9ErawHv1YqwPunOy4PjL80gxM9ZxBMs5TTzbO/iUQZmo5ivrbX5ec50ruvj2maNidxgKuXtve6kS1e4B0fUNvbfnnEZ+bYeRX/x0UpKiilWWd+KmX0svFgPyzS4DSPiyFB6Df9dn73RhWiWSucsNl33d8HigeNBRTVpmasPi8qSRXcI1jH7ajyggCueQJQreDgINvPLOmPX1h0e7NzMjNrWB", "FB4FF1BA6F1FCC1A11B8B3910342CBD3"));