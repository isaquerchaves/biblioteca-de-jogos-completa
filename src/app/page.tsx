"use client"

import { useState } from "react"

export default function Home() {
  const [games, setGames] = useState(() => {
    const storedGames = localStorage.getItem("obc-game-lib")
    if (!storedGames) return []
    return JSON.parse(storedGames)
  })
  const [title, setTitle] = useState("")
  const [cover, setCover] = useState("")



  const addGame = ({ title, cover}) => {
      const id = Math.floor(Math.random() * 1000000)
      const game = {id,title,cover}
      setGames(state => {
        const newState = [...state, game]
        localStorage.setItem("obc-game-lib", JSON.stringify(newState))
        return newState
      })
  }

  const removeGame = (id) => {
    setGames((state) => {
      const newState = state.filter((game) => game.id !== id)
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      return newState
    })
  }
 
  const handleSubmit = (ev) => {
    ev.preventDefault()
    addGame({title, cover})
    setTitle("")
    setCover("")
  }

  return (
    <div>
      <h1>Biblioteca de Jogos</h1>
      <form onSubmit={handleSubmit} className="flex items-end gap-[2rem]">
        <div>
          <label htmlFor="title">Título:</label>
          <input 
            type="text" 
            name="title" 
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cover">Capa:</label>
          <input 
            type="text" 
            name="cover" 
            id="cover"
            value={cover}
            onChange={(e) => setCover(e.target.value)}
          />
        </div>
        <div className="flex items-end p-4">
        <button type="submit" className="bg-[rgba(26,26,26)] border-transparent text-base font-semibold cursor-pointer transition border-gray-400 hover:border-white"> 
          Adicionar à biblioteca
        </button>
        </div>
      </form>
      <div className="flex flex-col flex-wrap">
      {games.map((game) => ( // Inclua parênteses e use arrow function
        <div key={game.id} className="flex items-start gap-8 h-32 mt-8 w-96">
          <img src={game.cover} alt={game.title} className=" h-full w-40 object-cover"/>
          <div>
            <h1 className="m-0">{game.title}</h1>
            <button className="bg-[rgba(26,26,26)] border-transparent text-base font-semibold cursor-pointer transition border-gray-400 hover:border-white"
              onClick={() => removeGame(game.id)}
            >
              Remover
            </button>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}