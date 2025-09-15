import axios from "axios";

export default function PTIT_CNTT1_IT104_Session29_Bai04() {
  const getAllStudent = async (): Promise<void> => {
    try {
      const response = await axios.get("http://localhost:3000/students");
      console.log(response.data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  getAllStudent();
  return <div></div>;
}
