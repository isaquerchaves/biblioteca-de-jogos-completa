export default function Home() {
  return (
    <div>
      <h1>Biblioteca de Jogos</h1>
      <form className="flex items-end gap-[2rem]">
        <div>
          <label htmlFor="title">Título:</label>
          <input type="text" name="title" id="title" />
        </div>
        <div>
          <label htmlFor="cover">Capa:</label>
          <input type="text" name="cover" id="cover"/>
        </div>
        <div className="flex items-end p-4">
        <button type="submit" className="bg-[rgba(26,26,26)] border-transparent text-base font-semibold cursor-pointer transition border-gray-400 hover:border-white"> 
          Adicionar à biblioteca
        </button>
        </div>
      </form>
    </div>
  )
}
