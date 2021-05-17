/*
 * @Author: your name
 * @Date: 2021-04-24 11:30:54
 * @LastEditTime: 2021-05-17 12:06:23
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \desgin-model\src\index.js
 */
import {readonly, deprecate} from 'core-decorators';
const Foo = {
    foo() {
        console.log('foo')
    }
}

function mixins(...list) {
    return target => {
        Object.assign(target.prototype, ...list)
    }
}

@mixins(Foo)
class Myclass {

}
let obj = new Myclass()
console.log(obj.foo())

class Person {
    @deprecate('即将弃用',{url:'www.baidu.com'}) // 弃用
    @readonly // 只读
    name(){
        return 'czh'
    }
}
let p = new Person()
console.log(p.name())