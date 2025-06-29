import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [selected, setSelected] = useState(null); // Tarjeta seleccionada

  const characters = [
    { name: "Vladimir Putin", image: "/Putin.jpg", id: "putin" },
    { name: "Donald Trump", image: "/Trump.jpg", id: "trump" },
    { name: "Ayatola", image: "/Ayatola.jpg", id: "ayatola" },
    { name: "Kim Jong-un", image: "/Kim_Jong_un.jpg", id: "kim" },
    { name: "Netanyahu", image: "/Netanyahu.jpg", id: "netanyahu" },
    { name: "Xi Jinping", image: "/Xi_Jinping.jpg", id: "xi" },
  ];

  const handleSelect = (characterId) => {
    setSelected(characterId); // Marca la tarjeta seleccionada
    setTimeout(() => {
      router.push(`/chat?character=${characterId}`);
    }, 600); // Espera 0.6 segundos antes de redirigir
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
        Selecciona un personaje histórico
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {characters.map((char) => (
          <div
            key={char.id}
            onClick={() => handleSelect(char.id)}
            className={`bg-white rounded-xl shadow-md p-3 cursor-pointer transition w-[250px] mx-auto 
              hover:shadow-xl hover:border hover:border-blue-500 
              ${selected === char.id ? 'animate-spin-slow' : ''}`}
          >
            <div className="w-full h-[160px] overflow-hidden mx-auto">
              <Image
                src={char.image}
                alt={char.name}
                width={100}
                height={100}
                className="rounded-lg object-cover mx-auto transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h2 className="text-base font-medium text-center mt-3">{char.name}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
