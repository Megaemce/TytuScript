// import { initalCharacter } from "./main.js";

// const defaultEasing = "ease-in-out";
// const defaultOption = (pace: number) => {
//     return { duration: pace * 100, iterations: Infinity };
// };

// const animate = (
//     transformName: string,
//     transformValue: string,
//     duration: number
// ) => {
//     this &&
//         this.animate(
//             [
//                 { transform: `${transformName}(${0})`, easing: "ease-in-out" },
//                 {
//                     transform: `${transformName}(${transformValue})`,
//                     easing: "ease-in-out",
//                 },
//                 { transform: `${transformName}(${0})`, easing: "ease-in-out" },
//             ],
//             { duration: duration * 1000, iteration: Infinity }
//         );
// };

// // function animate() {
// //     document
// //         .getElementById(this.character)
// //         .animate(
// //             [
// //                 { opacity: 1, easing: "ease-out" },
// //                 { opacity: 0.1, easing: "ease-in" },
// //                 { opacity: 0 },
// //             ],
// //             2000
// //         );
// // }

// export function breathing(pace: number = 2) {
//     const $ = initalCharacter.structural;
//     const keyframes: Keyframe[] = [
//         { transform: "translateY(0)", easing: defaultEasing },
//         { transform: "translateY(1%)", easing: defaultEasing },
//         { transform: "translateY(0%)", easing: defaultEasing },
//     ];

//     $.arms.div.animate(keyframes, defaultOption(pace));
//     $.upperSection.div.animate(keyframes, defaultOption(pace));
// }
// export function talking(pace: number = 1.5) {
//     const $ = initalCharacter.body.mouth;
// }
