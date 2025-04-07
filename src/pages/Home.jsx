import Header from '../components/Header'
import ProductList from '../components/BookList'
import Footer from '../components/Footer/index'
import products from '../json/books.json'


function Home() {

  return (
    <div className="container mainLayout">
      <Header 
        className="layoutHeader"
        title="WELCOME TO BOOKSTORE"
        slogan="Let's read books you love!"
      />
      <ProductList products={products} className="layoutContent" />
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Home;
