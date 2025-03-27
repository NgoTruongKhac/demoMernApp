const { where, Op } = require("sequelize");
const Student = require("../models/student");

class StudentService {
  async getListStudent() {
    const students = await Student.findAll();
    return students;
  }

  async findStudentById(id) {
    const student = await Student.findByPk(id);
    return student;
  }

  async createStudent(student) {
    const student2 = await Student.create(student);
    return student2;
  }
  async findStudentByName(name) {
    const student = await Student.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
    });
    return student;
  }

  async updateStudent(id, newStudent) {
    const student = await Student.findByPk(id);
    await student.update(newStudent);
    return student;
  }
  async deleteStudent(id) {
    const deleteRes = await Student.destroy({
      where: {
        id: id,
      },
    });
    if (deleteRes === 0) throw new Error("student not found");
  }
}
module.exports = new StudentService();
