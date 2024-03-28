import styles from './shop.module.css';
import LinkCard from '@/src/components/LinkCard/LinkCard';
import AccentButton from '@/src/components/AccentButton/AccentButton';
import HeaderBar from '@/src/components/HeaderBar/HeaderBar';
import TitleBanner from '@/src/components/TitleBanner/TitleBanner';

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
  },
  {
    link: '/shop/blueberry',
    title: 'blueberry',
    image: '/pink_cake.jpg',
  },
  {
    link: '/shop/chocolate',
    title: 'chocolate',
    image: '/cake1.jpg',
  },
  {
    link: '/shop/birthday-cake',
    title: 'birthday',
    image: '/pink_cake.jpg',
  },
  {
    link: '/shop/blueberry',
    title: 'blueberry',
    image: '/pink_cake.jpg',
  },
  {
    link: '/shop/chocolate',
    title: 'chocolate',
    image: '/pink_cake.jpg',
  },
  {
    link: '/shop/birthday-cake',
    title: 'birthday',
    image: '/chocolate_cake.jpg',
  },
  {
    link: '/shop/blueberry',
    title: 'blueberry',
    image: '/pink_cake.jpg',
  },
  {
    link: '/shop/birthday-cake',
    title: 'birthday',
    image: '/chocolate_cake.jpg',
  },
  {
    link: '/shop/chocolate',
    title: 'chocolate',
    image: '/pink_cake.jpg',
  },
];

const Shop = () => {
  return (
    <div className={styles.shopPage}>
      <HeaderBar></HeaderBar>

      <TitleBanner title='shop' source='./harvest_table2.jpg'></TitleBanner>

      <div className='page-container'>
        <div className={styles.introSection}>
          <p className='font-reading'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        <div>
          <div className={styles.favouritesSection}>
            <div className={styles.cardContainer}>
              {shopBannerLinks.map((bannerLink, i) => {
                return (
                  <div key={'favouritesCard_' + i} className={styles.shopCard}>
                    <div>
                      <LinkCard
                        altText={bannerLink.title}
                        linkText={bannerLink.title}
                        link={bannerLink.link}
                        source={bannerLink.image}
                      ></LinkCard>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
