/**
 * Created by EG on 2017/5/27.
 */
// var config = require('./config.json');
// module.exports = function () {
//     alert(config.greenText);
// }
/* es6 */
import React from 'React'
import config from './config.json'
import styles from './greeter.css'


/* es6 jsx */
// class Greeter extends Comment {
//     render () {
//         return (
//             <h1 className={style.title}>
//                 Hello World
//             </h1>
//     );
//     }
// }

export default () => {
  return "test";
};
// export default function () {
//   console.log(111);
// }