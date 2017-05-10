/* Быстрая сортировка (неоптимальна по памяти) */
function qsortPivotFirst(array) {
    if (array.length <= 1) {
        return array;
    } else {
        var pivot = array[0];
        var less = [];
        var equalOrMore = [];

        for (var i = 1; i < array.length; i++) {
            if (array[i] < pivot) {
                less.push(array[i]);
            } else if (array[i] >= pivot) {
                equalOrMore.push(array[i]);
            }
        }

        return qsortPivotFirst(less).concat(pivot, qsortPivotFirst(equalOrMore));
    }
}

function qsortPivotMiddle(array) {
    if (array.length <= 1) {
        return array;
    } else {
        var pivot = array[Math.floor(array.length / 2)];
        var less = [];
        var more = [];

        for (var i = 0; i < array.length; i++) {
            if (array[i] < pivot) {
                less.push(array[i]);
            } else if (array[i] > pivot) {
                more.push(array[i]);
            }
        }

        return qsortPivotMiddle(less).concat(pivot, qsortPivotMiddle(more));
    }
}

/* Быстрая сортировка (оптимизация памяти) */
function qsortOptimized(array, low, high) {
    var i = low || 0;
    var j = high || (array.length - 1);
    var pivotIndex = Math.floor((low + high) / 2);
    var pivotValue = array[pivotIndex];

    if (!(low === high)) {
        while (i < j) {
            while (array[i] < pivotValue) {
                ++i;
            }

            while (array[j] > pivotValue) {
                --j;
            }

            if (i <= j) {
                var tempValue = array[i];
                array[i] = array[j];
                array[j] = tempValue;

                i++;
                j--;
            }
        }

        if (low < j) {
            qsortOptimized(array, low, j);
        }

        if (i < high) {
            return qsortOptimized(array, i, high);
        }
    }

    return array;
}
