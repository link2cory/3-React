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
    console.log(`attempting to register student ${student.email} to the bootcamp ${this.name}...`);
    // check if this student already exists
    if (
      this.students.filter(
        elem => (elem.email == student.email)
      ).length === 0
    ) {
      console.log('Success');
      this.students.push(student);
    } else {
      console.log('Failure: student is already registered');
    }

    return this.students;
  }
}
