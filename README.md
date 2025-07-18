String Calculator (TDD Style)

Hey there!  
This is a project where I built a String Calculator in JavaScript — using pure Test-Driven Development.

Basically, you give it a string like "1,2,3" or even fancy stuff like "//[***]\n1***2***3", and it returns the sum.

 What it handles: It takes the string as input and returns the sum 

- "" → 0  
- "4" → 4  
- "1,2" → 3  
- Newlines: "1\n2,3" → 6  
- Custom delimiters: "//;\n1;2" → 3  
- Throws on negative numbers (for good reason)  
- Ignores numbers > 1000  
- Handles crazy delimiters like "//[***]\n1***2***3"  
- Also works with multiple delimiters: "//[*][%]\n1*2%3" → 6  

 How to run :-

1. npm install 
2. npm run test OR npm test
