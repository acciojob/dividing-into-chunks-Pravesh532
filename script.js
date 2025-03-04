const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
let result = [];
    let subarray = [];
    let currentSum = 0;

    for (let num of arr) {
        if (currentSum + num > n) {
            // If the current subarray has elements, push it to result
            if (subarray.length > 0) {
                result.push(subarray);
            }
            // Start a new subarray
            subarray = [num];
            currentSum = num;
        } else {
            // Add number to the current subarray
            subarray.push(num);
            currentSum += num;
        }
    }

    // Push the last subarray if it has elements
    if (subarray.length > 0) {
        result.push(subarray);
    }

    return result;
}
	
	
	};

const n = promp("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
