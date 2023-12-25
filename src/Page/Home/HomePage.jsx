import Banner from './home_components/Banner';
import UserPage from './home_components/UserPage';

const HomePage = () => {
    
    return (
        <div className='space-y-6'>
            <Banner></Banner>
            <UserPage></UserPage>
        </div>
    );
};

export default HomePage;