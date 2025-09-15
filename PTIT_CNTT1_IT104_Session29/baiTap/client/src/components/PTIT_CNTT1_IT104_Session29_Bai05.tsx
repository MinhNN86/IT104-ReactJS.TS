import axios from "axios";

export default function PTIT_CNTT1_IT104_Session29_Bai05() {
  const idSearch = window.prompt("Nhập ID cần tìm: ");
  const getStudentById = async (id: string): Promise<void> => {
    try {
      const response = await axios.get(
        `http://localhost:3000/students/${Number(id)}`
      );
      console.log(response.data);
    } catch {
      console.log("Không tìm thấy học sinh");
    }
  };

  if (idSearch !== null) {
    getStudentById(idSearch);
  }
  return <></>;
}
