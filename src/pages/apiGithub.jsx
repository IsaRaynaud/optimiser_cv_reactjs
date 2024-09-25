import React, {useEffect, useState} from "react";
import '../App' ;

const ApiGithub = () => {
    const [user, setUser] = useState([]);

    const getUser = async () => {
        const res = await fetch("https://api.github.com/users/github-john-doe");
        const json = await res.json();
        setUser(json);
    }

    useEffect(() => {
        getUser();
    },[])

    return (
        <div className="container">
            <h1 className="text-center">Github user</h1>
            <h2 className="text-center">{user.name}</h2>
            <img src={user.avatar_url} alt={user.name} className="d-block mx-auto p-3"/>
            <p className="text-center">{user.bio}</p>
            <p className="text-center">Abonnés : {user.followers}</p>
            <p className="text-center">Abonnement : {user.following}</p>
            <p className="text-center">Créé le : {user.created_at}</p>
            <p className="text-center">Modifié le : {user.updated_at}</p>
            <p className="text-center">URL repositories : <a href="{user.repos_url}" target="_blank">{user.repos_url}</a></p>
        </div>
    )
}

export default ApiGithub;