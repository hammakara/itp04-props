import Footer from './components/Footer';
import Header from './components/Header'
import ProductCard from './components/ProductCard';
import { courses } from './data/courses';
function App() {
  return (
    <div className="page">
      <div className="container">
        {/* Header */}
        <Header />
        {/* Products */}
        <section className="products">
          {
            courses.map((course) => (
              <ProductCard
                key={course.id}
                title={course.title}
                des={course.description}
                image={course.image} 
                price={course.price}
                soldOut={course.soldOut}
                />
            ))
          }
        </section>
        {/* Bottom */}
        <Footer />

      </div>
    </div>
  );
}
export default App;




