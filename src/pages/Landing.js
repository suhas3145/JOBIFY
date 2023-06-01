import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
const Landing = () => {
  return (
     <main>
        <nav>
            <img src={logo} alt="jobify" className='logo'/>
        </nav>
        <div className="container page">
            <div className='info'>

                <h1>job <span>tracking</span>app</h1>
                <p>
                    abhdhd ashdvshd shdsd shdsd sdbshd shdbhsd sdbsdnd shdbsd sdsdbns ds
                    bsdvsd sdhdh dhdh jee eje djhf  djnw dkfhehe djhfbf uedd  ehyebe 
                    hggss duufje  eiieie fjjff ejdjdd ejuwwn uuwuwjw 

                </p>
                <button className= 'btn btn-hero'>
                    Login/register
                </button>

            </div>
            <img src={main} alt="job hunt" className='img img-main'/>
        </div>
     </main>
  )
}

export default Landing