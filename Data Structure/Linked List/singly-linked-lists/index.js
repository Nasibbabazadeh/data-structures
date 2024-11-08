class Node {
  constructor(value) {
    this._value = value;
    this._next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    }
    else {
      this.tail._next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }
  pop() {
    if (!this.head || !this.tail) {
      return undefined
    }
    let currentNode = this.head
    let newTail = currentNode
    while (currentNode._next) {
      newTail = currentNode;
      currentNode = currentNode._next;

    }
    this.tail = newTail
    this.tail._next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return currentNode
  }
  shift() {
    if (!this.head) return undefined
    let currentHead = this.head
    this.head = currentHead._next
    this.length--
    if (this.length === 0) {
      this.tail = null
    }
    return currentHead
  }
  unshift(value) {
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    }
    else {
      const newNode = new Node(value)
      newNode._next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined
    }
    let temp = this.head
    for (let i = 0; i < index; i++) {
      temp = temp._next
    }
    return temp
  }
  set(value, index) {
    const node = this.get(index)
    if (node) {
      node._value = value
      return true
    }
    return false
  }
  insert(index, value) {
    if (index === 0) this.unshift(value)
    if (index === this.length) this.push(value)
    if (index < 0 || index >= this.length) return undefined
    const newNode = new Node(value)
    const temp = this.get(index - 1)
    newNode._next = temp._next
    temp._next = newNode
    this.length++
    return true
  }
  remove(index) {
    if (index === 0) this.shift()
    if (index === this.length) this.pop()
    if (index < 0 || index >= this.length) return undefined

    const before = this.get(index - 1)
    const temp = before._next
    before._next = temp._next
    temp._next = null
    this.length--
    return temp
  }
}

