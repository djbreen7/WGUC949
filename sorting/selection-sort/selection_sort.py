def selection_sort(numbers):
    index = 0

    while index < len(numbers):
        minIndex = index

        for idx in range(index, len(numbers)):
            if (numbers[idx] < numbers[minIndex]):
                minIndex = idx

        temp = numbers[index]
        numbers[index] = numbers[minIndex]
        numbers[minIndex] = temp
        index += 1
    
    return numbers

# Test
print(selection_sort([5,3,7,2,9,1]))
