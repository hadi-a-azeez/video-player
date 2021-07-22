import styles from "./header.module.scss";
import NotificationIcon from "../assets/notification.png";
import SearchIcon from "../assets/search.png";
import ScreenCastIcon from "../assets/screencast.png";
import { useHistory } from "react-router";

const Header = () => {
  const history = useHistory();
  return (
    <div className={styles.container}>
      <div className={styles.left_section}>
        <h1 className={styles.heading} onClick={() => history.push("/")}>
          VideoPlayer
        </h1>
      </div>
      <div className={styles.right_section}>
        <img src={ScreenCastIcon} className={styles.icon} />
        <img src={NotificationIcon} className={styles.icon} />
        <img src={SearchIcon} className={styles.icon} />
        <div className={styles.user}>H</div>
      </div>
    </div>
  );
};

export default Header;
