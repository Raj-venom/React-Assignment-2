import React, { useEffect, useState } from 'react'
import ProfileCard from "../components/profileCard";
import axios from 'axios';

function RandomUserPage() {

    const [data, setData] = useState({})

    const randomusers = async () => {
        try {
            const userData = await axios.get('https://api.freeapi.app/api/v1/public/randomusers/user/random')
            console.log(userData.data.data)
            setData(userData.data.data)

        } catch (error) {
            console.log(error)
            console.log('error', error.message)


        }
    }
    useEffect(() => {
        randomusers()
    }, [])

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = date.toLocaleString('en-US', { month: 'long' });
        const year = date.getFullYear();
        return `${day} ${month}, ${year}`;
    };

    const formatTimeZone = (timezone) => {
        if (!timezone) return '';
        const { offset, description } = timezone;
        return `${offset} (${description.split(',')[0]})`;
    };

    return (
        <div>
            {
                data && <ProfileCard
                    name={`${data.name?.first} ${data.name?.last}`}
                    title={data.name?.title}
                    username={data.login?.username}
                    nationality={data.nat}
                    city={data.location?.city}
                    dob={formatDate(data.dob?.date)}
                    phone={data.phone}
                    image={data.picture?.large}
                    registered={formatDate(data.registered?.date)}
                    timezone={formatTimeZone(data.location?.timezone)}
                    handleClick={randomusers}
                />
            }
        </div>
    )
}

export default RandomUserPage