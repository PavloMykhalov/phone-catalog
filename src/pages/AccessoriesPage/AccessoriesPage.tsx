import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs';
import './AccessoriesPage.scss';

export const AccessoriesPage = () => {
  return (
    <section className="accessories">
      <div className="accessories__breadcrumbs">
        <BreadCrumbs page="accessories" />
      </div>

      <div className="accessories__alert">
        <p className="accessories__alert-title">
          There is no products on this page for now. We are working on it.
        </p>
      </div>
    </section>
  );
};
