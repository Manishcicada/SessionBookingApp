import { Link } from "react-router-dom";
import classes from './Button.module.css';
import { CSSProperties, ReactNode } from "react";

type ButtonProps = {
  type: 'Button';
  onClick: ()=> void;
  children: ReactNode; 
  styling: 'button'|'link';
  style?: CSSProperties
}

type LinkProps = {
  type: 'Link';
  href: string;
  children: ReactNode;
  styling: 'button'|'link';
  style?: CSSProperties
}

type ButtonComponentProps = (ButtonProps| LinkProps) ;

export default function Button(props: ButtonComponentProps){
  
  let content;

  if(props.type === 'Button'){
    const {onClick, children, styling, style} = props;
    content = (
      <button className={styling === 'button'?classes.button: classes.link} onClick={onClick} style={style}>{children}</button>
    );
  }
  if(props.type === 'Link'){
    const {href,children, styling, style} = props;
    content = (
      <Link className= {styling ==='link'?classes.link: classes.button} to={href} style={style}>{children}</Link>
    );
  }

  return(
    <>
      {content}
    </>
  );
}