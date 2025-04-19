import React, {useState, useMemo} from "react";
import background from "../../assets/background.png";
import { Header } from '../../components/Header';
import { ItemList } from "../../components/ItemList";
import './styles.css'
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Profile } from '../../components/Profile';
import { RepositoryList } from '../../components/RepositoryList';


const App = () => {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGetData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const userData = await fetch(`https://api.github.com/users/${user}`);
      if (!userData.ok) {
        throw new Error('Usuário não encontrado');
      }
      const newUser = await userData.json();

      if(newUser.name){
        const {avatar_url, name, bio, login} = newUser;
        setCurrentUser({avatar_url, name, bio, login});

        const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
        const newRepos = await reposData.json();

        if(newRepos.length){
          setRepos(newRepos);
        }
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const sortedRepos = useMemo(() => {
    if (!repos) return [];
    return [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count);
  }, [repos]);

  return (
    <div className="App">
      <Header/>
        <div className="conteudo">
          <img 
          src={background} 
          className="background" 
          alt="background App"/>
            <div className="info">
              <div className="search-container">
                <Input 
                name="usuario" 
                value={user} 
                onChange={event => setUser(event.target.value)} 
                placeholder="@username" />
                <Button onClick={handleGetData}>Buscar</Button>
              </div>
              {currentUser?.name ? (
                <Profile user={currentUser} />
              ): null}
              {repos?.length ? (
                <RepositoryList repositories={sortedRepos} />
              ) : null}
             
            </div>
        </div>

    </div>
  ) 

}

export default App;
