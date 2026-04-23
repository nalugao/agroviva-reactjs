import { useState, useRef, useEffect, useCallback } from "react";
import chatbotQuestionario from '../../data/chatbotQuestionario.js';
import './chatbot.css';

function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [step, setStep] = useState("perfil");
    const [perfil, setPerfil] = useState(null);
    const [categoria, setCategoria] = useState(null);
    const [isTyping, setIsTyping] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);

    const messagesEndRef = useRef(null);
    const messagesContainerRef = useRef(null);
    const utteranceRef = useRef(null);

    function now() {
        return new Date().toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    const cleanTextForSpeech = useCallback((text) => {
        if (!text) return "";
        return text
            .replace(/<[^>]+>/g, " ")
            .replace(/&nbsp;/g, " ")
            .replace(/\s+/g, " ")
            .trim();
    }, []);

    const stopSpeech = useCallback(() => {
        window.speechSynthesis.cancel();
        utteranceRef.current = null;
        setIsSpeaking(false);
    }, []);

    const speakText = useCallback((texto) => {
        const cleanText = cleanTextForSpeech(texto);
        if (!cleanText) return;

        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = "pt-BR";
        utterance.rate = 1;
        utterance.pitch = 1;
        utterance.volume = 1;

        const loadVoices = () => {
            const voices = window.speechSynthesis.getVoices();
            const ptVoice = voices.find(
                (v) => v.lang === "pt-BR" || v.lang === "pt_BR" || v.lang.startsWith("pt")
            );
            if (ptVoice) utterance.voice = ptVoice;
        };

        loadVoices();
        window.speechSynthesis.onvoiceschanged = loadVoices;

        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => {
            setIsSpeaking(false);
            utteranceRef.current = null;
        };
        utterance.onerror = () => {
            setIsSpeaking(false);
            utteranceRef.current = null;
        };

        utteranceRef.current = utterance;
        window.speechSynthesis.speak(utterance);
    }, [cleanTextForSpeech]);

    const addBotMessage = useCallback((text, autoSpeak = false) => {
        setMessages(prev => [...prev, { from: "bot", text, time: now() }]);
        if (autoSpeak) {
            setTimeout(() => speakText(text), 250);
        }
    }, [speakText]);

    const addUserMessage = (text) => {
        setMessages(prev => [...prev, { from: "user", text, time: now() }]);
    };

    const addBotMessageWithOptions = useCallback((text, opts, delay = 700, autoSpeak = true) => {
        setIsTyping(true);

        setTimeout(() => {
            setIsTyping(false);

            setMessages(prev => [
                ...prev,
                { from: "bot", text, time: now() },
                { from: "options", options: opts }
            ]);

            if (autoSpeak) {
                const optionsText = opts?.length ? `. Opções disponíveis: ${opts.join(", ")}.` : "";
                setTimeout(() => speakText(`${text}${optionsText}`), 250);
            }
        }, delay);
    }, [speakText]);

    const disableAllOptions = () => {
        setMessages(prev =>
            prev.map(m => m.from === "options" ? { ...m, disabled: true } : m)
        );
    };

    useEffect(() => {
        const t = setTimeout(() => {
            addBotMessage(
                "Olá! 👋 Bem-vindo à <strong>AgroViva</strong>. Sou seu assistente virtual e estou aqui para te auxiliar.",
                true
            );

            setTimeout(() => {
                addBotMessageWithOptions(
                    "Para começar, escolha seu perfil:",
                    ["Agricultor", "Comunidade"],
                    700,
                    true
                );
            }, 1200);
        }, 300);

        return () => clearTimeout(t);
    }, [addBotMessage, addBotMessageWithOptions]);

    useEffect(() => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTo({
                top: messagesContainerRef.current.scrollHeight,
                behavior: "smooth"
            });
        }
    }, [messages, isTyping]);

    useEffect(() => {
        return () => window.speechSynthesis.cancel();
    }, []);

    function handleAction(opcao) {
        disableAllOptions();
        stopSpeech();
        addUserMessage(opcao);

        if (step === "perfil") {
            const perfilSelecionado = opcao
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '');

            setPerfil(perfilSelecionado);

            const categorias = Object.keys(chatbotQuestionario[perfilSelecionado]);

            addBotMessageWithOptions(
                "Ótimo! Agora escolha uma categoria:",
                categorias,
                700,
                true
            );

            setStep("categoria");
            return;
        }

        if (step === "categoria") {
            setCategoria(opcao);

            const perguntas = chatbotQuestionario[perfil][opcao].map(p => p.pergunta);

            addBotMessageWithOptions(
                "Selecione sua pergunta:",
                perguntas,
                700,
                true
            );

            setStep("pergunta");
            return;
        }

        if (step === "pergunta") {
            const item = chatbotQuestionario[perfil][categoria].find(p => p.pergunta === opcao);

            setIsTyping(true);

            setTimeout(() => {
                setIsTyping(false);

                setMessages(prev => [
                    ...prev,
                    { from: "bot", text: item.resposta, time: now() }
                ]);

                setTimeout(() => speakText(item.resposta), 250);

                setTimeout(() => {
                    addBotMessageWithOptions(
                        "O que deseja fazer agora?",
                        [
                            "Ver outras perguntas",
                            "Ver categorias",
                            "Trocar perfil",
                            "Encerrar"
                        ],
                        400,
                        true
                    );
                }, 500);
            }, 900);

            setStep("navegacao");
            return;
        }

        if (step === "navegacao") {
            if (opcao === "Ver outras perguntas") {
                const perguntas = chatbotQuestionario[perfil][categoria].map(p => p.pergunta);
                addBotMessageWithOptions("Escolha uma pergunta:", perguntas, 700, true);
                setStep("pergunta");
                return;
            }

            if (opcao === "Ver categorias") {
                const categorias = Object.keys(chatbotQuestionario[perfil]);
                addBotMessageWithOptions("Escolha uma categoria:", categorias, 700, true);
                setStep("categoria");
                return;
            }

            if (opcao === "Trocar perfil") {
                addBotMessageWithOptions(
                    "Tudo bem! Escolha seu perfil:",
                    ["Agricultor", "Comunidade"],
                    700,
                    true
                );
                setStep("perfil");
                return;
            }

            if (opcao === "Encerrar") {
                setIsTyping(true);
                setTimeout(() => {
                    setIsTyping(false);
                    addBotMessage(
                        "Conversa encerrada. Obrigado por usar o VivaChat! Até logo! 👋",
                        true
                    );
                }, 700);
            }
        }
    }

    return (
        <div className="chat-page">
            <div className="chat">

                <div className="header_chat">
                    <div className="header_avatar">🌱</div>
                    <div className="header_texto">
                        <h1>VivaChat</h1>
                        <p>Assistente virtual da AgroViva</p>
                    </div>
                    <div className="viva-status">
                        <span className="dot-online" />
                        Online agora
                    </div>
                </div>

                <div className="chat-toolbar">
                    <button
                        className={`toolbar-btn stop-btn ${!isSpeaking ? "disabled" : ""}`}
                        onClick={stopSpeech}
                        disabled={!isSpeaking}
                        type="button"
                        title="Parar leitura"
                    >
                         Parar áudio
                    </button>
                </div>

                <div className="messages" ref={messagesContainerRef}>
                    {messages.map((msg, i) => {

                        if (msg.from === "bot") return (
                            <div key={i} className="bubble-wrapper bot-wrapper">
                                <div className="bot-avatar-sm">🌱</div>
                                <div className="bubble-col">
                                    <div className="bot-with-audio">
                                        <div
                                            className="bubble bot"
                                            dangerouslySetInnerHTML={{ __html: msg.text }}
                                        />
                                        <button
                                            className="audio-btn"
                                            onClick={() => speakText(msg.text)}
                                            title="Ouvir mensagem"
                                            type="button"
                                        >
                                            🔊
                                        </button>
                                    </div>
                                    <span className="timestamp">{msg.time}</span>
                                </div>
                            </div>
                        );

                        if (msg.from === "user") return (
                            <div key={i} className="bubble-wrapper user-wrapper">
                                <div className="bubble-col align-end">
                                    <div className="user-with-audio">
                                        
                                        <button
                                            className="audio-btn user-audio-btn"
                                            onClick={() => speakText(msg.text)}
                                            title="Ouvir mensagem"
                                            type="button"
                                        >
                                            🔊
                                        </button>
                                        <div className="bubble user">{msg.text}</div>
                                    </div>
                                    <span className="timestamp">{msg.time}</span>
                                </div>
                                <div className="user-avatar-sm">🧑‍🌾</div>
                            </div>
                        );

                        if (msg.from === "options") return (
                            <div key={i} className="options-row">
                                {msg.options.map((opt, j) => (
                                    <div key={j} className="option-item">
                                        <button
                                            className={`opt-btn${msg.disabled ? " disabled" : ""}`}
                                            onClick={() => !msg.disabled && handleAction(opt)}
                                            disabled={msg.disabled}
                                            type="button"
                                        >
                                            {opt}
                                        </button>
                                        <button
                                            className="audio-btn option-audio-btn"
                                            onClick={() => speakText(opt)}
                                            type="button"
                                            title="Ouvir opção"
                                            disabled={msg.disabled}
                                        >
                                            🔊
                                        </button>
                                    </div>
                                ))}
                            </div>
                        );

                        return null;
                    })}

                    {isTyping && (
                        <div className="bubble-wrapper bot-wrapper">
                            <div className="bot-avatar-sm">🌱</div>
                            <div className="typing-bubble">
                                <span className="typing-dot" />
                                <span className="typing-dot" />
                                <span className="typing-dot" />
                            </div>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>
            </div>
        </div>
    );
}

export default Chatbot;