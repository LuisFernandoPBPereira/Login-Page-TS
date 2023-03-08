import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

export function Button({ title, onClick, disabled, className }: IButtonProps){
  return <ButtonContainer disabled={disabled} 
                          onClick={onClick}
                          className={className}>{title}</ButtonContainer>;
};

