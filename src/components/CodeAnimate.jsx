import git from '../assets/git-branch.svg';
import vscode from '../assets/vscode.svg';
import search from '../assets/search.svg';
import settings from '../assets/settings.svg';
import account from '../assets/account.svg';
import react from '../assets/react.svg';
import cross from '../assets/cross.svg';

import ChangingCode from './ChangingCode/ChangingCode';

export default function CodeAnimate() {
    const code =
`e xport default function App() {
    return (
       <div>
            <h1>Frontend Developer</h1>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>ReactJS</li>
                <li>TailwindCSS</li>
            </ul>
       </div>
    )
}`;

    return (
        <div className='hidden md:block md:mt-20 lg:mt-0 h-96 md:w-3/4 lg:w-1/2 p-4 bg-gradient-to-r from-purple-800 to-purple-400'>
            <div className='h-full text-lg flex flex-col'>
                <div className='h-6 p-2 bg-white dark:bg-slate-700 bg-opacity-60 dark:bg-opacity-60 backdrop-filter backdrop-blur-sm flex items-center
                    rounded-t-md'>
                    <div className='w-20 flex items-center'>
                        <div className='h-3 w-3 mx-1 rounded-full bg-red-600'></div>
                        <div className='h-3 w-3 mx-1 rounded-full bg-yellow-400'></div>
                        <div className='h-3 w-3 mx-1 rounded-full bg-green-400'></div>
                    </div>
                    <div className='w-3/4 grow text-center dark:text-white font-bold text-slate-900 text-xs'>Portfolio - Visual Studio Code</div>
                    <div className='h-1 w-20'></div>
                </div>
                <div className='h-4 p-2 bg-white dark:bg-slate-700 bg-opacity-60 dark:bg-opacity-60 backdrop-filter backdrop-blur-sm flex items-center text-xxs'>
                    <div className='me-2'>File</div>
                    <div className='me-2'>Edit</div>
                    <div className='me-2'>Selection</div>
                    <div className='me-2'>View</div>
                    <div className='me-2'>Go</div>
                    <div className='me-2'>Run</div>
                    <div className='me-2'>Terminal</div>
                    <div className='me-2'>Help</div>
                </div>

                <div className='h-full bg-white dark:bg-slate-700 bg-opacity-20 dark:bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-b-md 
                    border-t border-white/10
                    flex'>
                    <div className='h-full w-8 p-2 bg-white dark:bg-slate-700 bg-opacity-30 dark:bg-opacity-30 rounded-bl-md 
                        border-r border-white/10
                        flex flex-col items-center justify-between'>
                        <div className='flex flex-col items-center'>
                            <img src={vscode} className='h-6 w-6 mb-2' />
                            <img src={git} className='h-6 w-6 mb-2' />
                            <img src={search} className='h-6 w-6 mb-2' />
                        </div>

                        <div className='flex flex-col items-center'>
                            <img src={settings} className='h-6 w-6 mb-2' />
                            <img src={account} className='h-6 w-6 mb-2' />
                        </div>
                    </div>

                    <div className='h-full w-full bg-white dark:bg-slate-700 bg-opacity-30 dark:bg-opacity-30 backdrop-filter background-blur-md rounded-br-md'>
                        <div className='h-6 w-full pl-1 border-b border-white/10
                            flex items-center'>
                            <div className='flex items-center h-full border-r border-white/10'>
                                <img src={react} className='h-4 w-4 mr-2' />
                                <div className='text-xxxs mr-5'>App.jsx</div>
                                <img src={cross} className='h-2 w-2 mr-2' />
                            </div>
                        </div>

                        {/* Animation part */}
                        <ChangingCode code={code}/>
                    </div>
                </div>
            </div>
        </div>
    )
}