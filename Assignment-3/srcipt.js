console.log("Question 1");
const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

/*

const i = 2; // Specify the index where you want to check for a vowel

// Function to check if a vowel is present at index `i`
const isVowelAtIndex = (state, index) => {
    if (index >= state.length) return false; // Avoid out-of-bound errors
    return /[AEIOUaeiou]/.test(state.charAt(index)); // Check character at `index`
};

// Filter out states where a vowel is present at index `i`
const filteredStates = states.filter(state => !isVowelAtIndex(state, i));

console.log(filteredStates);
*/

const filteredStates = states.filter(state => !/^[AEIOU]/i.test(state))

console.log(filteredStates);

console.log("Question 2");
let str = 'I love my India';

// Split the string into words, reverse the order, and join them back
let reversedStr = str.split(' ').reverse().join(' ');

console.log(reversedStr);

console.log("Question 3");
let string = 'INDIA'.split(''); // Convert string to array of characters

string.splice(3, 0, 'O', 'N', 'E', 'S'); // Insert 'O', 'N', 'E', 'S' at index 3

let output = string.join(''); // Convert array back to string

console.log(output);

console.log("Question 4");
function countVowelsAndConsonants(str) {
    str = str.toLowerCase(); // Convert to lowercase to handle case-insensitivity
    let vowels = 'aeiou';
    let vowelCount = 0;
    let consonantCount = 0;
    
    for (let char of str) {
        if (/[a-z]/.test(char)) { // Check if character is a letter
            if (vowels.includes(char)) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
    }
    
    return { vowelCount, consonantCount };
}

// Example string with at least 20 characters
let st = "Machine learning is amazing!";
let result = countVowelsAndConsonants(st);

console.log(`Vowels: ${result.vowelCount}`);
console.log(`Consonants: ${result.consonantCount}`);


console.log("Question 5");
function  correctfn(){
    let str = "following word is wrong";
    let res = str.replace(/wrong/g, "correct");
    console.log(res);
}

correctfn();

console.log("Question 6");
inputArr = [1,2,3,9,10,7,5,4,3]
let ans = inputArr.filter(arr => arr > 5);

console.log(ans);

console.log("Question 7");
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
    ];

const output1 = students.map(student => {
    const average = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
    return { name: student.name, average };
});

console.log(output1);

console.log("Question 8");
NumberSum = (num) => {
    let sum = 0;
    while(num > 9){
        sum = 0;
        while(num){
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        num = sum;
    }
    return sum;
}

console.log(NumberSum(456));

console.log("Question 9");
let s = "lorem ipsum is simply dummy text of the printing and typesetting industry.";
let words = s.split(' ');
console.log(words.length);

console.log("Question 10");
function reverseString(str) {
    return str.split('').reverse().join('');
}

let str2 = "Hello";
console.log(reverseString(str2));

console.log("Question 11");
const students1 = {
    student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
};

const output2 = Object.entries(students1).map(([student, subjects]) => {
    const scores = Object.values(subjects); // Extract subject scores
    const average = Math.floor(scores.reduce((sum, score) => sum + score, 0) / scores.length);
    return { [student]: { average } }; // Return the required format
});

console.log(output2);