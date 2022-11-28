import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {

  const itemCount = useSelector(state => state.cart.itemCount)

  const [open,setOpen] = useState(false)
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>012 345 678</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
          <li className={styles.listItem}>Homepage</li>
          </Link>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem} color="teal">Menu</li>
          <Link href="/" passHref>
          <h3>Food Shop</h3>
          </Link>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="30px" height="30px" />
            <div className={styles.counter}>{itemCount}</div>
          </div>
        </div>
      </Link>

      <div className={styles.hamburger} onClick={()=>setOpen(!open)}>
        <div className={styles.line}/>
        <div className={styles.line}/>
        <div className={styles.line}/>
      </div>

      <Link href="/cart" passHref>
        <div className={styles.cartWrap}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="30px" height="30px" />
            <div className={styles.counter}>{itemCount}</div>
          </div>
        </div>
      </Link>

      <ul className={styles.menu} style={{left: open ? "0px" : "-50vw"}}>
        <li className={styles.menuItem}>Homepage</li>
        <li className={styles.menuItem}>Products</li>
        <li className={styles.menuItem}>Menu</li>
        <li className={styles.menuItem}>Events</li>
        <li className={styles.menuItem}>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;