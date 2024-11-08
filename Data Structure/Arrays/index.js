class List {
    #listSize
    #dataStore
    constructor(...rest) {
        this.position = 0;
        this.#dataStore = [...rest];
        this.#listSize = this.#dataStore.length;
    }
    append(element) {
        this.#dataStore[this.#listSize++] = element
    }
    findIndex(element) {
        for (let i = 0; i < this.#listSize; i++) {
            if (this.#dataStore[i] === element) {
                return i
            }
        }
        return -1
    }
    remove(element) {
        const indexOfValue = this.findIndex(element)
        if (indexOfValue > -1) {
            this.#dataStore.splice(indexOfValue, 1)
            this.#listSize--
            return true
        }
        return false
    }
    get length() {
        return this.#listSize
    }
    toString() {
        return this.#dataStore
    }
}


const arr = new List(1, 2, 3)
console.log(arr.listSize)