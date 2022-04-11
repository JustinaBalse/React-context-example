import React, { useState, useEffect } from 'react'
import Card from './Card'
import axios from 'axios'

export default function Main() {
    const [users, setUsers] = useState([]);


    useEffect(() => {

        const fetchItems = async () => {

            const rez = await axios(
               
                `https://6065db4eb8fbbd00175678f0.mockapi.io/users`
            );

            console.log(rez.data);
            setUsers(rez.data);

        }

        fetchItems();
    }, [])


    return (
        <div className="container">
            <div className="card-deck mb-3 text-center">

                {users.map(user => (<Card
                    key={user.id}
                    name={user.name}
                    email={user.email}
                    id={user.id}
                    image={user.image}
                    location={user.city} />
                ))}
            </div>
        </div>
    )
}


// console.log(rez.data.results);
// setUsers(rez.data.results);

 /* `https://randomuser.me/api/?results=12` */

// {users.map(user => (<Card
//     key={user.cell}
//     name={user.name.first}
//     email={user.email}
//     id={user.id.value}
//     image={user.picture.large}
//     location={user.location.country} />
// ))}