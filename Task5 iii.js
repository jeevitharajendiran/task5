class Person {
    constructor(name, email, city) {
      this.name = name;
      this.email = email;
      this.city = city;
    }
  
    displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Email: ${this.email}`);
      console.log(`City: ${this.city}`);
    }
  }
  

  const person1 = new Person('jeevitha', 'jeevi@gmail.com', 'coimbatore');
  const person2 = new Person('Babu', 'babu@gmail.com', 'chennai');
  

  console.log('Person-1 Details:');
  person1.displayDetails();
  

  console.log('\nPerson-2 Details:');
  person2.displayDetails();