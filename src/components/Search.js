import React from 'react'
import icons from '../ultis/icons'

const { TfiSearch } = icons

const search = () => {
  return (
    <div className='w-full flex items-center'>
      <span className='h-10 pl-4 flex items-center justify-center bg-[#DDE4E4] rounded-l-[20px] text-gray-500'>
        <TfiSearch size={24}/>
      </span>
      <input 
        type="text"
        className='outline-none bg-[#DDE4E4] w-full px-4 py-2 rounded-r-[20px] h-10 text-gray-500'
        placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...'
      />
    </div>
  )
}

export default search
