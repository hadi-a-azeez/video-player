import styles from "./videoItem.module.scss";
import { useHistory } from "react-router";

const VideoItem = ({ data }) => {
  const history = useHistory();
  return (
    <div className={styles.container}>
      <img src={data.thumbnail} alt="thumbnail" className={styles.thumbnail} />
      <div className={styles.details}>
        <img
          alt="profile picture"
          src={data.channelInfo.profilePicture}
          className={styles.profile_picture}
        />
        <div
          className={styles.text_container}
          onClick={() => history.push(`/watch/${data.id}`)}
        >
          <h1 className={styles.title}>{data.title}</h1>
          <div className={styles.stat_wraper}>
            <h1 className={styles.text_sm}>{data.channelInfo.name}</h1>
            <h1 className={styles.text_sm}>{data.statistics.viewCount}</h1>
            <h1 className={styles.text_sm}>{data.statistics.date}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
