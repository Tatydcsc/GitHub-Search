import React from 'react';
import { ItemList } from '../ItemList';
import './styles.css';

export const RepositoryList = ({ repositories }) => {
  return (
    <div>
      <h4 className="repositorio">Repositórios</h4>
      {repositories.map(repo => (
        <ItemList 
          key={repo.id}
          title={repo.name} 
          description={repo.description}
          html_url={repo.html_url}
        />
      ))}
    </div>
  );
}; 