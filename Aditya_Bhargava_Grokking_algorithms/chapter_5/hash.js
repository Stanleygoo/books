/* Hash + separate chaining для коллизий
*
* Пример: контакты
*
* var hashTable = new HashTable();
* hashTable.buildChains(); - добавляем 2 уровень массивов
* var contacts = [{Аня: '123456', Петя: '0987675'}, {Вася: '4567881'}, {Маша: '0378652'}, {Коля: '23479422'}];
*
* for (var i = 0; i < contacts.length; ++i) {
*   hashTable.add(contacts[i]);
* }
*
* hashTable.get('Аня');
**/
function HashTable() {
    this.table = new Array(137);
    this.buildChains = buildChains;
    this.hashFunction = hashFunction;
    this.show = showTable;
    this.add = add;
    this.get = get;
}

function hashFunction(name) {
    const multiplier = 37;
    let total = 0;

    for (let i = 0; i < name.length; ++i) {
        total += multiplier * total + name.charCodeAt(i);
    }

    total = total % this.table.length;

    if (total < 0) {
        total += this.table.length - 1;
    }

    return parseInt(total);

}

function showTable() {
    for (let i = 0; i < this.table.length; ++i) {
        if (this.table[i] !== undefined) {
            console.log(i + ': ', this.table[i]);
        }
    }
}

function add(item) {
    for (let name in item) {
        let inserted = {};
        let posValue = this.table[this.hashFunction(name)];

        inserted[name] = item[name];
        posValue.push(inserted);
    }
}

function get(key) {
    let hash = this.hashFunction(key);

    for (let i = 0; i < this.table[hash].length; ++i) {
        if (this.table[hash][i][key]) {
            console.log(this.table[hash][i][key]);
            return this.table[hash][i][key];
        }
    }

    console.log('Такого элемента нет');
    return undefined;
}

function buildChains() {
    for (let i = 0; i < this.table.length; ++i) {
        this.table[i] = new Array();
    }
}
