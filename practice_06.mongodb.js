use("users");
// db.users.insertMany([
//   { firstName: "Ivan", lastName: "Ivanov", age: 22, job: "Developer", hobby: "Football" },
//   { firstName: "Anna", lastName: "Petrova", age: 19, job: "Designer", hobby: "Drawing" },
//   { firstName: "Sergey", lastName: "Sidorov", age: 25, job: "Developer", hobby: "Chess" },
//   { firstName: "Maria", lastName: "Smirnova", age: 31, job: "Marketer", hobby: "Running" },
//   { firstName: "Alexey", lastName: "Kozlov", age: 28, job: "Analyst", hobby: "Football" },
//   { firstName: "Elena", lastName: "Morozova", age: 20, job: "Designer", hobby: "Dancing" },
//   { firstName: "Dmitry", lastName: "Volkov", age: 35, job: "Manager", hobby: "Fishing" },
//   { firstName: "Olga", lastName: "Lebedeva", age: 23, job: "Developer", hobby: "Drawing" },
//   { firstName: "Pavel", lastName: "Pavlov", age: 40, job: "Director", hobby: "Chess" },
//   { firstName: "Natalia", lastName: "Sokolova", age: 26, job: "Marketer", hobby: "Dancing" }
// ]);

//1.
// db.users.find({job: "Developer"},{_id:0,firstName:1,hobby:1});

//2.
// db.users.find({
//   age: { $gt: 21 },
//   hobby: { $in: ["Football", "Dancing"] }
// })

//3.
// db.users.find()
//         .sort({ age: -1 })
//         .limit(3)

//4.
// db.users.aggregate([
//   {
//     $group: {
//       _id: null,
//       averageAge: { $avg: "$age" },
//       minAge: { $min: "$age" },
//       maxAge: { $max: "$age" }
//     }
//   }
// ]);

//5.
// db.users.aggregate([
//   {
//     $group: {
//       _id: "$job",
//       count: { $sum: 1 }
//     }
//   },
//   {
//     $sort: {
//       count: -1
//     }
//   }
// ])


