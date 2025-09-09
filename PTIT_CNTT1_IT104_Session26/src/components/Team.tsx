import { useParams } from "react-router-dom";

interface Team {
  id: string;
  name: string;
  members: number;
}

export default function Team() {
  const { teamId } = useParams(); // lấy giá trị từ URL

  const teamInfo: Team[] = [
    {
      id: "alpha",
      name: "Team Alpha",
      members: 5,
    },
    {
      id: "beta",
      name: "Team Beta",
      members: 7,
    },
    {
      id: "gamma",
      name: "Team Gamma",
      members: 4,
    },
  ];

  const info = teamInfo.find((team: Team) => team.id === teamId);

  if (!info) {
    return (
      <p>
        Không tìm thấy team: <b>{teamId}</b>
      </p>
    );
  }

  return (
    <div>
      <h3>{info.name}</h3>
      <p>Thành viên: {info.members}</p>
      <p>
        Mã team (param): <code>{teamId}</code>
      </p>
    </div>
  );
}
