import { useState, useEffect } from "react";
import Header from "../components/header";
import VideoItem from "../components/videoItem";
import styles from "./home.module.scss";
import { getAllData } from "../api";
//import { data } from "../data";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const dataResponse = getAllData();
      dataResponse.then((result) => setData(result));
      console.log(data);
    };
    getData();
  }, []);
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.grid_container}>
          {data.length &&
            data.map((videoData, id) => (
              <VideoItem data={videoData} key={id} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
