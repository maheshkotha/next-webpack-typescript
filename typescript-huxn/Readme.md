# Annotation
- Annotation are used to specify the data type of a variable, parameter, function return 
value, and other typeof values.
- Annotations help developers catch errors early in development by allowing to specify what type of values can be assigned to a given variable or passed as an argument to a function.


# Type Inference
- Type inference is a feature in typescript that allows the compailer to automatically determine the type of a variable based on its value.
- In other words, if you declare a variable without explicitly specifing its type, Typescript will try to infer the type based on the value you assign to it.

# Any Type
- Typescript has a special any type that can be used to represent any type. 
- When a variable is annotated with the any type, Typescript will allow it to have any value and disabel all type checking for that and its properties.

# Any Type - Warning
- When the any type can be useful certain situations, it should be used sparingly.
- Overuse of any can be lead to untyped code and make it harder to catch type-related bugs dureing development.
- It's generally better to use more specific types whenever possible to get the benefits of typescript's type checking. 


# Function Parameters Annotations
- Function parameters annotations in Typescript are used to specify the expected types of the parameters that a function takes.


# Never
- The never keyword is used to indicate that a function will not return anything, or that a variable can never have a value.

- The never keyword is uesed for indicating that certain values impossible. It can help catch errors at compile time isted of run time.
 

 # Array Types
 - Arrays are a type of object that can store multiple values of the same data type.
 - Arrays in Typescript are typed, which means you can specify the type of values that an array can hold.

  # Multi Dimentional Arrys
  - A multi dimentional array is an array that contains other arrays as its elements.
  - Multi dimentional arry can be defined using the same notation as one dimentional arrays, but nexted square brackets.

  
  # Objects
  - An object in Typescript is a struectured data type that represents a collection of properties, each with a key and an associated value.
  - The properties of an object can have specific types, and the object itself can be annotated with type.
  - often defined using an interface or a type alias.
  - Typescript uses structurl typing, meaning that the shape of an object (its structure or properties) is what matters for type compatibility.


  # Optional Properties 
  - You can make a certain properties are optional in an object type by adding a question mark(?) after the property name. 


  # Intersection Types
  - An Intersection type is a way to combine multiple types into a single type that includes all the properties and methods of each constituent type. An intersection type is denoted by the '&' symbol.

  # Unions Types
  - Unions are used to declare a type that can have one of several possible types. Unions are useful when we want to allow a variable or parameter to accept multiple types.

  - The syntax for defining a union type in Typescript uses the pipe symbol (|). 

  # Literal Types
  - Literal types are allow to you specify a value that can be only be one specific literal value.
  - This means that a variable with a literal type can only have one specific value and no other.

  # Enum Types
  - Enum is a way to define set of named constants. Enum allow you to define a collection of related values that can be used interchangbly in your code.
   
  - For example, let's say you're building a whether app and you want to define a set of possible whether conditions like "sunny", "cloudy", "rainy", and "snowy". You can define enum like this.

  enum Whethercondition {
    sunny,
    cloudy,
    rainy,
    snowy
  }

  In this example, Whethercondition is the name of enum, and each of the value is assigned an automatic numarical value starting from 0
   

  

# Access Modifiers
- In typescript, you can use access modifer to control the visibility of class members (properties and methods).
- Access modifiers determine the ways in which class members can be accessed from within and outside the class.

* There are three type of access modifiers in typescript
  - Public
  - Private
  - Protected

* * Public: Members marked as public can be accessed from anyware, both inside and outside the class.

* * Private: Members marked as private can only be accessed from within the class they are defined in

* * Protected: Members marked as protected can be accessed from within the class they are defined in, as well as any subclasses that extend the class.


# Getters and Setters
Getters and Setters are used to access and modify class properties. Getter and setter allow you to define a property in a class that looks like a simple variable from the outside but internally has additional logic for getting and setting the value.

# Interface
- Interface is a way to define a contract for the shape of an object.
- It specifies the properties and  their types that an object must have.
- Interfaces are a powerful tool for enforcing a certain structure in your code.

 - When interfaces are commonly used to define the sturcture of objects, they are not limited to just objects. Interface in Typescript can also be used to describe the shape of function and class.

 
