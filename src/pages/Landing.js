import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/Testing'

const Landing = () => {
  return (
     <Wrapper>
        <nav>
            <img src={logo} alt="jobify" className='logo'/>
        </nav>
        <div className="container page">
            <div className='info'>

                <h1>job <span>tracking</span>app</h1>
                <p>
                Are you tired of the endless job search process, juggling multiple
                 applications, and struggling to keep track of your progress? 
                 Look no further! We are thrilled to introduce Jobify, 
                 the ultimate solution to streamline your job hunt and help you land your 
                 dream job with ease.

                </p>
                <button className= 'btn btn-hero'>
                    Login/register
                </button>

            </div>
            <img src={main} alt="job hunt" className='img img-main'/>
        </div>
     </Wrapper>
  )
}

export default Landing