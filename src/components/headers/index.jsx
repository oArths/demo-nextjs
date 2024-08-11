import * as S from "./style.jsx";

export default function Header() {
  return (
    <S.Cont>
      <S.Rotas href="/">Home</S.Rotas>
      <S.Rotas href="/dashboard">Dashboard</S.Rotas>
      {/* <S.Rotas>About</S.Rotas>
      <S.Rotas>More</S.Rotas> */}
    </S.Cont>
  );
}
