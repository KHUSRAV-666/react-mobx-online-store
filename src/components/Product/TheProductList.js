import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext.js";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import ProductItem from "../ProductItem.js";

const ProductList = observer(() => {
  const { catalog } = useContext(AppContext);
  const navigate = useNavigate();

  const handlePageClick = (page) => {
    catalog.page = page;
    // при каждом клике добавляем в историю браузера новый элемент
    navigate("/catalog/", {
      state: {
        category: catalog.category,
        brand: catalog.brand,
        page: catalog.page,
      },
    });
  };

  // содержимое компонента <Pagination>
  const pages = [];
  for (let page = 1; page <= catalog.pages; page++) {
    pages.push(
      <div
        className={`${"base_pag"} ${
          page === currentPage ? "active_pag" : "none_active_pag"
        }`}
        key={page}
        onClick={() => handlePageClick(page)}
      >
        {page}
      </div>
    );
  }

  const productItemsColumn = [
    "grid max-e_sx:grid-cols-1 e_sx:grid-cols-2 e_sx:gap-1 sx:grid-cols-3 md:grid-cols-4 sm:gap-2 xl:grid-cols-4 xl:gap-4 2xl:grid-cols-5 2xl:gap-5 mb-3",
  ];

  return (
    <>
      <div className={productItemsColumn}>
        {products.length ? (
          products.map((item) => (
            <ProductItem key={item.id} data={item} />
          ))
        ) : (
          <p className="text-center">По вашему запросу ничего не найдено</p>
        )}
      </div>
      {catalog.pages > 1 && <div className="flex">{pages}</div>}
    </>
  );
});

export default ProductList;
