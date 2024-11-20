
import { Link } from 'react-router-dom'

const NotfoundPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-black">
            <div className="text-center">
                <h1 className="text-7xl font-bold text-white">404</h1>
                <p className="mt-4 text-xl text-white">Oops! The page you’re looking for doesn’t exist.</p>
                <p className="mt-2 text-gray-500">It might have been removed or you might have entered an incorrect URL.</p>
                <Link to="/" className="mt-6 inline-block px-6 py-3 text-black bg-white rounded hover:bg-primary transition duration-300">Go to Homepage</Link>
            </div>
        </div>
    )
}

export default NotfoundPage