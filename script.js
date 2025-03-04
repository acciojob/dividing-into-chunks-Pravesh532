const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
let result = [];
	let subArray =[];
	let subarraySum = 0;
	 for(let num of arr){
		 if(subarraySum + num > n) {
			 arr.push(subArray);
			 subarraySum = 0;
			 subArray =[];
		 } 
		 subarraySum += num;
		 subArray.push(num); 
		 
		 
	 }  
	if(subArray.length > 0){
		result.push(subArray);
	}
	
   
		
	   
	   
	   
   }
	};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
