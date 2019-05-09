class Person {
  public name: string;
  public surname: string;
  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }
}

class SuperHero extends Person {
  public superpower: string;

  constructor(name: string, surname: string, superpower: string) {
    super(name, surname);
    this.superpower = superpower;
  }
}
