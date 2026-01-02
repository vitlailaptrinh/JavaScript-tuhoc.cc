// 7. Các cách xuất biến dữ liệu với biến trong js
let soA = 25;
let soB = 5;
// Cách 1:
console.log("Căn bậc hai của " + soA + " là: " +soB);

// Cách 2:
console.log("Căn bậc hai của", soA, "là:", soB);

// Cách 3:
console.log(`Căn bậc hai của ${soA} là: ${soB}`);

// Cách 4:
console.log(`Căn bậc hai của %s là: %s`, soA, soB);

// Luyện tập
let a = 4,
    b = 3,
    kq = a*b;

// Cách 1
console.log("Kết quả: " + a + " nhân với " + b + " bằng " + kq);

// Cách 2
console.log("Kết quả:",a,"nhân với",b,"bằng",kq);

// Cách 3
console.log(`Kết quả: ${a} nhân với ${b} bằng ${kq}`);

// Cách 4
console.log(`Kết quả: %s nhân với %s bằng %s`, a, b, kq);