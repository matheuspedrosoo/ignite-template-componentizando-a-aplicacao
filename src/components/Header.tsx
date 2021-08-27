
interface IHeader{
    title: string;
}

export function Header(props: IHeader){
    return(
        <header>
        <span className="category">Categoria:<span> {props.title}</span></span>
      </header>
    )
}