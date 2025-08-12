class Comment {
    id;
    userId;
    content;
    replies;
    constructor(id, userId, content) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }
    addReply(reply) {
        this.replies.push(reply);
    }
}
class Post {
    id;
    userId;
    content;
    likes;
    comments;
    constructor(id, userId, content) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.likes = [];
        this.comments = [];
    }
    addLike(userId) {
        if (!this.likes.includes(userId)) {
            this.likes.push(userId);
        }
    }
    addComment(comment) {
        this.comments.push(comment);
    }
}
class User {
    id;
    posts;
    followers;
    constructor(id) {
        this.id = id;
        this.posts = [];
        this.followers = [];
    }
    createPost(postId, content) {
        const post = new Post(postId, this.id, content);
        this.posts.push(post);
        return post;
    }
    comment(post, commentId, content, parentComment) {
        const newComment = new Comment(commentId, this.id, content);
        if (parentComment) {
            parentComment.addReply(newComment);
        }
        else {
            post.addComment(newComment);
        }
    }
    follow(user) {
        if (!user.followers.includes(this)) {
            user.followers.push(this);
        }
    }
    likePost(post) {
        post.addLike(this.id);
    }
    viewFeed(followers) {
        console.log(`Feed của User ${this.id}: `);
        followers.forEach((user) => {
            user.posts.forEach((post) => {
                console.log(`Post ${post.id} của User ${user.id}: ${post.content}`);
            });
        });
    }
}
const alice = new User(1);
const bob = new User(2);
const charlie = new User(3);
const post1 = alice.createPost(101, "Hello world!");
bob.follow(alice);
bob.likePost(post1);
charlie.comment(post1, 201, "Nice post!");
bob.comment(post1, 202, "I agree!", post1.comments[0]);
bob.viewFeed([alice]);
console.log(post1);
export {};
