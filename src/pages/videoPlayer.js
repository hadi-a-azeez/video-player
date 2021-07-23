import { useState, useEffect } from "react";
import { getVidoeData, getSimilarVideos } from "../api";
import VideoItem from "../components/videoItem";
//import { YoutubePlayer } from "reactjs-media";
import ReactPlayer from "react-player/lazy";
import styles from "./videoPlayer.module.scss";
import LikeOutlined from "../assets/like_outlined.png";
import ShareOutlined from "../assets/share_outlined.png";
import LikeFilled from "../assets/like_filled.png";
import ShareFilled from "../assets/share_filled.png";
import Header from "../components/header";

const VideoPlayer = (props) => {
  const [videoData, setVideoData] = useState([]);
  const [similarVideos, setSimilarVideos] = useState([]);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisLiked] = useState(false);
  const [shared, setShared] = useState(false);
  const [likes, setLikes] = useState();
  const [dislikes, setDislikes] = useState();
  const id = props.match.params.id.toString();
  console.log(id);

  useEffect(() => {
    const getData = async () => {
      const videoDataResponse = getVidoeData(id);
      videoDataResponse.then((result) => {
        setVideoData(result);
        setLikes(result.statistics.likeCount);
        setDislikes(result.statistics.dislikeCount);
        const cat_id = result.categoryId;
        const similarVideosResponse = getSimilarVideos(cat_id, id);
        similarVideosResponse.then((result) => setSimilarVideos(result));
      });
      console.log(videoData);
      //console.log(similarVideosResponse);
    };
    getData();
  }, [id]);

  const handleLike = () => {
    setLiked(!liked);
    liked ? setLikes(likes - 1) : setLikes(likes + 1);
  };
  const handleDislike = () => {
    setDisLiked(!disliked);
    disliked ? setDislikes(dislikes - 1) : setDislikes(dislikes + 1);
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        {/*  <div className={styles.video}></div> */}

        {videoData.id && (
          <>
            <div className={styles.grid_left}>
              <div className={styles.video}>
                <ReactPlayer
                  url={videoData.url}
                  width="100%"
                  height="100%"
                  controls={true}
                />
              </div>

              <div className={styles.details}>
                <h1 className={styles.title}>{videoData.title}</h1>
                <div className={styles.stat_wraper}>
                  <h1 className={styles.text_sm}>
                    {videoData.statistics.viewCount} views
                  </h1>
                  <h1 className={styles.text_sm}>
                    {videoData.statistics.date}
                  </h1>
                </div>
              </div>

              <div className={styles.icons_section}>
                <div className={styles.icon_wraper}>
                  <img
                    src={liked ? LikeFilled : LikeOutlined}
                    alt="like"
                    className={styles.icon}
                    onClick={() => handleLike()}
                  />
                  <h1 className={styles.txt}>{likes}</h1>
                </div>
                <div className={styles.icon_wraper}>
                  <img
                    src={disliked ? LikeFilled : LikeOutlined}
                    alt="dislike"
                    className={`${styles.icon} ${styles.rotate}`}
                    onClick={() => handleDislike()}
                  />
                  <h1 className={styles.txt}>{dislikes}</h1>
                </div>
                <div className={styles.icon_wraper}>
                  <img
                    src={shared ? ShareFilled : ShareOutlined}
                    alt="share"
                    className={styles.icon}
                    onClick={() => setShared(!shared)}
                  />
                  <h1 className={styles.txt}>Share</h1>
                </div>
              </div>
              <div className={styles.channel_info}>
                <img
                  src={videoData.channelInfo.profilePicture}
                  alt="profile picture"
                  className={styles.profile_picture}
                />
                <h1 className={styles.channel_name}>
                  {videoData.channelInfo.name}
                </h1>
              </div>
            </div>
          </>
        )}
        <div className={styles.divider} />
        <div className={styles.grid_right}>
          {similarVideos.length &&
            similarVideos.map((videoData, id) => (
              <VideoItem data={videoData} key={id} />
            ))}
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
