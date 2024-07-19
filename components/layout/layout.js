import { Fragment } from 'react'
import MinHeader from './main-header'

const Layout = (props) => {
  return <Fragment>
    <MinHeader />
      <main>
          {props.children}
      </main>
  </Fragment>
}

export default Layout;