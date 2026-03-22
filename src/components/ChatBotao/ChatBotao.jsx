import { useNavigate, useLocation } from "react-router-dom";
import './chatbotao.css';

function ChatBotao() {
    const navigate = useNavigate();
    const location = useLocation();

    if (location.pathname === "/chatbot") return null;

    return (
        <button className="chatbot-fab" onClick={() => navigate("/chatbot")}>
            <span className="chatbot-fab-icon">💬</span>
            <span className="chatbot-fab-badge" />
        </button>
    );
}

export default ChatBotao;