import Link from "next/link";

const productList = () =>
{
    return (
      <>
        <h1>商品一覧</h1>
        <ul className="product-list">
          <li>
            <Link href="/products/sp">スマートフォン</Link>
          </li>
          <li>
            <Link href="/products/pc">パソコン</Link>
          </li>
          <li>
            <Link href="/products/tablet">タブレット</Link>
          </li>
        </ul>
      </>
    );
}

export default productList;