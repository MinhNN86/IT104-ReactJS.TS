type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: string;
  department: string;
};

type StaffMember = Person & Employee;

let staff1: StaffMember = {
  name: "Nguyễn Văn A",
  age: 28,
  employeeId: "EMP001",
  department: "Kế toán",
};

const printStafInfo = (staff: StaffMember): void => {
  console.log(
    `${staff.name}(${staff.age} tuổi), Mã nhân viên: ${staff.employeeId} - Phòng: ${staff.department}`
  );
};

printStafInfo(staff1);
