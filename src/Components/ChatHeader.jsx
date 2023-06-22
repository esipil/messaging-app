import React from 'react'

function ChatHeader() {
    return (
        <div className='bg-samawati h-20 mx-3 rounded-lg relative flex mt-1'>
            <img src='https://i.pinimg.com/236x/7b/94/03/7b940357df4d33decfa7bfcd1a3ffe37.jpg' className=' w-14 h-14 object-cover object-center  my-3 ml-3 rounded-lg'></img>
            <div className=' w-44 '>
                <h3 className='truncate font-baufra mt-3 ml-3 text-base text-white'>Wanjiru</h3>
                <p className='truncate  font-baufra mt-1 ml-3 text-sm text-white'>Chakula ya jana imebaki kweli?</p>
            </div>
            <div className='flex justify-center place-items-center ml-2'>
                <div className='h-5 w-5 bg-bluu rounded-full flex items-center justify-center'>
                    <p className='text-xs'>1</p>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default ChatHeader