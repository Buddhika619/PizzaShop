import styles from "../styles/pizzaList.module.css"
import PizzaCard from "./PizzaCard"

const pizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.tittle}>THE BEST PIZZA IN TOWN</h1>
        <p className={styles.desc}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <div className={styles.wrapper}>
            {pizzaList.map(pizza => (
              <PizzaCard key={pizza._id} pizza={pizza}/>
            ))}
            
     
        </div>
    </div>
  )
}

export default pizzaList