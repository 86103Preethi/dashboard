import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import Register from './components/Register';
import Dashboard from './components/DashboardItem';
import Products from './components/Products';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="products" element={<Products />} />
                </Route>
                <Route path="register" element={<Register />} />
            </Routes>
        </Router>
    )
}

export default App




