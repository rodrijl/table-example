import SearchBox from '../SearchBox';
import Table from '../Table'

const Layout = () => (
  <div className="container">
    <SearchBox />
    <Table/>
    <div className="container">
      <main className="main" />
    </div>
  </div>
);

export default Layout;