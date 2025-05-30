export const idlFactory = ({ IDL }) => {
  const User = IDL.Record({
    direccion: IDL.Text,
    nombre: IDL.Text,
    author: IDL.Principal,
    correo: IDL.Text,
    telefono: IDL.Text,
  });
  return IDL.Service({
    actualizar_usuario: IDL.Func(
      [IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text],
      [],
      ["oneway"]
    ),
    borrar_usuario: IDL.Func([IDL.Text], [IDL.Opt(User)], []),
    obtener_usuario: IDL.Func([IDL.Text], [IDL.Opt(User)], ["query"]),
    registrar_usuario: IDL.Func(
      [IDL.Text, IDL.Text, IDL.Text, IDL.Text],
      [IDL.Nat],
      []
    ),
  });
};
export const init = ({ IDL }) => {
  return [];
};
