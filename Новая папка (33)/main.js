// 1. Berilgan asosiy array
let sonlar = [2, 4, 9, 10, 45, 67, 8, 90];

// 2. Juft sonlarni yig'ish uchun bo'sh yangi array yaratamiz
let juftSonlar = [];

// 3. for sikli yordamida har bir elementni tekshiramiz
for (let i = 0; i < sonlar.length; i++) {
    // Agar son 2 ga bo'lganda qoldiq 0 bo'lsa, u juft son
    if (sonlar[i] % 2 === 0) {
        // Juft sonni yangi arrayga qo'shamiz
        juftSonlar.push(sonlar[i]);
    }
}

// 4. Natijani konsolga chiqaramiz
console.log("Asosiy array:", sonlar);
console.log("Ajratib olingan juft sonlar:", juftSonlar);

// Shef, natijani alertda ham ko'rsatib qo'yamiz
alert("Juft sonlar ajratildi: " + juftSonlar.join(", "));