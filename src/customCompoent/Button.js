export function Button({ content, styleCss, onClick }) {
  const style = {
    border: "none",
    fontSize: 24,
    padding: "15px 30px",
    borderRadius: 10,
    margin: "13px auto",
    display: "block",
    cursor: "pointer",
    ...styleCss,
  };
  return (
    <button
      className="bg-gray-200 hover:bg-[#ffa500] hover:text-white transition-all ease-linear hover:scale-105"
      onClick={onClick}
      style={style}
    >
      {content}
    </button>
  );
}
