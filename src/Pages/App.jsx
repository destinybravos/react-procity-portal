import './../App.css'
import PageHeader from '../components/PageHeader';
import DataComponent from '../components/dummy/DataComponent';
import ParentComponent from '../components/dummy/ParentComponent';

function App() {

  return (
    <div>
      <PageHeader />

      <DataComponent name="John" age="50" />

      <ParentComponent no_cols={4} >
          <div className="h-20 bg-red-300 shadow"></div>
          <div className="h-20 bg-red-300 shadow"></div>
          <div className="h-20 bg-red-300 shadow"></div>
          <div className="h-20 bg-red-300 shadow"></div>
      </ParentComponent>
    </div>
  )
}

export default App
