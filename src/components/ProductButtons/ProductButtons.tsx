import classNames from 'classnames';
import { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalContext';
import { Product } from '../../types/Product';
import './ProductButtons.scss';
import { NotFoundPage } from '../../pages/NotFoundPage/NotFoundPage';

type Props = {
  product?: Product,
};

export const ProductButtons: React.FC<Props> = ({ product }) => {
  const {
    cart,
    favList,
    handleAddingToCart,
    handleAddingToFav,
  } = useContext(GlobalContext);

  if (!product) {
    return <NotFoundPage />;
  }

  const { id } = product;

  const isAddedToCart = cart.find(item => item.product.id === id);
  const isAddedToFav = favList.find(item => item.id === id);

  return (
    <div className="buttons">
      <button
        type="button"
        className={classNames('buttons__cart', {
          'buttons__cart--added': isAddedToCart,
        })}
        onClick={() => handleAddingToCart(product)}
      >
        {isAddedToCart
          ? 'Added to cart'
          : 'Add to cart'}
      </button>

      <button
        type="button"
        aria-label="favourites"
        className={classNames('buttons__favourite', {
          'buttons__favourite--added': isAddedToFav,
        })}
        onClick={() => handleAddingToFav(product)}
      />
    </div>
  );
};
