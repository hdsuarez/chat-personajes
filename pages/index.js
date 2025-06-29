// Importamos el enrutador de Next.js para cambiar de página
import { useRouter } from 'next/router';
import Image from 'next/image'; // Para optimizar imágenes

// Componente principal de la página
export default function Home() {
  const router = useRouter(); // Usamos el router para redireccionar al usuario

  // Lista de personajes disponibles
  const characters = [
    {
      name: "Vladimir Putin",
      image: "/Putin.jpg", // Imagen en /public/Putin.jpg
      id: "putin"
    },
    {
      name: "Donald Trump",
      image: "/Trump.jpg",
      id: "trump"
    },
    {
      name: "Ayatola",
      image: "/Ayatola.jpg",
      id: "ayatola"
    },
    {
      name: "Kim Jong-un",
      image: "/Kim_Jong_un.jpg",
      id: "kim"
    },
    {
      name: "Netanyahu",
      image: "/Netanyahu.jpg",
      id: "netanyahu"
    },
    {
      name: "Xi Jinping",
      image: "/Xi_Jinping.jpg",
      id: "xi"
    }
  ];

  // Esta función redirige a la página /chat con el personaje elegido
  const handleSelect = (characterId) => {
    router.push(`/chat?character=${characterId}`);
  };

  // Interfaz visual
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Selecciona un personaje histórico
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {characters.map((char) => (
          <div
            key={char.id}
            className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-2xl cursor-pointer transition"
            onClick={() => handleSelect(char.id)}
          >
            <Image
              src={char.image}
              alt={char.name}
              width={400}
              height={300}
              className="rounded-xl object-cover"
            />
            <h2 className="text-xl font-semibold text-center mt-4">{char.name}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
