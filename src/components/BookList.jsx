import BookItem from './BookItem'
import products from '../json/books.json'

function BookList(){
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
            {products.map((product)=>(
                <BookItem key={product.ID} book={product}/>
            ))}
        </div>
    )
}
export default BookList