import RestaurantCard from './RestaurantCard';
import resList from "../Utils/MockData"
import { useState } from 'react';



const Body = () => {
    const [listOfRestaurants, setListOfRestaurants ] = useState(resList)
    console.log(listOfRestaurants)
    return (
        <div className='body'>
            <div className='filter'>
                <button 
                    className='filter-btn'
                    onClick={() =>  {
                        console.log(listOfRestaurants.length)
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating >= 4
                            // (res) => console.log(res.info.avgRating >= 4)
                        );
                        console.log(filteredList)
                        setListOfRestaurants(filteredList);
                    }}
                >
                Top Rated Restaurants
                </button>
            </div> 
            <div className='res-container'>
                { listOfRestaurants.map(restaurant => (<RestaurantCard key={restaurant.info.id} restData={restaurant.info}/>))}
            </div>
        </div>
    )
}


export default Body