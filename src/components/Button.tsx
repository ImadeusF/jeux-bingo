import styled from "styled-components";
import Link from "next/link";

type ButtonProps = {
  label: string;
  onClick?: () => void; // onClick devient optionnel
  disabled?: boolean;
  href?: string; // Nouveau : permet d'utiliser Link
};

export default function Button({
  label,
  onClick,
  disabled,
  href,
}: ButtonProps) {
  if (href) {
    return (
      <Link href={href} passHref>
        <ButtonStyled as="button">{label}</ButtonStyled>
      </Link>
    );
  }

  return (
    <ButtonStyled onClick={onClick} disabled={disabled}>
      {label}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  min-width: 200px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  background-color: #579c57;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
  text-decoration: none; 

  &:hover {
    background-color: #326132;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;
