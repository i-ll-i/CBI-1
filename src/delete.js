const { performance } = require('perf_hooks');

arre = [{ "name": "kiev", "url": "no" }, { "name": "nuremberg", "url": "no" }, { "name": "kiev", "url": "no" }, { "name": "kiev", "url": "no" }, { "name": "iprin", "url": "no" }, { "name": "moscow", "url": "no" }] 

function Clearing_an_array_of_duplicates ( array ) {

    let creating_a_bulkhead_array = Array.from(new Set(array.map(object => {return object[Object.keys(object)[0]];}))).map(city => {return {"city": city,"passed": false};});

    return array.filter(
        object => {
            for (let elem of creating_a_bulkhead_array) {
                if ( object[Object.keys(object)[0]] === elem["city"] && elem["passed"] !== true) {
                    creating_a_bulkhead_array[creating_a_bulkhead_array.indexOf(elem)]["passed"] = true;
                    return object;
                }
            }
        }
    );

}

function removeDuplicates(arr) {

    const result = [];
    const duplicatesIndices = [];

    // Перебираем каждый элемент в исходном массиве
    arr.forEach((current, index) => {

        if (duplicatesIndices.includes(index)) return;

        result.push(current);

        // Сравниваем каждый элемент в массиве после текущего
        for (let comparisonIndex = index + 1; comparisonIndex < arr.length; comparisonIndex++) {

            const comparison = arr[comparisonIndex];
            const currentKeys = Object.keys(current);
            const comparisonKeys = Object.keys(comparison);

            // Проверяем длину массивов
            if (currentKeys.length !== comparisonKeys.length) continue;

            // Проверяем значение ключей
            const currentKeysString = currentKeys.sort().join("").toLowerCase();
            const comparisonKeysString = comparisonKeys.sort().join("").toLowerCase();
            if (currentKeysString !== comparisonKeysString) continue;

            // Проверяем индексы ключей
            let valuesEqual = true;
            for (let i = 0; i < currentKeys.length; i++) {
                const key = currentKeys[i];
                if (current[key] !== comparison[key]) {
                    valuesEqual = false;
                    break;
                }
            }
            if (valuesEqual) duplicatesIndices.push(comparisonIndex);

        } // Конец цикла
    });
    return result;
}

let startTime = performance.now()

Clearing_an_array_of_duplicates( arre )

let endTime = performance.now()

console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)