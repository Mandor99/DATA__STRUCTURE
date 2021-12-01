// implement with array []
//[push , pop, peek, isEmpty]

class Stack {
    constructor () {
        this.arr = []
        this.size = -1
    }

    isEmpty() {
        return this.arr === []
    }

    peek() {
        if(this.size > -1) {
            return this.arr[0]
        } else {
            return null
        }
    }

    push(val) {
        this.arr.unshift(val)
        return ++this.size
    }

    pop() {
        if(!this.isEmpty()) {
            let removedEle = this.arr.shift()
            --this.size
            return removedEle
        } else {
            return 'stack is empty now!!!'
        }
    }
}

const stk1 = new Stack()

console.log(stk1.peek())
console.log(stk1.push(5))
console.log(stk1.push(4))
console.log(stk1.push(3))
console.log(stk1.push(2))
console.log(stk1.push(1))
console.log(stk1.push(0))
console.log(stk1)
console.log(stk1.pop())
console.log(stk1.peek())
console.log(stk1)
