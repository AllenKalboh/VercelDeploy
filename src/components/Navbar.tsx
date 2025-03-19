import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between items-center p-4 bg-[#1E293B] text-white'>
        <div className='text-2xl font-bold'> <Link to="/" className="navBtn"> Logo </Link>  </div>
        <ul className='flex gap-6'>
            <li> <Link to="/welcomepage" className="navBtn"> Home </Link> </li> 
            <li> <Link to="/about" className="navBtn"> About </Link> </li> 
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
