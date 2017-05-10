/* Сортировка выбором */
function selectionSort(array) {
    if (array instanceof Array) {
        for (var i = 0; i < array.length; ++i) {
            if (!isNaN(Number(array[i]))) {
                var smallestIndex = findSmallestIndex(array, i);
                var currentValue = Number(array[i]);

                array[i] = array[smallestIndex];
                array[smallestIndex] = currentValue;
            } else {
                throw new Error('Элемент массива не является числом');
            }
        }

        return array;
    } else {
        throw new Error('Введите массив');
    }
}

/* Хелпер для нахождения наименьшего элемента массива
 * (для сортировки выбором) */
function findSmallestIndex(array, fromIndex) {
    var smallestIndex = fromIndex;
    var smallestValue = Number(array[smallestIndex]);

    if (!isNaN(smallestValue)) {
        for (var i = fromIndex + 1; i < array.length; i++) {
            if (!isNaN(array[i])) {
                if (Number(array[i]) < smallestValue) {
                    smallestIndex = i;
                    smallestValue = array[smallestIndex];
                }
            } else {
                throw new Error('Элемент массива не является числом');
            }
        }
        return smallestIndex;
    } else {
        throw new Error('Элемент массива не является числом');
    }
}
