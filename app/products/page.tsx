import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { products, SHOPLINE_ASSET_BASE } from "./data";

export const metadata: Metadata = {
  title: "All Products – Shandong Lihong Intelligent Equipment Co., Ltd.",
};

const stylesheets = [
  `${SHOPLINE_ASSET_BASE}/base.css`,
  `${SHOPLINE_ASSET_BASE}/section-header.css`,
  `${SHOPLINE_ASSET_BASE}/section-collections-hero.css`,
  `${SHOPLINE_ASSET_BASE}/section-collection-product-list.css`,
  `${SHOPLINE_ASSET_BASE}/component-card.css`,
] as const;

export default function AllProductsPage() {
  return (
    <>
      {stylesheets.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}

      <div data-template="collection">
        <header className="header section--padding is-sticky">
          <div className="page-width header__container">
            <div className="header__heading">
              <div className="header__heading-link">
                <img
                  src="https://img-va.myshopline.com/image/store/1754207274051/1754209337059(1).png?w=1238&h=383"
                  alt="Logo"
                  className="header__heading-logo"
                  width={1238}
                  height={383}
                />
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
              style={{
                padding: "40px 20px",
                textAlign: "center",
                justifyContent: "center",
              }}
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
                  style={{ marginTop: 20, fontWeight: 700 }}
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
                      {products.map((p) => (
                        <li key={p.imageSrc} className="product-block">
                          <div
                            className="product-card-wrapper card card-wrapper product-card-style-normal"
                            style={
                              {
                                "--card-image-padding": "0px",
                                "--color-card-background": "244, 247, 251",
                                "--color-card-text": "0, 0, 0",
                              } as CSSProperties
                            }
                          >
                            <div className="card-main">
                              <div className="card__inner--wrapper global-product-card-border-shadow">
                                <div
                                  className="card__inner ratio"
                                  style={
                                    {
                                      "--ratio-percent": "100%",
                                      "--image-fill-type": "contain",
                                      "--image-object-position": "center center",
                                    } as CSSProperties
                                  }
                                >
                                  <div className="card__media">
                                    <img
                                      src={p.imageSrc}
                                      alt={p.imageAlt}
                                      loading={p.eager ? "eager" : "lazy"}
                                      className="collection-hero__image"
                                      style={{ height: "auto" }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="card__content"
                                style={
                                  {
                                    "--swatch-gap": "6px",
                                    paddingTop: 15,
                                  } as CSSProperties
                                }
                              >
                                <h3 className="product__title body3 full-display fw-bold">
                                  {p.title}
                                </h3>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
