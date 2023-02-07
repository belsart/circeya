import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.scss';
import Content from './components/Content/Content';
import Slider from './components/Slider/Slider';
import Layout from './components/Layout/Layout';
import images from '/src/data/images';

function App() {
    return (
        <Layout>
            <Content image1={images[0].image} image2={images[1].image} />
            <Slider />
            <Content image1={images[2].image} image2={images[3].image} />
        </Layout>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
