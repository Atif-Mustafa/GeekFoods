import { useState , useEffect} from 'react';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import styles from './RestaurantsList.module.css';
import restaurantsList from "../../static/dataset"

const RestaurantsList = () => {
    // console.log(restaurantsList)


    const [searchKey, setSearchKey] = useState("")
    const [minRating, setMinRating] = useState(0)

    const onSearchKeyChange = (e) => {
        setSearchKey(e.target.value)
    }
    const onRatingsChange = (e) => {
        setMinRating(Number(e.target.value))
    }

    const restaurantFilterFn = (restaurant) => {
        return (
            (restaurant.name.toLowerCase().includes(searchKey.toLowerCase()) || restaurant.address.toLowerCase().includes(searchKey.toLowerCase()) && restaurant.rating >= minRating)
        )
    }

    const restaurantMapFn = (restaurant) => <RestaurantCard key={restaurant._id} {...restaurant} />

    return (
        <div className={styles.main_container}>
            <form className={styles["filter-form"]}>
                <div>
                    <input onChange={onSearchKeyChange} type="text" placeholder='Search restaurants..' />
                </div>
                <div>
                    <label htmlFor="minRating">Minimum Rating: </label>
                    <input onChange={onRatingsChange} type="number" min="0" max="5" id='minRating' />
                </div>
            </form>
            <div className={styles.container}>
                {
                    restaurantsList
                        .filter(restaurantFilterFn)
                        // .slice()
                        .map(restaurantMapFn)
                }
            </div>
        </div>
    )
}

export default RestaurantsList;