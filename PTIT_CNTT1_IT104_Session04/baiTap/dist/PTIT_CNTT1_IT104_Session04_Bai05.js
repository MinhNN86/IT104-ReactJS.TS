let staff1 = {
    name: "Nguyễn Văn A",
    age: 28,
    employeeId: "EMP001",
    department: "Kế toán",
};
const printStafInfo = (staff) => {
    console.log(`${staff.name}(${staff.age} tuổi), Mã nhân viên: ${staff.employeeId} - Phòng: ${staff.department}`);
};
printStafInfo(staff1);
export {};
