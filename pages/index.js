import { useEffect, useState, createElement } from "react";
import styles from "../styles/Home.module.css";
import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";

function Home() {
  const [loaded, setLoaded] = useState(false);
  const [fullList, setFullList] = useState([]);
  const [firstFolder, setFirstFolder] = useState([]);
  const [secondFolder, setSecondFolder] = useState([]);
  const [currentPath, setCurrentPath] = useState("");

  const cache = {};
  var firstFolderArray = [];

  function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)));
  }

  useEffect(() => {
    const importFunction = async () => {
      await importAll(require.context("../data", true, /^.*\.(mdx)$/));

      for (const [key, value] of Object.entries(cache)) {
        const splitKey = key.split("/");
        if (!firstFolderArray.includes(splitKey[1])) {
          firstFolderArray.push(splitKey[1].split(".")[0]);
        }
      }

      setFullList(cache);
      setFirstFolder(firstFolderArray);
      setLoaded(true);
    };

    importFunction();
  }, []);

  const firstPaneHandler = (e, item) => {
    const cache = [];
    for (const [key, value] of Object.entries(fullList)) {
      const splitKey = key.split("/");
      if (splitKey[1] === item) {
        cache.push(splitKey[2].split(".")[0]);
        setCurrentPath(splitKey[1]);
        setSecondFolder(cache);
      }
    }
  };

  const secondPaneHandler = (e, item) => {
    setCurrentPath([
      typeof currentPath === "string" ? currentPath : currentPath[0],
      item,
    ]);
  };

  if (loaded === true) {
    var markdownElement;
    console.log(currentPath);
    if (Array.isArray(currentPath)) {
      const indexPath = "./" + currentPath[0] + "/" + currentPath[1] + ".mdx";
      console.log(indexPath);
      markdownElement = createElement(fullList[indexPath].default);
    } else {
      markdownElement = null;
    }
    console.log();
    return (
      <div>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato&family=Open+Sans:wght@300;500;700&family=Permanent+Marker&family=Roboto:wght@300;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <div className={styles.container}>
          <div className={styles.blogContainer}>
          
          
            <div className={styles.firstPane}>
              <div className={styles.header}>PROJECTS</div>
              {firstFolder.map(function (item) {
                return (
                  <a onClick={(e) => firstPaneHandler(e, item)} key={item}>
                    <h1>{item}</h1>
                  </a>
                );
              })}
            </div>
            <div className={styles.secondPane}>
              <div className={styles.header}>PAGES</div>
              {secondFolder.map(function (item) {
                return (
                  <a onClick={(e) => secondPaneHandler(e, item)} key={item}>
                    <h1 key={item}>{item}</h1>
                  </a>
                );
              })}
            </div>
            <div className={styles.thirdPane}>
              <div className="w-1/2">
              {Array.isArray(currentPath) ? markdownElement : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return "Loading...";
}

// Home.getInitialProps = async (ctx) => {
//   console.log(1)
// }

export default Home;
