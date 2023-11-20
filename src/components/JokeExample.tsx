import React, { useState, useEffect } from 'react'

interface Joke {
    question: string;
    answer: string;
}

function Jokes() {
    const [jokes, setJokes] = useState<Joke[]>([])
    const [currentJoke, setCurrentJoke] = useState<Joke | null>(null)


    useEffect(() => {
        fetch(`https://christmasjoy.dev/api/jokes`)
            .then(response => response.json())
            .then(data => {
                setJokes(data);
                if (data.length > 0) {
                    setCurrentJoke(data[Math.floor(Math.random() * data.length)]);
                }
            })
            .catch(error => {
                console.error(error);
            });
    }, []);


    const revealAnswer = () => {
        const answerEl = document.getElementById('answer');
        const revealEl = document.getElementById('reveal-answer');
        const newJokeEl = document.getElementById('get-new-joke');
        if (answerEl && revealEl && newJokeEl) {
            answerEl.classList.remove('hidden');
            revealEl.classList.add('hidden');
            newJokeEl.classList.remove('hidden');
        }
    };

    const handleNewJoke = () => {
        const answerEl = document.getElementById('answer');
        const revealEl = document.getElementById('reveal-answer');
        const newJokeEl = document.getElementById('get-new-joke');
        if (answerEl && revealEl && newJokeEl) {
            answerEl.classList.add('hidden');
            revealEl.classList.remove('hidden');
            newJokeEl.classList.add('hidden');
        }
        setCurrentJoke(jokes[Math.floor(Math.random() * jokes.length)]);
    };


    return (
        <div className="mx-auto mt-10 max-w-7xl px-6 sm:mt-32 lg:px-8 text-center" id="jokes">
            <div className="mx-auto lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Christmas <span className="text-green-500">Jokes</span></h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Who doesn&apos;t love a good Christmas joke? Fetch a joke from the ChristmasJoy API, easy as <span className="text-green-500">one,</span> <span className="text-red-500">two</span> <span className="text-green-500">three</span>.
                </p>
            </div>
            <div className="my-8">
                <div>
                    <h5 className="text-2xl font-medium">{currentJoke?.question}</h5>
                    <p id="answer" className="italic mt-3 text-xl leading-8 text-gray-700 tracking-tight hidden">{currentJoke?.answer}</p>
                </div>
                <button
                    id="get-new-joke"
                    type="button"
                    onClick={handleNewJoke}
                    className="hidden my-5 rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                    Get New Joke
                </button>
                <button
                    id="reveal-answer"
                    type="button"
                    onClick={revealAnswer}
                    className=" my-5 rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                    Reveal Answer
                </button>
            </div>
        </div>
    )
}

export default Jokes