class Student {
  constructor(id, firstName, lastName, classId, email, phoneNumber, dob) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.classId = classId;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.dob = dob;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }

  getTinhTuoiTheoNam() {
    const dob = new Date(this.dob);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const diffMonths = today.getMonth() - dob.getMonth();
    if (
      diffMonths < 0 ||
      (diffMonths === 0 && today.getDate() < dob.getDate())
    ) {
      age--;
    }
    return age;
  }

  getTinhTuoiTheoNgay() {
    const dob = new Date(this.dob);
    const today = new Date();
    const diffTime = Math.abs(today - dob);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }
}

const students = [
  new Student(
    1,
    "Trương",
    "Nhân",
    1,
    "Truongnhan@gmail.com",
    "0123456789",
    "2004-05-03"
  ),
  new Student(
    2,
    "Nguyễn",
    "Lợi",
    1,
    "Nguyenloi@gmail.com",
    "0123456789",
    "2003-05-21"
  ),
  new Student(3, "Pu", "Tin", 1, "Putin@gmail.com", "0123456789", "1994-06-17"),
  new Student(
    4,
    "Quang",
    "Cường",
    1,
    "Quangcuong@gmail.com",
    "0123456789",
    "2002-08-06"
  ),
  new Student(
    5,
    "Hùng",
    "Thịnh",
    1,
    "Hungthinh@gmail.com",
    "0123456789",
    "2003-11-03"
  ),
];

students.sort((a, b) => a.getTinhTuoiTheoNgay() - b.getTinhTuoiTheoNgay());

console.log(
  "Danh sách sinh viên theo thứ tự sinh viên có số tuổi từ thấp đến cao:"
);
students.forEach((student) => {
  console.log(
    `${student.getFullName()} (${student.getTinhTuoiTheoNgay()} ngày tuổi)`
  );
});

console.log(
  `Thông tin chiều rộng và chiều cao của màn hình: ${window.innerWidth} x ${window.innerHeight}`
);
