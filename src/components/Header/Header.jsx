import styles from './Header.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons"
const Header = () => {
    return (
        <>
            <header className={styles["w-max"]}>
                <div className={styles.header_container}>
                    <div className={styles.nav_header}>
                        <a href="" >
                            <img src="https://flowbite.com/docs/images/logo.svg" alt="" className={styles.nav_logo} />
                            <h1>GeekFoods</h1>
                        </a>
                    </div>
                    <ul className={styles.nav_links}>
                        <li><a href="">Home</a></li>
                        <li><a href="">Quote</a></li>
                        <li><a href="">Restaurants</a></li>
                        <li><a href="">Foods</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                    <div className={styles.btn_container}>
                        <button>Get started</button>
                    </div>
                </div>
            </header>
            <header className={styles["w-min"]}>
                <div className={styles.header_container}>
                    <div className={styles.nav_header}>
                        <a href="" >
                            <img src="https://flowbite.com/docs/images/logo.svg" alt="" className={styles.nav_logo} />
                            <h1>GeekFoods</h1>
                        </a>
                    </div>
                    <div className={styles.button_menu}>
                        <div className={styles.btn_container}>
                            <button>Get started</button>
                        </div>
                        <div className={styles.menu_btn}>
                        <FontAwesomeIcon icon={faBars} />
                        </div>
                    </div>

                </div>
            </header>
        </>
    )
}

export default Header;