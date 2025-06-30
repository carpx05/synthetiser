export default function Header() {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
        le synthétiseur de texte IA français.
      </h1>
      <p className="text-center mt-4 mb-6 text-gray-300 text-sm sm:text-base max-w-md">
        Entrez votre texte ci-dessous et laissez l'IA générer un résumé concis et pertinent. 
        <br />
        <span className="text-yellow-300 font-semibold">Limite de 5000 caractères.</span>
      </p>
    </>
  );
}
