// index.js
import * as say from './module';

const element = document.createElement('h1');

element.innerHTML = say.sayHello('World');

document.body.appendChild(element);
