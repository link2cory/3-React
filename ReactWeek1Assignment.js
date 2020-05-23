class Student {
  constructor(name, email, community) {
    this.name = name;
    this.email = email;
    this.community = community;
  }
}

class Bootcamp {
  constructor(name, level, students = []) {
    this.name = name;
    this.level = level;
    this.students = students;
  }

  registerStudent(student) {
    // check if this student already exists
    if (
      this.students.filter(
        elem => (elem.email == student.email)
      ).length === 0
    ) {
      this.students.push(student)
    }
  }
}
