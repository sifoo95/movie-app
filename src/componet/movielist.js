import {MovieCard} from './moviecard';
import {AddMovie} from './addmovie';

export const MovieList = ({animelist, setanime}) => {
    const handleOk = (addTerm) => {
        setanime([...animelist, addTerm]);
    };
    return (
        <div>
            <AddMovie onOk={handleOk}/>
            <div className='anime-container'>
                {animelist.map((el,i) => (
                    <MovieCard key={i} item={el}/>
                ))}
            </div>
        </div>
    );
}