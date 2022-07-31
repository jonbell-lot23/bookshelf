import { useEffect, useState, createElement } from "react";
import styles from "../styles/Home.module.css";
import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";
import { useRouter } from 'next/router'
import Link from "next/link";

function Home() {

  
  const [loaded, setLoaded] = useState(false);
  const [fullList, setFullList] = useState([]);
  const [firstFolder, setFirstFolder] = useState([]);
  const cache = {};
  var firstFolderArray = [];

  function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)));
  }

  useEffect(() => {
    const importFunction = async () => {
      await importAll(require.context("../data", true, /^.*\.(md)$/));

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

  const getSecondFolder = (item) => {
    const cache = [];
    for (const [key, value] of Object.entries(fullList)) {
      const splitKey = key.split("/");
      if (splitKey[1] === item) {
        cache.push(splitKey[2].split(".")[0]);
      }
    }
    return cache;
  };

  if (loaded === true) {
    let secondFolder = [];
    let currentPath = null;
    const router = useRouter()
    const { slug } = router.query;
    if (slug !== undefined){
      console.log(currentPath);
      console.log(slug);
      var firstpanekey = slug[0];
      var secondpanekey = slug[1];
      if (firstpanekey !==undefined && firstpanekey !== 'home'){
        secondFolder = getSecondFolder(firstpanekey);
        if (slug.length === 1){
          currentPath = firstpanekey;
        }
      }
      console.log('secondFolder: '+JSON.stringify(secondFolder));
      console.log('currentPath: '+JSON.stringify(currentPath));
      
      if (slug.length ===2 &&  secondFolder.includes(secondpanekey)){
        currentPath = slug;       
      }
    }
    
    var markdownElement;
    console.log(currentPath);
    if (Array.isArray(currentPath)) {
      const indexPath = "./" + currentPath[0] + "/" + currentPath[1] + ".md";
      console.log(indexPath);
      markdownElement = createElement(fullList[indexPath].default);
    } else {
      markdownElement = null;
    }
    console.log();
    return (
      <div className="prose max-w-max">
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
                  <Link href={`/${item}`} key={item}>
                    <a>
                    <h1>{item}</h1>
                    </a>
                   </Link>
                );
              })}
            </div>
            <div className={styles.secondPane}>
              <div className={styles.header}>PAGES</div>
              {secondFolder.map(function (item) {
                return (
                  <Link href={`/${firstpanekey}/${item}`} key={item}>
                    <a>
                      <h1 key={item}>{item}</h1>
                    </a>
                  </Link>
                );
              })}
            </div>
            <div className={`${styles.thirdPane} w-full`}>
            <div className={`${styles.essayContent} w-full lg:w-1/2 lg:mx-auto`}>
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