import DisplaySection from './DisplaySection';
import Footer from './Footer';
import Tech from './Tech';

const Homepage = () => {
  return (
    <div className='space-y-8'>

      <DisplaySection/>
      <Tech/>
      <div className='items-center'>
        <Footer/>
      </div>

    </div>
  )
}

export default Homepage ;