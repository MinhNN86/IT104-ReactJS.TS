import { Box, Button, Modal, Typography } from "@mui/material";
import type { Student } from "../../../interfaces/student.interface";
import { useAppDisPath } from "../../../hooks/useCustomRedux";
import { removeStudent } from "../../../slices/studentSlices";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface ModalDeleteProps {
  open: boolean;
  onClose: () => void;
  studentDelete: Student | null;
}

const ModalDelete: React.FC<ModalDeleteProps> = ({
  open,
  onClose,
  studentDelete,
}) => {
  const dispatch = useAppDisPath();
  const handleDelete = () => {
    dispatch(removeStudent(studentDelete));
    onClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Xác nhận xoá sinh viên
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Bạn có chắc chắn muốn xoá sinh viên này?
          </Typography>
          <div className="mt-5 flex justify-end gap-3">
            <Button variant="outlined" onClick={onClose}>
              Huỷ
            </Button>
            <Button variant="contained" color="error" onClick={handleDelete}>
              Xoá
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalDelete;
