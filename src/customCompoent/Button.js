export function Button({content,styleCss,onClick}){
    
    const style = {border:'none',fontSize:24,padding: '15px 30px',borderRadius:10,margin:'13px auto',display:'block',cursor:'pointer',...styleCss}
    return <button onClick={onClick} style={style}>{content}</button>
}