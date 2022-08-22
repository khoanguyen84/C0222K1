// let DTB = 8.7;
// if (DTB >= 9 && DTB <= 10) {
//     console.log("Xuất sắc");
// }
// if (DTB >= 8 && DTB < 9) {
//     console.log("Giỏi");
// }
// if (DTB >= 7 && DTB < 8) {
//     console.log("Khá");
// }
// if (DTB >= 5 && DTB < 7) {
//     console.log("Trung bình");
// }
// if (DTB >= 0 && DTB < 5) {
//     console.log("Yếu");
// }
// if (DTB < 0 || DTB > 10) {
//     console.log("Điểm ko hợp lệ");
// }
// ============================================
// let check;
// let value_input = 7.6;
// if (value_input < 5) {
//     check = 0;
// } else {
//     if (value_input < 7) {
//         check = 1;
//     } else {
//         if (value_input < 8) {
//             check = 2;
//         } else {
//             if (value_input < 9) {
//                 check = 3;
//             }
//             else {
//                 check = 4;
//             }
//         }
//     }
// }
// switch (check) {
//     case 0:
//         console.log("yếu");
//         break;
//     case 1:
//         console.log("trung bình");
//         break;
//     case 2:
//         console.log("khá");
//         break;
//     case 3:
//         console.log("giỏi");
//         break;
//     case 4:
//         console.log("xuất sắc");
//         break;
// }
// =============================
// let aveScore = 15.6;
// switch (true) {
//     case aveScore >= 0 && aveScore < 5:
//         console.log("yếu");
//         break;
//     case aveScore >= 5 && aveScore < 7:
//         console.log("trung bình");
//         break;
//     case aveScore >= 7 && aveScore < 8:
//         console.log("khá");
//         break;
//     case aveScore >= 8 && aveScore < 9:
//         console.log("giỏi");
//         break;
//     case aveScore >= 9 && aveScore <= 10:
//         console.log("xuất sắc");
//         break;
//     default:
//         console.log("Invalid score")
// }
// ===========================================
let aveScore = 9.999;
switch ((aveScore > 10 || aveScore < 0) ? -1 : Math.floor(aveScore)) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
        console.log("yếu");
        break;
    case 5:
    case 6:
        console.log("trung bình");
        break;
    case 7:
        console.log("khá");
        break;
    case 8:
        console.log("giỏi");
        break;
    case 9:
    case 10:
        console.log("xuất sắc");
        break;
    default:
        console.log("Invalid score")
}

// let number = 5.000001
// console.log(Math.floor(number))
// console.log(Math.ceil(number))