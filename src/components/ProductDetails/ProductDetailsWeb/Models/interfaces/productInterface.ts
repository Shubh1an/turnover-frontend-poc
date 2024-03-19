export interface IProductDetials {
  prodectName: "Doritos Floavoured Tortilla Variety, Pack of 10";
  upc: "UPC:123456789 32";
  quantity: 1;
  price: 29.0;
  offer: 33;
  offerPrice: 19.99;
  MSRP: 25;
  flavours: [
    { title: "Bold Mix"; isAvailable: true },
    { title: "Dorito Chips"; isAvailable: true },
    { title: "Dorito Chips"; isAvailable: true },
    { title: "Dorito Chips"; isAvailable: true },
    { title: "Nacho Cheese"; isAvailable: true },
    { title: "Hot chips"; isAvailable: true },
    { title: "Flamin’ Hot"; isAvailable: false },
    { title: "Hot & Spicy"; isAvailable: false }
  ];
  referralCode: "New15Off";
  productDetails: {
    brand: "Doritos";
    flavour: "Bold Mix";
    unitCount: 40;
    type: "Tortilla Variety";
    manufactureCode: "ABC123XYZ";
    description: [
      "Doritos variety pack includes four 10 oz bags - 2 Nacho Cheese, 1 Cool Ranch, and 1 Spicy Nacho",
      "Your favorite flavored tortilla chips in large size bags",
      "Perfect snack for sharing with friends at your next get-together",
      "Crunchy chips and boldness make Doritos snacks awesome and great for your pantry",
      "Variety sure to please any Doritos fan"
    ];
    overall_rating: 4.5;
    "reviews&ratings": [
      {
        reviewedName: "Sarah Rose";
        rating: 4.5;
        title: "Bright & flawless";
        helpful: 3;
        review: "Thsee were by far the best doritos I have ever tasted. It was like tasting a rainbow, heaven, and earth all combined into one wonderful bag of doritos. I don't know what they did to it but wooh I wanted to give a hug to the workers that made these awesome as hell chips.";
      },
      {
        reviewedName: "paul sidorowicz";
        rating: 4.5;
        title: "Bright & flawless";
        helpful: 3;
        review: "What can I say..... They are Doritos. The price was excellent.";
      }
    ];
    shippingPolicy: [
      "Specify any shipping fees associated with different shipping methods or order values. Be transparent about any additional charges such as handling fees or taxes.",
      "Outline any geographical limitations or restrictions on shipping to certain locations, including international shipping policies if applicable",
      "Explain how customers can track their orders once they have been shipped. Provide information on tracking numbers, shipment notifications, and how to contact customer support for assistance"
    ];
    returnPolicy: [
      "Clearly define the conditions under which customers can return items, including reasons such as damaged goods, incorrect items received, or change of mind.",
      "Specify the timeframe within which returns must be initiated after the customer receives the order. This could be a certain number of days from delivery or from the date of purchase.",
      "Clarify who is responsible for return shipping costs. Some businesses offer free returns, while others may require customers to cover the return shipping expenses.",
      "Provide specific instructions for customers who receive defective or damaged items, including how to report the issue and whether they need to provide evidence such as photographs."
    ];
    productImgs: [
      "https://res.cloudinary.com/dto1l2vmb/image/upload/v1710481782/main.png",
      "https://res.cloudinary.com/dto1l2vmb/image/upload/v1710481905/i3atts52whcysmabyq2a.jpg",
      "https://res.cloudinary.com/dto1l2vmb/image/upload/v1710481905/b1kcsq0karaun7cgrl72.jpg",
      "https://res.cloudinary.com/dto1l2vmb/image/upload/v1710481905/m58wil9k44g3rkfbab8n.jpg",
      "https://res.cloudinary.com/dto1l2vmb/image/upload/v1710481905/uxgac2ct2ppxcdojp651.jpg"
    ];
  };
}
export interface IFlavour {
  title: string;
  isAvailable: boolean;
}
export interface IFlavours {
  flavours: IFlavour[];
}

export interface IProductListData{
  "numberOfItems": 5,
  "items": [
      {
          "brandName": "LAYS",
          "fullName": "Potatp Chips Variety Pack, 1 Ounce (Pack of 40)",
          "ifOffered": true,
          "price": 40,
          "offerPrice": 29,
          "offer": 19,
          "MSRP": 25,
          "imgURL": "https://res.cloudinary.com/dto1l2vmb/image/upload/v1710507197/qs3vvvprjh18tc9hfgyl.jpg"
      },
      {
          "brandName": "LAYS",
          "fullName": "Potatp Chips Variety Pack, 1 Ounce (Pack of 40)",
          "ifOffered": false,
          "price": 29,
          "offerPrice": 0,
          "offer": 0,
          "MSRP": 25,
          "imgURL": "https://res.cloudinary.com/dto1l2vmb/image/upload/v1710507338/vf1fra5plhsj8zqst0gf.webp"
      },
      {
          "brandName": "LAYS",
          "fullName": "Potatp Chips Variety Pack, 1 Ounce (Pack of 40)",
          "ifOffered": false,
          "price": 29,
          "offerPrice": 0,
          "offer": 0,
          "MSRP": 25,
          "imgURL": "https://res.cloudinary.com/dto1l2vmb/image/upload/v1710507423/nwx7nw39xfz1noym82wj.jpg"
      },
      {
          "brandName": "LAYS",
          "fullName": "Potatp Chips Variety Pack, 1 Ounce (Pack of 40)",
          "ifOffered": true,
          "price": 40,
          "offerPrice": 29,
          "offer": 19,
          "MSRP": 25,
          "imgURL": "https://res.cloudinary.com/dto1l2vmb/image/upload/v1710507473/gqtfgxola6gqzey7qkyj.jpg"
      },
      {
          "brandName": "LAYS",
          "fullName": "Potatp Chips Variety Pack, 1 Ounce (Pack of 40)",
          "ifOffered": false,
          "price": 29,
          "offerPrice": 0,
          "offer": 0,
          "MSRP": 25,
          "imgURL": "https://res.cloudinary.com/dto1l2vmb/image/upload/v1710507197/qs3vvvprjh18tc9hfgyl.jpg"
      }
  ]
}