/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors ****CORRECTED*****
// ============================================

const validBookingJSON =  //changed to valid
  {
    "hotelName": "Grand City Hotel",
    "checkInDate": "2024-05-15",  //added comma after date to move to the next line of code
    "checkOutDate": "2024-05-20",
  
      "guests": [
      {
      "name": "Alice Johnson",  //added double quotes to name to represent a key - value pair 
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": null,  //added null instead of undefined - undefined does not work in JSON
      "email": "bob.smith@example.com"
    }
  ],
    "roomDetails": {
    "type": "Suite",
      "pricePerNight": 200,
        "amenities": ["WiFi", "Breakfast", "Parking"] //removed comma after parking, no need for that unless some amenities were missing
      }
  }


// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?
*/


// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?

  I created a json file so i can see it better then went line by line looking to see why the next line wasnt reading. 

2️⃣ How did you confirm that your corrected JSON file was valid?

  I used the reccomended links in our practice http://codebeautify.org/jsonvalidator if it passesd i know it works

3️⃣ Which errors were the most difficult to spot? Why?

  Simple syntax errors like commas, the are small and harder to see.

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)

   Syntax highlighting in JSON helps us but triggering a error if the code doesnt seem to match what context we are using.
   linters are about the same, when we add a opeining bracket but dont close it, it will turn red.
   I have aso seen it if I misspell a keyword im usimg in a different line it will indicate that it is empty or doesnt connect to anything. 
   these are all great tools to help correct simple errors. 
*/
