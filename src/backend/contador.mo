import Array "mo:base/Array";

actor {
    // Mapa para almacenar usuarios (ID -> {nombre, email})
    stable var usuarios : [var ?(Text, Text)] = [var];

    // Registrar un usuario y devolver el ID
    public func registrarUsuario(nombre : Text, email : Text) : async Nat {
        let id = usuarios.size();
        let newUsuario = ?(nombre, email);
        let tempArray = Array.freeze(usuarios); // Convertir a inmutable: [?(Text, Text)]
        let updatedArray = Array.append<?(Text, Text)>(tempArray, [newUsuario]); // Especificar tipo explícitamente
        usuarios := Array.thaw(updatedArray); // Convertir de vuelta a mutable
        id;
    };

    // Consultar un usuario por ID
    public query func consultarUsuario(id : Nat) : async ?(Text, Text) {
        if (id < usuarios.size()) {
            usuarios[id];
        } else {
            null;
        };
    };

    // Editar un usuario por ID
    public func editarUsuario(id : Nat, nombre : Text, email : Text) : async () {
        if (id < usuarios.size()) {
            usuarios[id] := ?(nombre, email);
        };
    };

    // Eliminar un usuario por ID
    public func eliminarUsuario(id : Nat) : async () {
        if (id < usuarios.size()) {
            usuarios[id] := null;
        };
    };
};
