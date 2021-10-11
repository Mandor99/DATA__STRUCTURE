class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

// const obj1 = new Node('1')
// obj1.next = new Node('2')
// obj1.next.next = new Node('3')
// obj1.next.next.next = new Node('4')
// console.log(obj1)

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    //1. push in the last
    push(val) {
        //a. create the new node
        let newNode = new Node(val)
        //b. check if has any nodes or not => if no => make the new node is the head and the tail because it will be the first node anyway which is the head & the tail || or if has nodes => make the next of tail is = newNode not null then change the tail to be the newNode
        // then increase the length then return 
        if(!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    //2. pop => remove from the end & return the removed node
    pop() { // we need just to change the tail
        //a. check if the list has head as it returns an error if doesn't have so we'll make it return undefined 
        if(!this.head) {
            return undefined
        }
        //b. loop when there're node.next!=null and keep the sequence of temp (n) & newTail (n-1) then after the loop make tail===newTail
        let tempTail = this.head
        let newTail = tempTail
        while(tempTail.next !== null) {
            newTail = tempTail
            tempTail = tempTail.next
        } 
        this.tail = newTail
        this.tail.next = null
        this.length--
         //c. check length
        if(this.length === 0) {
            this.head = null
            this.tail = null
        }
        //d. return the removed node
        return tempTail
    }

    //3. shift ==>> remove form the start (head) & return the removed node
    shift() {
        //a. check if the list has head as it returns an error if doesn't have so we'll make it return undefined 
        if(!this.head) return undefined
        //b. store the head to keep his next and delete it
        let tempHead = this.head
        this.head = tempHead.next
        this.length--
        //c.check length
        if(this.length === 0) {
            this.head = null
            this.tail = null
        }
        return tempHead
    }

    //4. unshift ==>> add to the beginning (head) of the list
    unshift(val) {
        let newHead = new Node(val)
        //a. check if has no head to make the head same of the tail
        if(!this.head) {
            this.head = newHead
            this.tail = this.head
        } else { // make the old head = newHead.next & the head = newHead 
            newHead.next = this.head
            this.head = newHead
        }
        this.length++
        return this
    }

    //5. get ==>> get the node of the position
    get(position) {
        //a. check the position if exist
        if(position < 0 || position > this.length) return null
        //b. counter to loop until the position
        let currentNode = this.head
        let counter = 0
        while(counter !== position) {
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }

    //6. set ==>> change the value of the position
    set(position, val) {
        //a. check if the position is exist and has a node => get() then change his value
        let existPosition = this.get(position)
        if(existPosition) {
            existPosition.val = val
            return true
        }
        return false
    }

    //7. insert ==>> add value to a position
    insert(position, val) {
        // a. check if the list length allow or not
        if(position < 0 || position > this.length) return false
        // b. check if insert in the beginning
        if(position === 0) return !!this.unshift(val)
        // c. check if insert in the end
        if(position === this.length) return !!this.push(val)
        // d. insert ==>> get the previous and his next with the position then change this next.
        let prevNode = this.get(position - 1)
        let currentNode = prevNode.next
        let newNode = new Node(val)
        prevNode.next = newNode
        newNode.next = currentNode
        this.length++
        return true
    }

    //8. remove ==>> remove node form the position
    remove(position) {
        if(position < 0 || position >= this.length) return undefined
        if(position === 0 ) return this.shift()
        if(position === this.length - 1) return this.pop()
        let prevNode = this.get(position - 1)
        let removedNode = prevNode.next
        prevNode.next = removedNode.next
        this.length--
        return removedNode
    }

    //9. reverse ==>> 1. swap(head, tail) / 2. loop list => {reversedNextNode = tail.next; reversedNodeNext.next = prevNext; pervNext = tail; tail = reversedNext}
    //[100 => 200 => 300 => 400 => 500 => (null)]==>>[(null) <==100 <== 200 <== 300 <== 400 <== 500]
    /* 
        1. currentNode = head = 100 contain next(200,300,400,500) //store
        2. head = tail = 500 => head.next = null
        3. tail = currentNode = 100 => tail.next = (200,300,400,500)
        4. headNext = currentNode.next
        5. tailNext = null
        **==>> [500,....,100]
        6. loop { swap(currentNode.next, currentNode) => (headNext, tailNext)
            a. headNext = currentNode.next ==>> 200 //store
            b. currentNode.next = tailNext ==>> null
            c. tailNext = currentNode ==>> 100
            d. currentNode = headNext ==>> 200
        } 
        1. [500(null), ..., 100(200,300,400)]
        2. [500(null), 200(),...,100(200,300,400)]
    */
    reverse() {
        //a. swap(head=tail, tail=currentNode=head)
        let currentNode = this.head
        this.head = this.tail
        this.tail = currentNode
        let nextNode
        let prevNode = null
        for(let i = 0; i < this.length; i++) {
            //store headNext then 
            nextNode = currentNode.next
            currentNode.next = prevNode
            prevNode = currentNode
            currentNode = nextNode
        }
        return this
    }
    print() {
        const arr = []
        let current = this.head
        while(current) {
            arr.push(current)
            current = current.next
        }
        console.log(arr)
    }
}

const list1 = new SinglyLinkedList()
list1.push('5')
list1.push('6')
list1.push('7')
// console.log(list1)
// console.log(list1.head.next.next)
// console.log('removed value is ==>>', list1.pop())
// console.log(list1)
// console.log('removed value is ==>>', list1.pop())
// console.log(list1)
// console.log('removed value is ==>>', list1.pop())
// console.log(list1)
// console.log('removed value is ==>>', list1.pop())
// console.log(list1)

// console.log('removed value is ==>>', list1.shift())
// console.log(list1)
// console.log('removed value is ==>>', list1.shift())
// console.log(list1)
// console.log('removed value is ==>>', list1.shift())
// console.log(list1)
// console.log('removed value is ==>>', list1.shift())
// console.log(list1)

list1.unshift(5)
list1.unshift(6)
list1.unshift(7)
console.log('unshift ==>> ', list1)

console.log('get ==>> ', list1.get(3))
console.log(list1)
list1.set(3, 33) // will change in all previous clg(list1), too
console.log(list1)
console.log(list1.set(0, 99))
console.log('get ==>> ', list1.get(3))
console.log('insert ==>> ', list1.insert(4, 55))
console.log('insert ==>> ', list1.insert(-1, -11))
console.log('insert ==>> ', list1.insert(9, 999))
console.log('insert ==>> ', list1.insert(0, 9999))
console.log('insert ==>> ', list1.insert(8, 8888))
console.log(list1)
console.log('remove ==>> ', list1.remove(7))
console.log('remove ==>> ', list1.remove(4))
console.log('remove ==>> ', list1.remove(-1))
console.log('remove ==>> ', list1.remove(9))
console.log('remove ==>> ', list1.remove(0))
console.log('remove ==>> ', list1.remove(8))
console.log(list1)
console.log('original ==>> ', list1.print())
console.log(list1)

list1.reverse()
console.log(list1)

console.log('reverse ==>> ', list1.print())
