import { useEffect, useState } from "react";
import RecommandProduct from "../RecommandProduct";
import axios from "axios";

function CourseSingleProduct({ bodyPart }) {
  const [product, setProduct] = useState();
  useEffect(async () => {
    //取得推薦商品
    let recommandProduct = await axios.post(
      `http://localhost:3001/course/topThreeProduct`,
      { bodyPartId: bodyPart },
      {
        withCredentials: true,
      }
    );
    setProduct(recommandProduct.data);
  }, [bodyPart]);
  console.log(bodyPart);
  console.log(product);
  if (bodyPart === undefined || product === undefined) {
    return <></>;
  }
  return (
    <>
      <div className="d-flex Article__area__title normalMouse">
        <i class="fas fa-shopping-bag Course__area__icon p-2"></i>
        <h2>推薦商品</h2>
      </div>
      {product.map((item) => {
        return (
          <RecommandProduct
            key={item.id}
            productId={item.id}
            name={item.title}
            sold={item.sold}
            part={item.body_part_id}
            price={item.price}
            rate={item.average_rate}
            category={item.product_type_id}
            image={item.image}
          />
        );
      })}
    </>
  );
}

export default CourseSingleProduct;
