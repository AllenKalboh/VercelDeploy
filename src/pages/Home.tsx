import {Link} from 'react-router-dom';
const Home = () => {
  return (
    <div className='flex flex-col p-2 m-2'>
      <Link to="/register" className='bg-gray-500 w-40 p-2 m-2 text-white hover:bg-gray-700 duration-300'> Register </Link>
      <Link  to="/login" className='bg-gray-500 w-40 p-2 m-2 text-white hover:bg-gray-700 duration-300'> Login </Link>
    </div>
  )
}

export default Home
