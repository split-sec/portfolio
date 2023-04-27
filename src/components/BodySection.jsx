import CodeAnimate from './CodeAnimate';

export default function BodySection() {
    return (
        <div className="px-20 pt-20 pb-40 bg-white dark:bg-slate-800 dark:text-white">
           <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="px-4 lg:w-1/2 text-4xl md:text-6xl font-inter">
                    <p>Hi there!</p>
                    <p>I am</p>
                    <div className="p-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400">Shyam Venkatesh</div>
                </div>
                <CodeAnimate />
           </div>
        </div>
    )
}