import React from 'react';
import './ButtonPrimary.css';

interface IButtonPrimaryProps {
  text: string;
  onClick?: () => void;
}

export const ButtonPrimary  = ( props: IButtonPrimaryProps) => {
  const {text, onClick} = props;
  
  return (
      <button className="btn btn-warning" onClick={onClick}>{text}</button>
  );
}
