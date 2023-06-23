import React, { useState } from 'react'
import ChatHeader from './ChatHeader';
import Text from './Text';
import TextTwo from './TextTwo';
import TextThree from './TextThree';

function Chat() {
    const [placeholder, setPlaceholder] = useState('Search');
    const [search, setSearch] = useState(false)

    const handleFocus = () => {
        setPlaceholder('');
        setSearch(true)
    };

    const handleBlur = () => {
        setPlaceholder('Search');
        setSearch(false)
    };
    return (
        <div className='absolute w-[60rem] h-full rounded-lg top-0 left-[7rem] bg-royal flex ' >
            <div className='w-1/3 flex flex-col items-center  border-e-2 border-regal'>
                <div className='bg-samawati w-3/4 h-10 mt-5 rounded-xl flex items-center justify-center ' >
                    <div className=' flex items-center'>
                        {search ?
                            <svg className='h-8 w-8 pl-2' stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                            </svg>
                            :
                            <svg className='h-8 w-8 pl-2' fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        }
                    </div>
                    <div>
                        <form className='pl-3'>
                            <input
                                className='w-full h-full bg-samawati rounded-3xl  outline-none placeholder:italic text-lg text-light font-baufra '
                                placeholder={placeholder}
                                type='text'
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            ></input>
                        </form>
                    </div>
                </div>
                <div className='w-full mt-6 overflow-y-auto '>
                    <ChatHeader />
                    <ChatHeader />
                    <ChatHeader />
                    <ChatHeader />
                    <ChatHeader />
                    <ChatHeader />
                    <ChatHeader />
                    <ChatHeader />
                    <ChatHeader />
                    <ChatHeader />
                    <ChatHeader />
                    <ChatHeader />
                    <ChatHeader />
                </div>
            </div>
            <div className='w-2/3 '>
                <div className='h-16 w-2/3 shadow flex flex-col justify-center'>
                    <h3 className='text-white ml-4 mt-1 text-lg'>Office Chat</h3>
                    <p className='text-white text-xxs ml-4 mt-1'>Click here for group details</p>
                </div>
                <div className=' h-100  flex flex-col-reverse  overflow-y-auto'>
                    <TextThree />
                    <TextTwo />
                    <Text />
                </div>
                <div className='h-20 shadow'>
                    <div className=' flex items-center h-full w-full'>
                        <div className='ml-4'>

                            <svg className='h-7 w-7' fill="none" stroke="white" stroke-width="" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"></path>
                            </svg>
                        </div>
                        <div className=' h-8 w-full  rounded-xl mx-4 bg-samawati'>
                            
                        </div>
                        <div className='mr-4'>
                            <svg className='h-7 w-7' fill="none" stroke="white" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat