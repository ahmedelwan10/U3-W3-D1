class User {
    constructor(firstName, lastName, age, location) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.location = location;
    }
  
    compareAge(otherUser) {
      if (this.age > otherUser.age) {
        return `${this.firstName} is older than ${otherUser.firstName}`;
      } else if (this.age < otherUser.age) {
        return `${this.firstName} is younger than ${otherUser.firstName}`;
      } else {
        return `${this.firstName} and ${otherUser.firstName} are the same age`;
      }
    }
  }
  

  const user1 = new User("John", "Doe", 30, "New York");
  const user2 = new User("Alice", "Smith", 25, "Los Angeles");
  

  const ageComparison = user1.compareAge(user2);
  console.log(ageComparison);                               
  