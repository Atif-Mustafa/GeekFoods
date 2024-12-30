import styles from "./RestaurantCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
const RestaurantCard = (props) => {
    // let roundOfRating = Math.floor(props.rating);
    // roundOfRating = roundOfRating || 1
    // const starsArray = new Array(roundOfRating).fill(null);

    const starsArr = []
    for (let i = 0; i < 5; i++) {
        if (props.rating > i) {
            starsArr.push(true);
        }
        else starsArr.push(false)
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles["main-info"]}>
                    <span className={styles.name}>{props.name}</span>
                    <span>
                        {
                            starsArr.map((ele, index) =>
                                <FontAwesomeIcon key={`star_${index}`} className={ele ? styles.yellow : ""} icon={faStar} />
                            )
                        }
                    </span>
                </div>
                <p>
                    <FontAwesomeIcon icon={faLocationDot} />
                    {props.address}
                </p>
                <span>{`${props.outcode} ${props.postcode}`}</span>
            </div>

            <div className={styles.body}>
                <div>
                    <span><FontAwesomeIcon className={styles.green} icon={faUtensils} /></span>
                    <span>{props.type_of_food}</span>
                </div>
                <a href="">Visit Menu</a>
            </div>
        </div>
    )
};

export default RestaurantCard;