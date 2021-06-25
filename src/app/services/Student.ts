export class Student {
  fullName: string;
  age: number;
  birthDay: Date;
  ideality: string
  constructor(fullname: string, age: number, birthday: Date, ideality: string) {
    this.fullName = fullname;
    this.age = age;
    this.birthDay = birthday;
    this.ideality = ideality
  }
}
