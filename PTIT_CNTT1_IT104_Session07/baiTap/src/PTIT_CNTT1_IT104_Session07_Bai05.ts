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

const user1 = new userAcc(1, "alice", "123456", "user", "active");
const user2 = new userAcc(2, "bob", "abcdef", "user", "banned");

user1.login();
user1.logout();

user2.login();
user2.logout();
