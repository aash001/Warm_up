function forEach(array, functionToApply) {
    for (let element of array) {
      functionToApply(element)
    }
  }
  
  function logIt(element) {
    console.log(element)
  }
   
  function map (){
    const numbers = [1,2,3]
    return numbers.map(number => number * 2)
  };
  console.log(map());

  function find (){
    const groceryList = ['carrots', 'peas', 'brown rice', 'apples']
    return groceryList.find(item => item === 'apples');
  }
  console.log(find());

function filter(){
    const names = [{
      firstName: "Kimberly",
      lastName: "Doe",
},{
      firstName: "Elaine",
      lastName: "Smith",
}]
      return names.filter(person => person.lastName.length === 3)  
}
console.log(filter())

function reduce() {
  const names = [{
    firstName: "Kimberly",
    lastName: "Doe",
},{
    firstName: "Elaine",
    lastName: "Smith",
}]

  return names.reduce(person => person.lastName)

}
console.log(reduce())