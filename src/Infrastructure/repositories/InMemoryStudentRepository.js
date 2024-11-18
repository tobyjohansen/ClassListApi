const students = [];

class InMemoryStudentRepository {
    async findAll() {
        return students;
    }

    async findById(id) {
        return students.find(student => student.id === id);
    }

    async save(student) {
        students.push(student);
    }

    async update(updatedStudent) {
        const index = students.findIndex(student => student.id === updatedStudent.id);
        students[index] = updatedStudent;
    }

    async delete(id) {
        const index = students.findIndex(student => student.id === id);
        students.splice(index, 1);
    }
}

module.exports = new InMemoryStudentRepository;