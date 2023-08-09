function matchFinder(str1, str2) {
    // যদি দুটি স্ট্রিং সঠিকভাবে প্রদান করা হয়
    if (typeof str1 === 'string' && typeof str2 === 'string') {
        // যদি কোনো একটি স্ট্রিং খালি হয়
        if (str1.length === 0 || str2.length === 0) {
            return "please provide a positive number";
        }

        for (let i = 0; i < str1.length; i++) {
            if (str2.endsWith(str1.substring(i))) {
                return true;
            }
        }
        return false;
    } else {
        return "please provide a positive number";
    }
}

// উদাহরণ 1
const string1 = "abcdef";
const string2 = "xyzabcdef";
const result1 = matchFinder(string1, string2);

console.log(result1)

// উদাহরণ 2
const result2 = matchFinder("", "xyzabcdef");
console.log(result2);

