{
//  Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

// Example:

// Input: "I love typescript", "typescript"
// Output: 1
// // Sample Input:

// countWordOccurrences("I love typescript", "typescript");



// // Sample Output:

// 1;


   type ifMatch = string;

   function countWordOccurrences(sentence: ifMatch, word: ifMatch): number {
     
         const regex = new RegExp(`\\b${word}\\b`, 'gi');
         const matches = sentence.match(regex);
         return matches ? matches.length : 0;
      
         
            
   }


      console.log(countWordOccurrences("I love typescript", "typescript")); 
   


  
}