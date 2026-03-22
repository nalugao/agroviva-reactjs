
function ChatMenssagem({ from, text }) {
  return (
    <div className={`message ${from}`}>
      {text}
    </div>
  );
}

export default ChatMenssagem;