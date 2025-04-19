import React from 'react';
import './styles.css';

export const Profile = ({ user }) => {
  return (
    <>
      <div className="perfil">
        <img 
          src={user.avatar_url} 
          className="profile" 
          alt="imagem de perfil"
        />  
        <div>
          <h3>{user.name}</h3>
          <span>{user.login}</span>
          <p>{user.bio}</p>
        </div>
      </div>
      <hr/>
    </>
  );
}; 