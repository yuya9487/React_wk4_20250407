import AddToCart from './AddToCart'

function BookDetail({ book }) {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* 左側：書籍封面 */}
                <div className="lg:w-1/3">
                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                        <img
                            alt={book.title}
                            className="w-full h-auto object-cover"
                            src={book.cover}
                        />
                    </div>
                </div>

                {/* 右側：書籍資訊 */}
                <div className="lg:w-2/3">
                    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                        <h1 className="text-2xl font-bold text-white mb-2">{book.title}</h1>
                        <h2 className="text-lg text-gray-400 mb-4">{book.author}</h2>
                        <div className="prose prose-invert max-w-none mb-6">
                            <p className="text-gray-300">{book.summary}</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-2xl font-semibold text-indigo-400">US${book.price}.00</p>
                            <AddToCart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BookDetail