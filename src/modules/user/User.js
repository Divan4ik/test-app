export default class User
{
  constructor(name) {
      this.name = name;
  }

  greeting() {
    console.log(`${this.name} says: "Hi"`);
  }
}
