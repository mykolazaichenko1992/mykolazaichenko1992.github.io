let str = 'js__is-a--lightweight_interpreted_or--just-in-time_compiled--programming_language-with_first-class_functions';
let str2 = str.replaceAll(`--`, `-`).replaceAll(`_`, `-`).replaceAll(`--`, `-`).split(`-`)
.map(elemeent => `${elemeent[0].toUpperCase()}${elemeent.substring(1)}`);
str2[0] = str2[0].toLowerCase();
str2 = str2.join(``);
console.log(str2);