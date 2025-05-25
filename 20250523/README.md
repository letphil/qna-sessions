# qna session for 2025 05 23

- firebase questions?
  firebase is a BaaS

- model documentation?

  Users:
  \_id : string
  username : string
  name : string
  profilePicture : string
  age : number

```js
class User {
  constructor(_id, username, name, profilePicture, age) {
    this._id = _id;
    this.username = username;
    this.name = name;
    this.profilePicture = profilePicture;
    this.age = age;
    this.createdAt = new Date.toISOString();
    this.updatedAt = new Date.toISOString();
    this.deleletedAt = null;
  }
}
```
