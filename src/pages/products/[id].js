import { useRouter } from "next/router";
import Image from "next/image";

// SSGの場合
export async function getStaticProps({params})
{
  const req = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await req.json();
  return {
    props: {
      product: data,
    }
  }
};

export async function getStaticPaths()
{
  const req = await fetch(`http://localhost:3000/products.json`);
  const data = await req.json();
  const paths = data.map((product) =>
  {
    return {
      params: {
        id: product,
      },
    };
  });
  return {
    paths,
    fallback: false,
  }
}

//SSR
// export async function getServerSideProps({ params })
// {
//   const req = await fetch(`http://localhost:3000/${params.id}.json`);
//   const data = await req.json();

//   return {
//     props: {
//       product: data,
//     },
//   };
// };

const Product = ({product}) =>
{
  const router = useRouter();
  const id = router.query.id;
  return (
    <>
      <h1>{id}ページです。</h1>
      <div className="thumbnail">
        <Image src={product.image} alt={id} width={500} height={400} />
      </div>
      <p>{product.name}</p>
    </>
  );
}

export default Product;