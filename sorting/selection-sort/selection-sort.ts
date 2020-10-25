function selectionSort(numbers: Array<number>): Array<number> {
    for (let i = 0; i < numbers.length; i++) {
        let minIndex = i;
        
        for (let j = i; j < numbers.length; j++) {
            if (numbers[j] < numbers[minIndex]) {
                minIndex = j;
            }
        }

        const temp = numbers[i];
        numbers[i] = numbers[minIndex];
        numbers[minIndex] = temp;
    }

    return numbers;
}

// Test
console.log(selectionSort([5,3,7,2,9,1]));
