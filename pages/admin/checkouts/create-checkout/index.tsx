import { useAppDispatch, useAppSelector } from 'redux/hooks';
import AdminLayout from 'components/admin/adminLayout/layout';
import ManageCheckoutFrom from 'components/admin/checkouts/manageCheckoutForm';

const createCheckout = () => {
  const title = 'Создание Заказ';

  return (
    <>
      <ManageCheckoutFrom title={title} />
    </>
  );
};

createCheckout.PageLayout = AdminLayout;
export default createCheckout;
