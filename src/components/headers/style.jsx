import styled from "styled-components";
import Link from "next/link";
export const Cont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100vw;
  height: 60px;
  background-color: #193838;
`;
export const Rotas = styled(Link)`
  user-select: none;
  cursor: pointer;
  outline: none;
  color: white;
  transition: all 0.3s ease;
  &:hover {
    border-bottom: 0.5px solid white;
  }
`;
