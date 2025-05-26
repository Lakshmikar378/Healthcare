import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import DashboardMain from './components/DashboardMain/DashboardMain'
import './App.css'

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <DashboardMain />
      </div>
    </div>
  )
}