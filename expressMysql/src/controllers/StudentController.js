const service = require("../services/StudentService");

class StudentController {
  async listStudent(req, res) {
    try {
      const students = await service.getListStudent();

      res.status(200).json(students);
    } catch (error) {
      console.error(error);
    }
  }
  async findStudentById(req, res) {
    try {
      const { id } = req.params;
      const student = await service.findStudentById(id);
      if (!student) {
        return res.status(404).json({ message: "not found student" });
      }
      res.status(200).json(student);
    } catch (error) {
      res.status(404).json({ error: "not found student" });
    }
  }
  async createStudent(req, res) {
    try {
      const student = req.body;
      const studentCreate = await service.createStudent(student);

      res.status(200).json(studentCreate);
    } catch (error) {
      res.status(500).json({ error: "error" });
    }
  }

  async updateStudent(req, res) {
    try {
      const { id } = req.params;
      const newStudent = req.body;

      const student = await service.updateStudent(id, newStudent);

      res.status(200).json(student);
    } catch (error) {
      res.status(404).json({ message: "student not found" });
    }
  }

  async findStudentByName(req, res) {
    try {
      const { name } = req.query;
      const student = await service.findStudentByName(name);
      res.status(200).json(student);
    } catch (error) {
      res.status(404).json({ error: "not found student" });
    }
  }

  async deleteStudent(req, res) {
    try {
      const { id } = req.params;
      await service.deleteStudent(id);
      res.status(200).json({ message: "delete is success" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

module.exports = new StudentController();
