const students = [
    {
        id:10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
        id:11,
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7 ]
    },
    {
        id:12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8 ]
    },
    {
        id:13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9 ]
    }
]

const groupMark = averageGroupMark();  
alert(groupMark);
const averageMark = averageStudentMark(1);
alert(averageMark);


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
    
      return sumPoints/commonLenght;
      }
  
function averageStudentMark(numberStudent) {
  let sumStudentMark = 0;
  students[numberStudent].marks.forEach(function(mark) {
    sumStudentMark += mark; // считаю сумму оценок студента под номером два (указан (1))
    // console.log(sumStudentMark);       
  })
  return sumStudentMark/students[numberStudent].marks.length;
}