**Questions Solved**

**TypeScript Basics**
* You have the following code:
let value: any = "Hello, TypeScript!";
Use a type assertion to treat the value as a string and call the toUpperCase() method on it.
What happens if you incorrectly assert it as a number?
* Declare variables using let and const to store the following:
Your name (string)
Your age (number)
Whether you like TypeScript (boolean)

**Arrays**
* Create a readonly array of your favorite programming languages and try to modify it. What error do you get?
* Create a tuple where the second element (number) is optional. Show how to handle it safely.
* Write a function that accepts a tuple of [number, number] representing the dimensions of a rectangle and returns its area.
* Define a tuple type to represent a product in an online store, where the tuple contains:
The product name (string), The price (number), Whether it's in stock (boolean).

**Enum**
* Define both Numeric and String enums in TypeScript. Then, create a function that accepts either a numeric or a string enum value and logs a specific message based on the enum value. Implement the function and demonstrate its usage.
* Create a Calculator function that takes an enum value (Add, Subtract, Multiply, Divide) and two numbers, then performs the corresponding operation.

**Functions**
* Write a function that accepts a string and a boolean. If the boolean is true, the function should return an object containing the string and its length. If the boolean is false, it should return just the length of the string. Ensure the function enforces proper type safety with TypeScript.
* Write a function that:
1. Requires a title parameter.
2. Optionally accepts a subtitle.
3. Defaults the author parameter to "Anonymous".
4. Accepts an arbitrary number of tags using rest parameters.
    - The function should return a formatted string based on the input.
* Write a function that accepts a list of user objects (with id and name) as rest parameters and filters out users with duplicate ids. Ensure the function provides type safety for the rest parameters.
* Write a function that logs a message starting with a timestamp and accepts additional message parts as rest elements.
* Write a function that takes an array of numbers and returns the sum of all elements. Use type annotations.
* Write a function that accepts either a string or a number and returns the length of the string or the number of digits in the number.

**Interfaces**
* Define an interface Car with the following properties:
1. brand (readonly string)
2. model (readonly string)
3. color (optional string)
4. features (optional array of strings)
    - Write a function that takes a Car object and attempts to modify its properties. The function should handle missing optional properties gracefully and log appropriate messages.







