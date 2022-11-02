import './NotFound.css'
import Button from './Button'
export default function NotFound() {
		const image = 'http://i.giphy.com/l117HrgEinjIA.gif';

		return (
			<div className="FourOhFour">
				<div className="bg" style={{ backgroundImage: 'url(' + image + ')'}}></div>
				<div className="code">404</div>
        <div className="link">
          <Button title='Go Back Home' url='/' />
        </div>
			</div>
		)
	}