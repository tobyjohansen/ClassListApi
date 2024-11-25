const InMemoryClassRepository = require('../../../Infrastructure/repositories/InMemoryClassRepository');
const InMemoryStudentRepository = require('../../../Infrastructure/repositories/InMemoryStudentRepository')

const updateSclassUseCase = async (id, {name, listOfStudentsID}) => {
    const sclass = await InMemoryClassRepository.findById(id);
    sclass.name = name;
    sclass.students = await Promise.all(listOfStudentsID.map(id => InMemoryStudentRepository.findById(id)));

    await InMemoryClassRepository.update(sclass);
    return sclass;
}

module.exports = updateSclassUseCase;
