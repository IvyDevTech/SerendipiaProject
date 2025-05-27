import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Iter "mo:base/Iter";
import Debug "mo:base/Debug";
import Principal "mo:base/Principal";

actor Contador {
  // Estructura/Struct
  type Post = {
    message : Text; // Campos/Fields
    author : Principal;
  };

  //let arreglo: [Post] = [{ message = "Hola!"; author = "Isaac" }, { message = "Adios!"; author = "David" }];

  let postList = HashMap.HashMap<Text, Post>(0, Text.equal, Text.hash);
  stable var post_id : Nat = 0;

  // Generar ID
  private func generar_id() : Nat {
    post_id += 1;
    return post_id;
  };

  // Crear un post nuevo
  public shared ({ caller }) func crear_post(message : Text) {
    let post : Post = { message; author = caller };

    postList.put(Nat.toText(generar_id()), post);
    Debug.print("Post creado");
  };

  // Obtener post en base a un id
  public query func obtener_post(id : Text) : async ?Post {
    postList.get(id);
  };

  // Obtener todos los posts
  public query func obtener_posts() : async [(Text, Post)] {
    Iter.toArray(postList.entries());
  };

  // Editar un post
  public func actualizar_post(id : Text, new_message : Text) {
    let post : ?Post = postList.get(id);

    switch (post) {
      case (null) {
        Debug.print("Post no encontrado");
      };
      case (?currentPost) {
        let newPost : Post = {
          message = new_message;
          author = currentPost.author;
        };
        postList.put(id, newPost);

        Debug.print("Post actualizado");
      };
    };
  };

  // Borrar un post
  public func borrar_post(id : Text) : async ?Post {
    postList.remove(id);
  };

};
