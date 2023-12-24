import { useRouter } from "next/router";
import { fetcher } from "@/lib/swr/fetcher";
import useSWR from "swr";
import DetailProduct from "@/views/DetailProduct";
import { ProductType } from "@/types/product.type";

export const DetailProductPage = ({product} : {product : ProductType}) => {
  const { query } = useRouter();
  console.log(query);

  // client side
  // const { data, error, isLoading } = useSWR(
  //   `/api/product/${query.product} `,
  //   fetcher
  // );
  return (
    <div>
      {/* client side */}
      {/* <DetailProduct product={isLoading ? {} : data.data} /> */}
      {/* server side & static side*/}
            <DetailProduct product={product} />
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/product/")
  const response = await res.json()

  const paths = response.data.map((product: ProductType) => ({
    params: {
      product: product.id,
    }
  }))

  return {paths, fallback: false}
}

export default DetailProductPage;

// export async function getServerSideProps({params}: {params:{product: string}}) {
//   const res = await fetch(`http://localhost:3000/api/product/${params.product}`);
//   const response = await res.json();

//   return {
//     props: {
//       product: response.data,
//     },
//   };
// }

export async function getStaticProps({params}: {params:{product: string}}) {
  const res = await fetch(`http://localhost:3000/api/product/${params.product}`);
  const response = await res.json();

  return {
    props: {
      product: response.data,
    },
  };
}