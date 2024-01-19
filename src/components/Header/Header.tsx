import { Link, NavLink, useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import cn from 'classnames';
import { ICONS } from '../../icons';
import './Header.scss';
import { GlobalContext } from '../Context/GlobalContext';
import { Navigation } from '../Navigation/Navigation';
import { Search } from '../Search/Search';
import { MobileMenu } from '../MobileMenu/MobileMenu';

const getLinkClassIcon = ({ isActive }: { isActive: boolean }) => cn(
  'header__right-link', {
    'header__right-link--active': isActive,
  },
);

export const Header = () => {
  const { cart, favList } = useContext(GlobalContext);
  const { pathname } = useLocation();
  const [isMenuShown, setIsMenuShown] = useState(false);

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  const isSearchVisible = pathname === '/phones'
    || pathname === '/tablets'
    || pathname === '/favourites'
    || pathname === '/accessories';

  useEffect(() => {
    const { body } = document;

    body.style.overflow = isMenuShown ? 'hidden' : 'auto';

    return () => {
      body.style.overflow = 'auto';
    };
  }, [isMenuShown]);

  return (
    <header className="header">
      <div className="header__left-box">
        <button
          type="button"
          aria-label="menu"
          className="header__left-box-menu"
          onClick={() => setIsMenuShown(true)}
        />

        <Link to="/">
          <img src={ICONS.logo} alt="logo" className="header__left-box--logo" />
        </Link>

        {isMenuShown && (
          <MobileMenu
            setIsMenuShown={setIsMenuShown}
            isMenuShown={isMenuShown}
          />
        )}
        {pathname !== '/cart' && <Navigation />}
      </div>

      <div className="header__right-box">
        {isSearchVisible && <Search />}

        {pathname !== '/cart' && (
          <NavLink to="/favourites" className={getLinkClassIcon}>
            <div className="icon__container">
              <img
                src={ICONS.favourites}
                className="icon"
                alt="favourites"
              />
              {!!favList.length && (
                <div className="counter">
                  {favList.length}
                </div>
              )}
            </div>
          </NavLink>
        )}

        <NavLink to="/cart" className={getLinkClassIcon}>
          <div className="icon__container">
            <img
              src={ICONS.shoppingCart}
              className="icon"
              alt="shopping cart"
            />
            {!!cart.length && (
              <div className="counter">
                {totalQuantity}
              </div>
            )}
          </div>
        </NavLink>
      </div>
    </header>
  );
};
