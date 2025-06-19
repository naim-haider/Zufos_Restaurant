import { OrderProvider } from "../OrderContext";
import { UserProvider } from "../UserContext";
import { ReservationProvider } from "../ReservationContext";

const AppProviders = ({ children }) => {
  return (
    <UserProvider>
      <OrderProvider>
        <ReservationProvider>{children}</ReservationProvider>
      </OrderProvider>
    </UserProvider>
  );
};

export default AppProviders;
