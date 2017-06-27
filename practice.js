//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      // The purpose of the this keyword is to establish context

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      // apply - apply binds the function to an object and invokes it stright away but you are able to pass in an array as
      // an argument.
      // call - call bincs the function to an object but invokes it straight away
      // bind - binds the function to an object but returns a copy of the function and must be stored in a variable before
      // being invoked.
      // default - sets the context of the fuction to the window object


  // 3) What is the difference between call and apply?

      //Answer
      // call and apply are exactly the same except for apply is used when passing in an array as an argument

  // 4) What does .bind do?

      //Answer
      // .bind binds the function to the context of an object but it returns a copy of the function and must be stored a variable 
      // then invoked.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
    var user = {
      username: "ikhem",
      email: "ikhem@gmail.com",
      getUsername: function(){
        return this.username;
      }
    }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getUsername();

//Next Problem


// Write a constructor function, including method definitions, which will make the following function invocations function properly.

  //Function Invocations Here
  function Car(make, model, year){
    this.make = make
    this.model = model
    this.year = year
    this.move = 0
    this.moveCar = function(){
      return this.move+=10;
    }
  }

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

//Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will increment the move property by 10. The move property will be added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here
  var getPriusYear = getYear.bind(prius)
  var getMustangYear = getYear.bind(mustang)


//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.bind(myUser); //Fix this
userName();

//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  //Answer Here
  // The getMyUsername of this is a global this. Therefore it will return the username from the parent object (window) which is undefined

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //Answer Here
  // It is bound to the parent object. In this case it is window


//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.