/* Хелпер для проверки первого аргумента на массив, второго - на число.
 * Возвращает true, если оба аргумента проходят проверку,
 * в противном случае - false. */
function checkArgs(array, item) {
    if (isNaN(item)) {
        console.error('Искомое должно быть числом');
        return false;
    } else if (!(array instanceof Array)) {
        console.error('Введите массив');
        return false;
    }
    return true;
}

/* Простой поиск */
function simpleSearch(array, item) {
    if (checkArgs(array, item)) {
        var foundIndex = -1;

        for (var i = 0; i < array.length; ++i) {
            if (array[i] == item) {
                foundIndex = array[i];
                break;
            }
        }

        return foundIndex;
    }
}

/* Бинарный поиск */
function binarySearch(array, item) {
    if (checkArgs(array, item)) {
        var foundIndex = -1;
        var low = 0;
        var high = array.length - 1;
        var midIndex;
        var midValue;

        while (low <= high) {
            midIndex = Math.floor((low + high) / 2);
            midValue = Number(array[midIndex]);

            if (midValue == item) {
                foundIndex = midIndex;
                break;
            } else if (isNaN(midValue)) {
                throw new Error('Элемент массива не является числом');
            } else if (midValue > item) {
                high = midIndex - 1;
            } else if (midValue < item) {
                low = midIndex + 1;
            }
        }

        return foundIndex;
    }
}
