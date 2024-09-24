import React, { useEffect } from "react";
import Header from "../components/Header";
import Product from "../components/Product";
import Newslatter from "../components/Newslatter";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage, setProduct } from "../redux/slices/ProPagenationSlice";
import { ProductData } from "../data/dummyData";

function Shop() {
  const dispatch = useDispatch();
  const { products, currentPage, itemsPerPage } = useSelector(
    (state) => state.product
  );
  useEffect(() => {
    dispatch(setProduct(ProductData));
  }, [dispatch]);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProduct = products.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };
  return (
    <>
      <Header></Header>
      <section id="page-header" className="p-4">
        <h2>#StayHome</h2>
        <p>Save more with coupen and get 70% off!</p>
      </section>
      <Product product={currentProduct} />
      <Pagination
        totalItems={products.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      <Newslatter />
      <Footer />
    </>
  );
}

export default Shop;
