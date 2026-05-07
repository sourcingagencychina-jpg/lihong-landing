export type ProductItem = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  /** 前几张图与原版一致用 eager */
  eager?: boolean;
};

export const SHOPLINE_ASSET_BASE =
  "https://lhpackagingmachine.com/cdn/shop/prev/ad1c9cd3e7b07e2c364c985f73188054/1774923603622/assets";

export const products: ProductItem[] = [
  {
    imageSrc:
      "https://img-va.myshopline.com/image/store/1754207274051/1754300652114.png?w=1111&h=770",
    imageAlt: "Fully automatic packaging machine-LH-DCS-SK50",
    title: "Fully automatic packaging machine-LH-DCS-SK50",
    eager: true,
  },
  {
    imageSrc:
      "https://img-va.myshopline.com/image/store/1754207274051/--13.png?w=589&h=765",
    imageAlt: "Robotic palletizer",
    title: "Robotic palletizer",
    eager: true,
  },
  {
    imageSrc:
      "https://img-va.myshopline.com/image/store/1754207274051/--14.png?w=406&h=610",
    imageAlt: "Column palletizer",
    title: "Column palletizer",
    eager: true,
  },
  {
    imageSrc:
      "https://img-va.myshopline.com/image/store/1754207274051/-.jpeg?w=773&h=413",
    imageAlt: "Dynamic-static fertilizer mixing equipment",
    title: "Dynamic-static fertilizer mixing equipment",
  },
  {
    imageSrc:
      "https://img-va.myshopline.com/image/store/1754207274051/1754229550353.jpeg?w=581&h=855",
    imageAlt: "Semi-automatic granule ton bag packaging machine-LH-DCS-K1000",
    title: "Semi-automatic granule ton bag packaging machine-LH-DCS-K1000",
  },
  {
    imageSrc:
      "https://img-va.myshopline.com/image/store/1754207274051/--9.png?w=2000&h=2000",
    imageAlt: "Semi-automatic powder ton bag packaging machine-LH-DCS-F1000",
    title: "Semi-automatic powder ton bag packaging machine-LH-DCS-F1000",
  },
  {
    imageSrc:
      "https://img-va.myshopline.com/image/store/1754207274051/--8.png?w=616&h=679",
    imageAlt: "Semi-automatic granule packaging machine-LH-DCS-K50",
    title: "Semi-automatic granule packaging machine-LH-DCS-K50",
  },
  {
    imageSrc:
      "https://img-va.myshopline.com/image/store/1754207274051/--7.png?w=736&h=720",
    imageAlt: "Semi-automatic powder double bucket packaging machine-LH-DCS-SF50",
    title: "Semi-automatic powder double bucket packaging machine-LH-DCS-SF50",
  },
  {
    imageSrc:
      "https://img-va.myshopline.com/image/store/1754207274051/-.png?w=758&h=554",
    imageAlt: "Semi-automatic powder packaging machine",
    title: "Semi-automatic powder packaging machine-LH-DCS-F50",
  },
];
