/**
 * Created by EG on 2017/5/27.
 */
// require('./main.css');
// var greeter = require('./greeter.js');
/*es6 写法*/
import Greeter from './greeter.js'
import './main.css'
console.log(Greeter());
document.innerHtml = Greeter();