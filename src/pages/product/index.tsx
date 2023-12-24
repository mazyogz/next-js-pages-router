import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductView from "../../views/Product";
import useSWR from "swr";
import {fetcher} from "../../lib/swr/fetcher"


const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const { push } = useRouter();

  // useEffect(() => {
  //   push('/')
  // },[])


  const { data, error, isLoading } = useSWR(
    "/api/product",
    fetcher
  );

  // useEffect(() => {
  //   fetch("/api/product")
  //     .then((res) => res.json())
  //     .then((response) => {
  //       setProducts(response.data);
  //     });
  // });
  return (
<div>
  <ProductView products={isLoading ? [] : data.data}/>
</div>
  );
};

export default ProductPage;
