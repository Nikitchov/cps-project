import Pages from './components/Pages';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Article from './components/Article';
import Table from './components/Table';
import Header from './components/Header';
import Brands from './components/Brands/Brands';
import './index.css'
import Navbar from './components/Navbar';


function App() {


    return (
        <div className='container'>
            <Navbar/> 
            <div className="content">
            <Header />
            <Pages />
            <Routes>
                <Route path='/' element={<Article />} />
            </Routes>
            <Brands />
            <Table />
            <Footer />
            </div>
            </div>
  )
}

export default App
