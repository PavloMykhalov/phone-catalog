import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './MobileMenu.scss';
import { ICONS } from '../../icons';

type Props = {
  isMenuShown: boolean,
  setIsMenuShown: (value: boolean) => void,
};

export const MobileMenu: React.FC<Props> = ({
  setIsMenuShown,
  isMenuShown,
}) => {
  const handleMenuClose = () => {
    setIsMenuShown(false);
  };

  return (
    <div
      className={classNames('mobile-menu', {
        'mobile-menu__shown': isMenuShown,
      })}
    >
      <div className="mobile-menu__top">
        <button
          type="button"
          aria-label="delete"
          onClick={handleMenuClose}
          className="mobile-menu__top-close"
        >
          <img
            src={ICONS.iconClose}
            alt="close menu"
            className="mobile-menu__top-close--icon"
          />
        </button>

        <Link
          to="/"
          onClick={handleMenuClose}
          className="mobile-menu__top-logo-link"
        >
          <img
            src={ICONS.logo}
            alt="logo"
            className="mobile-menu__top-logo-link--image"
          />
        </Link>

      </div>

      <nav className="mobile-menu__container">
        <ul className="mobile-menu__nav-list">
          <li className="mobile-menu__nav-list-item">
            <Link
              to="/"
              onClick={handleMenuClose}
              className="mobile-menu__nav-list-link"
            >
              HOME
            </Link>
          </li>

          <li className="mobile-menu__nav-list-item">
            <Link
              to="/phones"
              onClick={handleMenuClose}
              className="mobile-menu__nav-list-link"
            >
              PHONES
            </Link>
          </li>

          <li className="mobile-menu__nav-list-item">
            <Link
              to="/tablets"
              onClick={handleMenuClose}
              className="mobile-menu__nav-list-link"
            >
              TABLETS
            </Link>
          </li>

          <li className="mobile-menu__nav-list-item">
            <Link
              to="/accessories"
              onClick={handleMenuClose}
              className="mobile-menu__nav-list-link"
            >
              ACCESSORIES
            </Link>
          </li>

          <li className="mobile-menu__nav-list-item">
            <Link
              to="/favourites"
              onClick={handleMenuClose}
              className="mobile-menu__nav-list-link"
            >
              FAVOURITES
            </Link>
          </li>

          <li className="mobile-menu__nav-list-item">
            <Link
              to="/cart"
              onClick={handleMenuClose}
              className="mobile-menu__nav-list-link"
            >
              CART
            </Link>
          </li>

          <li className="mobile-menu__nav-list-item">
            <Link
              to="https://github.com/PavloMykhalov/react_phone-catalog"
              target="_blank"
              className="mobile-menu__nav-list-link"
            >
              GITHUB
            </Link>
          </li>

          <li className="mobile-menu__nav-list-item">
            <Link
              to="/contacts"
              target="_blank"
              className="mobile-menu__nav-list-link"
            >
              CONTACTS US
            </Link>
          </li>
        </ul>
      </nav>

    </div>
  );
};
