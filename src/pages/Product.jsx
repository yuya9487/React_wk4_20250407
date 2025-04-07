import { useParams } from 'react-router-dom';
import Header from "../components/Header"
import Footer from "../components/Footer"
import BookDetail from "../components/BookDetail";
import products from "../json/books.json";

function Product() {
   const { productId } = useParams();
   const product = products.find(
      (x) => x.ID === parseInt(productId)
   );

   return (
      <div className="container mainLayout">
         <Header
            className="layoutHeader"
            title="ABOUT BOOK"
            slogan="Add to cart and enjoy your reading time."
         />
         <BookDetail book={product} className="layoutContent" />
         <Footer className="layoutFooter" />
      </div>
   );
}

export default Product;
