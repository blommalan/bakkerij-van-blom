import Image from "next/image";
import PrimaryButton from "@/src/components/PrimaryButton/PrimaryButton";
import styles from "./home.module.css";
import LinkCard from "@/src/components/LinkCard/LinkCard";
import AccentButton from "@/src/components/AccentButton/AccentButton";
import ShoppingCartIcon from "@/src/components/Icons/ShoppingCartIcon";
import IconButton from "@/src/components/IconButton/IconButton";

const shopBannerLinks = [
  {
    link: '/shop/blueberry',
    title: 'blueberry',
    image: '/cake1.jpg',
  },
  {
    link: '/shop/chocolate',
    title: 'chocolate',
    image: '/chocolate_cake.jpg',
  },
  {
    link: '/shop/birthday-cake',
    title: 'birthday',
    image: '/pink_cake.jpg',
  }
]

const Home = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.headerBar}>

        <PrimaryButton title="home"></PrimaryButton>
        <PrimaryButton title="shop"></PrimaryButton>
        <PrimaryButton title="events"></PrimaryButton>
        <PrimaryButton title="how it works"></PrimaryButton>

        <IconButton><ShoppingCartIcon></ShoppingCartIcon></IconButton>
      </div>

      <div>
        <h1 className={styles.pageHeading}>
          bakkerij van blom
        </h1>

        <div className={styles.introSection}>
          <div className="col-4 center flex">
            <img className={styles.familyPortait} src="/familyPhoto.png" alt="Family Photo"/>
          </div>
          <p className="col-4 font-reading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div className={styles.favouritesSection}>
        <h3 className={styles.favouritesHeading}>our favourites</h3>
        <div className={styles.cardContainer}>
          {shopBannerLinks.map((bannerLink, i) => {
            return (
              <div key={"favouritesCard_" + i} className={styles.favouritesCard}>
                <LinkCard altText={bannerLink.title} linkText={bannerLink.title} link={bannerLink.link} source={bannerLink.image}></LinkCard>
              </div>
            )
          })}
        </div>

        <AccentButton title="shop favourites"></AccentButton>
      </div>
    </div>
  );
}

export default Home;