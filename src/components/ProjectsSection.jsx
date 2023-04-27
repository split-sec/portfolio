import { useEffect, useState } from "react";
import LineAnimation from "./LineAnimation";

export default function ProjectsSection() {
    const [option, setOption] = useState(1)
    const [content, setContent] = useState(1);

    function contentGenerator(option) {
        if(option === 1) {
            return (
                <ul>
                    <li className="leading-10">I did my schooling at Kikani Vidhya Mandir CBSE School.</li>
                    <li className="leading-10">I majored in Physics, Chemistry, Math and Computer Science.</li>
                    <li className="leading-10">I learnt C++ in my Grade 11 & 12.</li>
                </ul>
            )
        }
        else if(option === 2) {
            return (
                <ul>
                    <li className="leading-10">I am currently pursuing my Bachelor of Engineering degree at Knowledge Institute of Technology, Salem.</li>
                    <li className="leading-10">I learnt Python, Java and C during my college days.</li>
                    <li className="leading-10">I am also currently learning the Japanese language with certification upto JLPT N3.</li>
                </ul>
            )
        }
        else if(option === 3) {
            return (
                <ul>
                    <li className="leading-10">
                        I have worked online as a Academic Content Developer Intern at Synergy Eduservices where I created educational content
                        for K-12 and UPSC aspirants.
                    </li>
                    <li className="leading-10">I worked as a Summer Intern at Zoho, Salem where I learnt Java and Git Fundamentals.</li> 
                    <li className="leading-10">I am currently working as an Product Engineer Intern at Codingmart Technologies where I am learning ReactJS.</li>
                </ul>
            )
        }
    }

    useEffect(() => {
        console.log("triggered");
        setContent(contentGenerator(option));
    }, [option]);

    return (
        <div className="px-20 py-40 w-full bg-purple-600
            flex flex-col items-center 
            font-inter leading
            lg:flex-row">
            <div className="w-3/4 lg:w-1/4 mr-10 px-10 lg:px-4
                flex flex-row justify-between lg:justify-start lg:flex-col">
                <LineAnimation>
                    <button className="w-1/3 lg:w-50 text-white
                        text-md md:text-xl lg:text-2xl text-left py-4
                        mx-10 lg:mx-0 px-0"
                        onClick={() => setOption(1)}
                    >
                        School 📚
                    </button>
                </LineAnimation>

                <LineAnimation>
                    <button className="w-1/3 lg:w-50 text-white
                        text-md md:text-xl lg:text-2xl text-left py-4
                        mx-10 lg:mx-0"
                        onClick={() => setOption(2)}
                    >
                        College 🎓
                    </button>
                </LineAnimation>

                <LineAnimation>
                    <button className="w-1/3 lg:w-50 text-white
                        text-md md:text-xl lg:text-2xl text-left py-4
                        mx-10 lg:mx-0"
                        onClick={() => setOption(3)}
                    >
                        Experience 💻
                    </button>
                </LineAnimation>
            </div>
            <div className="w-3/4 h-80 px-10 py-6 text-white text-lg
                bg-slate-800 bg-opacity-30 
                backdrop-filter backdrop-blur-md 
                rounded-tl-3xl rounded-br-3xl">
                {content}
            </div>
        </div>
    )
}