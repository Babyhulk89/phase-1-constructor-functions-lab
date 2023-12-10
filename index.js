// Scooter constructor function
function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
  }
  
  // Driver constructor function
  function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
  }
  
  // PickupLocation constructor function
  function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
  }
  
  // Example usage:
  const myScooter = new Scooter(2023, 'Red', 'Model X');
  const myDriver = new Driver('John Doe', 30, '5 years');
  const myPickupLocation = new PickupLocation('123 Main St', 'Cityville');
  