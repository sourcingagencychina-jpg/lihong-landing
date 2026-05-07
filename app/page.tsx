import type { Metadata } from "next";
import type { CSSProperties } from "react";
import "./page.css";

export const metadata: Metadata = {
  title: "All Products – Shandong Lihong Intelligent Equipment Co., Ltd.",
};

const SHOPLINE_ASSET_BASE =
  "https://lhpackagingmachine.com/cdn/shop/prev/ad1c9cd3e7b07e2c364c985f73188054/1774923603622/assets";

const STYLESHEETS = [
  `${SHOPLINE_ASSET_BASE}/base.css`,
  `${SHOPLINE_ASSET_BASE}/section-header.css`,
  `${SHOPLINE_ASSET_BASE}/section-collections-hero.css`,
  `${SHOPLINE_ASSET_BASE}/section-collection-product-list.css`,
  `${SHOPLINE_ASSET_BASE}/component-card.css`,
] as const;

export default function Home() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      {STYLESHEETS.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}

      <div className="all-products-landing" data-template="collection">
        <header className="header section--padding is-sticky">
          <div className="page-width header__container">
            <div className="header__heading">
              <div className="header__heading-link header__logo-text">
                <span className="logo-lihong">LIHONG</span>
                <span className="logo-divider">|</span>
                <span className="logo-subtitle">Intelligent Equipment</span>
              </div>
            </div>
          </div>
        </header>

        <main
          id="MainContent"
          className="content-for-layout"
          tabIndex={-1}
        >
          <div
            id="shopline-section-main-collection-banner"
            className="shopline-section section"
          >
            <div
              className="collection-hero display-flex page-width"
              style={
                {
                  padding: "10px 20px 5px",
                  textAlign: "center",
                  justifyContent: "center",
                } as CSSProperties
              }
            >
              <div className="collection-hero__no-cover">
                <nav className="breadcrumb body4 text-center" aria-label="Breadcrumb">
                  <span className="breadcrumb__text">Home</span>
                  <span className="breadcrumb__divider">/</span>
                  <span className="breadcrumb__last-crumb" aria-current="page">
                    All Products
                  </span>
                </nav>
                <h1
                  className="title4 collection-hero__title"
                  style={{ marginTop: 8, fontWeight: 700, fontSize: 36 }}
                >
                  All Products
                </h1>
              </div>
            </div>
          </div>

          <div
            id="shopline-section-main-collection-product-list"
            className="shopline-section section"
          >
            <div className="section-padding page-width">
              <div className="main-collection-container">
                <div className="product-list-container" id="ProductListContainer">
                  <div className="collection">
                    <ul className="product-list-content grid grid-cols-2 grid-cols-3-desktop">
                      <ProductCard
                        imageSrc="https://img-va.myshopline.com/image/store/1754207274051/1754300652114.png?w=1111&h=770"
                        imageAlt="Fully automatic packaging machine-LH-DCS-SK50"
                        title="Fully automatic packaging machine-LH-DCS-SK50"
                        eager
                      />
                      <ProductCard
                        imageSrc="https://img-va.myshopline.com/image/store/1754207274051/--13.png?w=589&h=765"
                        imageAlt="Robotic palletizer"
                        title="Robotic palletizer"
                        eager
                      />
                      <ProductCard
                        imageSrc="https://img-va.myshopline.com/image/store/1754207274051/--14.png?w=406&h=610"
                        imageAlt="Column palletizer"
                        title="Column palletizer"
                        eager
                      />
                      <ProductCard
                        imageSrc="https://img-va.myshopline.com/image/store/1754207274051/-.jpeg?w=773&h=413"
                        imageAlt="Dynamic-static fertilizer mixing equipment"
                        title="Dynamic-static fertilizer mixing equipment"
                      />
                      <ProductCard
                        imageSrc="https://img-va.myshopline.com/image/store/1754207274051/1754229550353.jpeg?w=581&h=855"
                        imageAlt="Semi-automatic granule ton bag packaging machine-LH-DCS-K1000"
                        title="Semi-automatic granule ton bag packaging machine-LH-DCS-K1000"
                      />
                      <ProductCard
                        imageSrc="https://img-va.myshopline.com/image/store/1754207274051/--9.png?w=2000&h=2000"
                        imageAlt="Semi-automatic powder ton bag packaging machine-LH-DCS-F1000"
                        title="Semi-automatic powder ton bag packaging machine-LH-DCS-F1000"
                      />
                      <ProductCard
                        imageSrc="https://img-va.myshopline.com/image/store/1754207274051/--8.png?w=616&h=679"
                        imageAlt="Semi-automatic granule packaging machine-LH-DCS-K50"
                        title="Semi-automatic granule packaging machine-LH-DCS-K50"
                      />
                      <ProductCard
                        imageSrc="https://img-va.myshopline.com/image/store/1754207274051/--7.png?w=736&h=720"
                        imageAlt="Semi-automatic powder double bucket packaging machine-LH-DCS-SF50"
                        title="Semi-automatic powder double bucket packaging machine-LH-DCS-SF50"
                      />
                      <ProductCard
                        imageSrc="https://img-va.myshopline.com/image/store/1754207274051/-.png?w=758&h=554"
                        imageAlt="Semi-automatic powder packaging machine"
                        title="Semi-automatic powder packaging machine-LH-DCS-F50"
                      />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer
          className="page-width"
          style={{
            textAlign: "center",
            padding: "30px 20px",
            borderTop: "1px solid #eee",
            fontSize: 14,
            color: "rgb(var(--color-light-text))",
          }}
        >
          <p>© 2026 Shandong Lihong Intelligent Equipment Co., Ltd. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

function ProductCard({
  imageSrc,
  imageAlt,
  title,
  eager,
}: {
  imageSrc: string;
  imageAlt: string;
  title: string;
  eager?: boolean;
}) {
  const cardVars = {
    "--card-image-padding": "0px",
    "--color-card-background": "244, 247, 251",
    "--color-card-text": "0, 0, 0",
  } as CSSProperties;

  const ratioVars = {
    "--ratio-percent": "100%",
    "--image-fill-type": "contain",
    "--image-object-position": "center center",
  } as CSSProperties;

  const contentVars = {
    "--swatch-gap": "6px",
    paddingTop: 15,
  } as CSSProperties;

  return (
    <li className="product-block">
      <div
        className="product-card-wrapper card card-wrapper product-card-style-normal"
        style={cardVars}
      >
        <div className="card-main">
          <div className="card__inner--wrapper global-product-card-border-shadow">
            <div className="card__inner ratio" style={ratioVars}>
              <div className="card__media">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  loading={eager ? "eager" : "lazy"}
                  className="collection-hero__image"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
          <div className="card__content" style={contentVars}>
            <h3 className="product__title body3 full-display fw-bold">{title}</h3>
          </div>
        </div>
      </div>
    </li>
  );
}
