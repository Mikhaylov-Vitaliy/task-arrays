/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
	if (!str) {
        return "";
    }
    let strArray = str.split(',');
    let numArray = [];
    for (let i = 0; i < strArray.length; i++) {
        numArray.push(Number(strArray[i]));
    }
    numArray.sort(function(a, b) {
        return a - b;
    });
    return numArray.join(',');
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
	let filteredResult = arr.filter(function(num) {
        if (num <= 100) {
            return true;
        } else {
            return false;
        }
    });
    return filteredResult;
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
	const result = [];
	for(let i = 0; i < 5; ++i) {
		result.push(array1[i]);
		result.push(array2[i]);
	}
	return result;
}
