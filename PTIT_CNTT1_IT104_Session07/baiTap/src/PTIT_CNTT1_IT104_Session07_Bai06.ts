class Account {
  id: number;
  username: string;
  password: string;
  isLogin: boolean;
  role: string;

  constructor(id: number, username: string, password: string, role: string) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.isLogin = false;
    this.role = role;
  }

  login(): void {}

  logout(): void {
    if (this.isLogin) {
      console.log("Đăng xuất thành công");
      this.isLogin = false;
    } else {
      console.log("Chưa đăng nhập");
    }
  }
}

class userAcc extends Account {
  status: "active" | "banned";

  constructor(
    id: number,
    username: string,
    password: string,
    role: string,
    status: "active" | "banned"
  ) {
    super(id, username, password, role);
    this.status = status;
  }

  login(): void {
    if (this.status === "active") {
      this.isLogin = true;
      console.log("Đăng nhập thành công");
    } else if (this.status === "banned") {
      console.log("Tài khoản đã bị khoá! không thể đăng nhập");
    }
  }
}

class adminAcc extends Account {
  constructor(id: number, username: string, password: string) {
    super(id, username, password, "admin");
  }
  banUser(userId: number, userList: userAcc[]): void {
    const user = userList.find((u) => u.id === userId);
    if (user) {
      user.status = "banned";
      console.log("Đã khoá người dùng");
    } else {
      console.log("Không tìm thấy người dùng");
    }
  }
}

const u1 = new userAcc(1, "alice", "123456", "user", "active");
const u2 = new userAcc(2, "bob", "abcdef", "user", "active");

const admin = new adminAcc(100, "admin01", "adminpass");

u1.login();

admin.banUser(1, [u1, u2]);
u1.login();
