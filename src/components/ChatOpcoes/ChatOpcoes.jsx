function ChatOpcoes({ options, onSelect }) {

  if (!options) return null;

  return (
    <div className="options">
      {options.map((opt, index) => (
        <button key={index} onClick={() => onSelect(opt)}>
          {opt}
        </button>
      ))}
    </div>
  );
}

export default ChatOpcoes;