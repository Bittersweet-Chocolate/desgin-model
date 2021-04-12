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


import {readonly, deprecate} from 'core-decorators'
class Person {
    @deprecate('即将弃用',{url:'www.baidu.com'}) // 弃用
    @readonly // 只读
    name(){
        return 'czh'
    }
}
let p = new Person()
console.log(p.name())