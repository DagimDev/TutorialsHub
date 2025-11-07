class Person {
  constructor(gender, rank) {
    this.gender = gender;
    this.rank = rank;
  }
}

class Student extends Person {
    constructor(name){
        this.name = name
    }
  showGender() {
    return this.gender;
  }
}

class RankedStudent extends Student {

    showName() {
        return this.name
    }
  showRank() {
    return this.rank;
  }
}

const NameOfStudentOne = new Student("Male", 1)
const RankedStudentOne = new RankedStudent("Male", 1)

const names = new RankedStudent("natty")
console.log(RankedStudent.showName())
console.log(NameOfStudentOne.showGender())
console.log(RankedStudentOne.showRank())