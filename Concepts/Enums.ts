// Numeric Enum
enum Direction {
    Up,
    Down,
    Left,
    Right
}

console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);



// String Enums
enum Dir{
    Up="UP",
    Down="Down",
    Left="Left",
    Right="Right"
}

console.log(Dir.Up);
console.log(Dir.Down);
console.log(Dir.Left);
console.log(Dir.Right);



// Heterogeneous Enums
enum Result{
    Success="SUCCESS",
    Failure=0
}

console.log(Result.Success);
console.log(Result.Failure);