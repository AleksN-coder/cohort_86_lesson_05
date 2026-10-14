use("lesson_05_cohort_86");
// Создаем коллекцию animal c 6 новыми документами
// db.animal.insertMany([
//   { kind: "tiger", weight: 300, name: "Alan", predatory: true },
//   { kind: "penguin", weight: 2, name: "Kovalsky", predatory: true },
//   { kind: "chicken", weight: 1, name: "Cipa", predatory: false },
//   { kind: "shark", weight: 400, name: "Sharp", predatory: false },
//   { kind: "shark", weight: 450, name: "John", predatory: false },
//   { kind: "panda", weight: 200, name: "Po", predatory: false },
// ]);
// UPDATE
// 1. $set
// - изменим predotary у всех акул на true
// db.animal.updateMany({ kind: "shark" }, { $set: { predatory: true } });
// 2. $inc - увеличивает значения на указанную величину
// db.animal.updateMany({}, { $inc: { weight: 3 } });
// 3. $rename - переименовывает ключи
// db.animal.updateMany({}, { $rename: { weight: "weightKg" } });