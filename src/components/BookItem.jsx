import { Link } from 'react-router-dom';

function BookItem({ book }) {
    return (
        <div className="book-item bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-all duration-300 border-2 border-gray-800 hover:border-yellow-500 hover:shadow-2xl hover:scale-[1.02]">
            <Link to={`/products/id/${book.ID}`} className="block">
                <div className="aspect-w-3 aspect-h-4">
                    <img
                        src={book.cover}
                        alt={book.title}
                        className="w-full h-full object-contain p-4 hover:opacity-90 transition-opacity duration-300"
                    />
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-white mb-1 line-clamp-2">{book.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">{book.author}</p>
                    <div className="h-20 overflow-hidden mb-2">
                        <p className="text-gray-300 text-sm line-clamp-3">{book.summary}</p>
                    </div>
                    <p className="text-lg font-bold text-indigo-400">US${book.price}.00</p>
                </div>
            </Link>
        </div>
    );
}

export default BookItem;
