import Layout from './Layout';
import Corosal from './Corosal';
import HomeIcon from './HomeIcon';
const Home = () => {
    return ( 
        <Layout
            title=""
            description=""
            className="container-fluid m-0 p-0"
        >
        <Corosal />
        <HomeIcon />       
        </Layout>
    );
};

export default Home;
