import { Fragment,useContext } from 'react'
import MinHeader from './main-header'
import Notification from "../notification/Notification";
import NotificationContext from "../../store/NotificationContext";

const Layout = (props) => {
  const { notification } = useContext(NotificationContext);
  return (
    <Fragment>
      <MinHeader />
        <main>
            {props.children}
        </main>
        {notification && (
          <Notification
            title={notification.title}
            message={notification.message}
            status={notification.status}
          />
        )}
    </Fragment>
  )
}

export default Layout;