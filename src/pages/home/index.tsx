import Image from "next/image";
import PrimaryButton from "@/src/components/PrimaryButton/PrimaryButton";
import styles from "./home.module.css";

const Home = () => {
  return (
    <main className={styles.homePage}>
      <div className="">

        <PrimaryButton title="home"></PrimaryButton>
        <PrimaryButton title="shop"></PrimaryButton>
        <PrimaryButton title="events"></PrimaryButton>
        <PrimaryButton title="how it works"></PrimaryButton>
      </div>

      <div>
        <h1 className="text-center">
          bakkerij van blom
        </h1>
        <div className="flex">
          <div className="col-4 center flex">
            <img className={styles.familyPortait} src="/familyPhoto.png" alt="Family Photo"/>
          </div>
          <p className="col-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Home;