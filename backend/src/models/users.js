const uuid = require("uuid");

class User {
  static get table() {
    return "usuario";
  }

  constructor(ObjUser) {
    this.id_usuario = uuid.v4();
    this.email_usuario = "";
    this.nome_usuario = "";
    this.senha_usuario = "";
    this.is_admin = 0;
    Object.assign(this, ObjUser);
  }
}

module.exports = User;
