import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Iter "mo:base/Iter";
import Debug "mo:base/Debug";
import Principal "mo:base/Principal";

actor Contador {
  type User = {
    nombre : Text;
    telefono : Text;
    correo : Text;
    direccion : Text;
    author : Principal;
  };

  let userList = HashMap.HashMap<Text, User>(0, Text.equal, Text.hash);
  stable var user_id : Nat = 0;

  private func generar_id() : Nat {
    user_id += 1;
    return user_id;
  };

  public shared ({ caller }) func registrar_usuario(
    nombre : Text,
    telefono : Text,
    correo : Text,
    direccion : Text,
  ) : async Nat {
    let user : User = {
      nombre = nombre;
      telefono = telefono;
      correo = correo;
      direccion = direccion;
      author = caller;
    };
    let id = generar_id();
    userList.put(Nat.toText(id), user);
    Debug.print("Usuario registrado con ID: " # Nat.toText(id));
    return id;
  };

  public query func obtener_usuario(id : Text) : async ?User {
    userList.get(id);
  };

  public func actualizar_usuario(
    id : Text,
    nombre : Text,
    telefono : Text,
    correo : Text,
    direccion : Text,
  ) {
    let user : ?User = userList.get(id);
    switch (user) {
      case (null) { Debug.print("Usuario no encontrado") };
      case (?currentUser) {
        let newUser : User = {
          nombre = nombre;
          telefono = telefono;
          correo = correo;
          direccion = direccion;
          author = currentUser.author;
        };
        userList.put(id, newUser);
        Debug.print("Usuario actualizado");
      };
    };
  };

  public func borrar_usuario(id : Text) : async ?User {
    userList.remove(id);
  };
};
