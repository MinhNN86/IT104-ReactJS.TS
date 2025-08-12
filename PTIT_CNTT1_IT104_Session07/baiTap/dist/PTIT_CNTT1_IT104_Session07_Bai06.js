class Account {
    id;
    username;
    password;
    isLogin;
    role;
    constructor(id, username, password, role) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    login() { }
    logout() {
        if (this.isLogin) {
            console.log("Đăng xuất thành công");
            this.isLogin = false;
        }
        else {
            console.log("Chưa đăng nhập");
        }
    }
}
class userAcc extends Account {
    status;
    constructor(id, username, password, role, status) {
        super(id, username, password, role);
        this.status = status;
    }
    login() {
        if (this.status === "active") {
            this.isLogin = true;
            console.log("Đăng nhập thành công");
        }
        else if (this.status === "banned") {
            console.log("Tài khoản đã bị khoá! không thể đăng nhập");
        }
    }
}
class adminAcc extends Account {
    constructor(id, username, password) {
        super(id, username, password, "admin");
    }
    banUser(userId, userList) {
        const user = userList.find((u) => u.id === userId);
        if (user) {
            user.status = "banned";
            console.log("Đã khoá người dùng");
        }
        else {
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
export {};
