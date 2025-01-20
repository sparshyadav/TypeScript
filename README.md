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
* Create an interface Company with the following structure:
1. name (string, required)
2. employees (array of Employee objects, required)
    - The Employee interface should include:
    1. id (number, readonly)
    2. details (nested interface with name and optional department)
    - Write a function to add new employees to the Company, ensuring that readonly constraints are maintained.
* Design an interface DynamicObject where properties are optional, but all string keys should be readonly. Implement a function that takes a DynamicObject and attempts to modify its properties to demonstrate the readonly behavior.
* Create two interfaces: Vehicle and ElectricVehicle.
Vehicle should include brand, model, and year.
ElectricVehicle should extend Vehicle and add batteryCapacity and chargingTime.
Implement a function that calculates the average charging time for a list of ElectricVehicle objects.

**Object Oriented Programming**
* Create a BankAccount class with the following features:
1. Properties: accountNumber (readonly), accountHolder (public), and balance (private).
2. Methods:
    - deposit(amount: number): Adds the specified amount to the balance.
    - withdraw(amount: number): Deducts the specified amount if sufficient balance is available.
    - getBalance(): Returns the current balance.
    - Use a readonly modifier for accountNumber.
* Create an abstract class Employee with the following:
1. Properties: name (public), age (protected), salary (protected).
2. Methods:
    - Abstract method calculateBonus().
    - Concrete method getDetails() to display employee details.
3. Create two subclasses Manager and Developer. 4. 4. Implement the calculateBonus() method:
    - Managers get a 20% bonus on their salary.
    - Developers get a 10% bonus on their salary.
* Create a Product class with the following:
1. Properties: name, price, and discount (all private).
2. Getters for all properties.
3. A setter for price to ensure it is non-negative.
* Write a static class MathUtils that includes methods for:
1. Calculating the factorial of a number.
2. Finding the greatest common divisor (GCD) of two numbers.
* Create an interface Vehicle with properties brand, model, and year. Create a class Car that implements this interface and adds:
1. A property fuelType.
2. A method drive() that logs the car's brand and fuel type. Create another class ElectricCar that extends Car and overrides drive() to mention the battery capacity.

**Generics**
* Create a generic Stack class that supports push, pop, and peek operations. The stack should work only with types that extend a custom Printable interface with a print() method.
* Create a generic class KeyValueStorage that can store key-value pairs. Provide methods to add, get, and remove items.
* Create a generic interface PaginatedResponse<T> to represent paginated API responses. Use it to type an API response containing user data.
* Create a generic function filterArray that filters elements from an array based on a condition. The function should work with any type of array.












