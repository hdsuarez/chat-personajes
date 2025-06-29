import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Chat() {
  const router = useRouter();
  const { character } = router.query;

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  // Agregar mensaje del usuario y obtener respuesta del servidor
  const handleSend = async () => {
    if (!input.trim()) return;

    const nuevoMensaje = { sender: 'usuario', text: input };
    setMessages((prev) => [...prev, nuevoMensaje]);
    setInput('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input, character }),
      });

      const data = await res.json();
      const respuesta = { sender: character, text: data.reply };
      setMessages((prev) => [...prev, respuesta]);
    } catch (err) {
      console.error('Error al obtener respuesta:', err);
    }
  };

  // Enviar mensaje con Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-4">
        Conversando con {character}
      </h1>

      <div className="bg-white p-4 rounded-xl shadow-md max-w-2xl mx-auto mb-6">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`my-2 p-3 rounded-lg w-fit max-w-[80%] ${
              msg.sender === 'usuario'
                ? 'bg-blue-200 ml-auto text-right'
                : 'bg-green-200 text-left'
            }`}
          >
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <div className="flex gap-2 max-w-2xl mx-auto">
        <input
          type="text"
          className="flex-1 p-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none"
          placeholder="Escribe tu mensaje..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Enviar
        </button>
      </div>
    </main>
  );
}

