import {useState} from 'react'

function App() {
  const [work, setWork] = useState('Moi Nhap')
  console.log(work)
  return (
    <div className="h-screen gap-8 flex items-center border border-red-500 justify-center">
      <input 
      type="text"
      className="outline-none border border-blue-600 px-4 py-2 w-[400px]"
      value={work}
      onChange={e => setWork(e.target.value)}
      />
      <button
      type="button"
      className="outline-none px-4 py-2 bg-blue-500 rounded-sm text-white"
      >
      Add
      </button>
    </div>
  );
}

export default App;
