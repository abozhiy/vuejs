/**
 * Вместо использования pug-loader мы должны использовать загрузчик,
 * который вернёт сырую строку HTML, например pug-plain-loader
 *
 * @see https://vue-loader.vuejs.org/ru/guide/pre-processors.html#pug
 */
module.exports = {
  test: /\.pug$/,
  loader: 'pug-plain-loader'
}

/**
 * Если вы также собираетесь импортировать файлы .pug как HTML-строки
 * в JavaScript, вам нужно добавить в цепочку raw-loader после загрузчика
 * пре-процессора. Обратите внимание, что добавление raw-loader сломает
 * использование в компонентах Vue, поэтому потребуется два правила: одно
 * для файлов Vue с использованием resourceQuery, другое (fallback) для
 * импортов из JavaScript
 */
// module.exports = {
//   test: /\.pug$/,
//   oneOf: [
//     // это применяется к `<template lang="pug">` в компонентах Vue
//     {
//       resourceQuery: /^\?vue/,
//       use: ['pug-plain-loader']
//     },
//     // это применяется к импортам pug внутри JavaScript
//     {
//       use: ['raw-loader', 'pug-plain-loader']
//     }
//   ]
// }