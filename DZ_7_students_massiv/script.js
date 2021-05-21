function averageGroupMark() {
  //sum - сумма оценок всех студентов
  //commonLenght - общее количество оценок
    let sumPoints = 0, commonLenght = 0;
    
    students.forEach(function sumMurksDate(student) {
      commonLenght += student.marks.length;
      student.marks.forEach(function(mark) {
        sumPoints += mark;
      })
    })      
      // console.log(sumPoints + ' ' + commonLenght + ' ' + (sumPoints/commonLenght));
    
      return sumPoints;
      }
  
      const groupMark = averageGroupMark();  
      alert(groupMark);




  const groupMark = averageGroupMark();  
  alert(groupMark);

const averageMark = averageStudentMark(1);
function averageStudentMark(numberStudent) {
  let sumStudentMark = 0;
  students[numberStudent].marks.forEach(function(mark) {
    sumStudentMark += mark; // считаю сумму оценок студента под номером два (указан (1))
    // console.log(sumStudentMark);       
  })
  return sumStudentMark/students[numberStudent].marks.length;
}
alert(averageMark);