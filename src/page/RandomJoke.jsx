import React, { useEffect, useState } from 'react'
import JokeCard from '../components/jokeCard';

function RandomJoke() {

    const [joke, setJoke] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://api.freeapi.app/api/v1/public/randomjokes/joke/random');
                const data = await response.json();
                setJoke(data.data.content);
            } catch (error) {
                console.log(error)

            }
        }
        fetchData();
    }, [])
    console.log(joke)

    function getRandomTimeStamp() {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const getRandomInt = (max) => Math.floor(Math.random() * max);

        // Generate random time
        const hour = getRandomInt(12) + 1;
        const minute = getRandomInt(60).toString().padStart(2, "0");
        const period = getRandomInt(2) === 0 ? "AM" : "PM";

        // Generate random date
        const day = getRandomInt(28) + 1;
        const month = months[getRandomInt(12)];
        const year = 2024; // or any specific year

        return `${hour}:${minute} ${period} · ${month} ${day}, ${year}`;
    }

    function getRandomDecimal(min, max, decimals) {
        const randomNum = Math.random() * (max - min) + min;
        return randomNum.toFixed(decimals);
    }

    function getRandomLikes(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomComments(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomBookmarks(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomRetweets(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    return (
        <div className="w-full h-screen bg-cover bg-[#0000004D] flex justify-center items-center bg-[url('https://s3-alpha-sig.figma.com/img/6e29/6ae3/d5d0ebf14e82fb156e1ec74006d413d8?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Us7I4nDPdL-ESKZVxGa9FTHsWJXqHGPaiLWBgsSjyUB7JZYxbIpqcPfSuM2gtoIA03bUfozRbW7EQrlp2oOaK1seSiGxO2TnpTp-v6uPdZUkLf92DB6elCU3bEMylO2aNGUP8Bu4ijG~AAfU-F-wXmU4HUM97ITj8EqMcNaxfNmpman0-MOPceKjCRTZwKnkzdMnPfZI0~d3GDBURe-yHYnRZAj3-keWhYUBWWNV2Anpd~OS8mCfjmtadspPsdxw~EhIWcnb-a61mD7Yoh~TcN5RdZJh0wZr8whibqGsP2KVEU~YFyw8iXuyKBrcfH7gDzRROzj22bsdp8M3hPQ4nA__')] ">
            <JokeCard
                joke={joke}
                time={getRandomTimeStamp()}
                views={getRandomDecimal(10, 30, 1)}
                likes={getRandomLikes(100, 500)}
                comments={getRandomComments(10, 100)}
                bookmark={getRandomBookmarks(5, 50)}
                retweets={getRandomRetweets(20, 200)}
            />
        </div>
    )
}

export default RandomJoke