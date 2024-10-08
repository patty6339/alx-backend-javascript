export default class HolbertonCourse {
    constructor(name, length, students) {
      this._name = HolbertonCourse._validateName(name);
      this._length = HolbertonCourse._validateLength(length);
      this._students = HolbertonCourse._validateStudents(students);
    }
  
    // Getter and setter for name
    get name() {
      return this._name;
    }
  
    set name(value) {
      this._name = HolbertonCourse._validateName(value);
    }
  
    // Getter and setter for length
    get length() {
      return this._length;
    }
  
    set length(value) {
      this._length = HolbertonCourse._validateLength(value);
    }
  
    // Getter and setter for students
    get students() {
      return this._students;
    }
  
    set students(value) {
      this._students = HolbertonCourse._validateStudents(value);
    }
  
    // Validation methods
    static _validateName(value) {
      if (typeof value !== 'string') {
        throw new TypeError('Name must be a string');
      }
      return value;
    }
  
    static _validateLength(value) {
      if (typeof value !== 'number') {
        throw new TypeError('Length must be a number');
      }
      return value;
    }
  
    static _validateStudents(value) {
      if (!Array.isArray(value) || !value.every((student) => typeof student === 'string')) {
        throw new TypeError('Students must be an array of strings');
      }
      return value;
    }
  }
  