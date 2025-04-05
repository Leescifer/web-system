import styles from '@styles/home.module.scss';

export default function Home() {
  return (
    <div className={styles.home}>

     <h1  
     className={styles.title}> 
     <span className={styles.span}> My </span> 

      Home Page
      
      </h1>

     <p 
      className={styles.description}>
      This is my home page for my app
      </p>

    </div>
  );
}
