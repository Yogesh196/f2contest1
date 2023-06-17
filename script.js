let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
     let developers = arr
      .filter(arr => arr.profession === "developer")
      .map(arr => arr.name);
    console.log(developers);
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    let developers = [];
    arr.forEach(arr => {
      if (arr.profession === "developer") {
        developers.push(arr.name);
      }
    });
    console.log(developers);
  }
  
  function addData() {
    //Write your code here, just console.log
    let newId= arr.length;
    let newArr={
        id: newId+1 ,
        name:"Yogesh",
        age: "24",
        profession: "intern"
    };
    arr.push(newArr);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr.filter((element) =>{
        if(element.profession ==="admin"){
            console.log(element);
        }
    })

  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let employees = [
        { id: 5, name: "raj", age: "19", profession: "developer" },
        { id: 6, name: "sakshi", age: "33", profession: "admin" },
        { id: 7, name: "adi", age: "22", profession: "developer" }
    ];
      
    let addArr = arr.concat(employees);
      
    console.log(addArr);

  }