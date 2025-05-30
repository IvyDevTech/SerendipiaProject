export const idlFactory = ({ IDL }) => {
  const Post = IDL.Record({ 'author' : IDL.Principal, 'message' : IDL.Text });
  return IDL.Service({
    'actualizar_post' : IDL.Func([IDL.Text, IDL.Text], [], ['oneway']),
    'borrar_post' : IDL.Func([IDL.Text], [IDL.Opt(Post)], []),
    'crear_post' : IDL.Func([IDL.Text], [], ['oneway']),
    'obtener_post' : IDL.Func([IDL.Text], [IDL.Opt(Post)], ['query']),
    'obtener_posts' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, Post))],
        ['query'],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
