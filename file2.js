function greet(name,callback) {
    console.log("Hello " + name)
    callback()
}
greet("John", () => console.log("Good Morning"));
