import classes from './Header.module.css';
import mealsImg from '../../assets/images/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h3>The Gourmet</h3>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt='A table full of delicious food' />
      </div>
    </>
  );
};

export default Header;
