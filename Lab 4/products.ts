export interface Product {
  name: string;
  price: number;
  description: string;
  rating: number;
  image: string[];
  link: string;
}

export const products = [
  {
    name: 'Samsung Galaxy S21 FE',
    price: 799,
    description: '5G Cell Phone, Factory Unlocked Android Smartphone, 128GB, 120Hz Display, Pro Grade Camera, All Day Intelligent Battery, US Version, Graphite',
    rating: 4.6,
    link: 'https://www.amazon.com/Samsung-Unlocked-Smartphone-Intelligent-Graphite/dp/B09BFTMQH9/ref=sr_1_1?crid=3PV936U0WTQFE&keywords=samsung&qid=1646487998&rnid=2941120011&s=wireless&sprefix=s%2Caps%2C1172&sr=1-1&th=1',
    image: ['./assets/images/1.jpg', './assets/images/1_1.jpg', './assets/images/1_2.jpg', './assets/images/1_3.jpg']
  },
  {
    name: 'Samsung Galaxy S22 Ultra',
    price: 699,
    description: 'Factory Unlocked Android Cell Phone, 128GB, 8K Camera & Video, Brightest Display, S Pen, Long Battery Life, Fast 4nm Processor, US Version, Phantom Black',
    rating: 3.3,
    link: 'https://www.amazon.com/Samsung-Smartphone-Unlocked-Brightest-Processor/dp/B09MVZSW5V/ref=sr_1_2?crid=3PV936U0WTQFE&keywords=samsung&qid=1646487998&rnid=2941120011&s=wireless&sprefix=s%2Caps%2C1172&sr=1-2',
    image: ['./assets/images/2.jpg', './assets/images/1_1.jpg', './assets/images/1_2.jpg', './assets/images/1_3.jpg']
  },
  {
    name: 'Samsung Galaxy A52',
    price: 299,
    description: 'Factory Unlocked Smartphone, Android Cell Phone, Water Resistant, 64MP Camera, US Version, 128GB, Black',
    rating: 4.5,
    link: 'https://www.amazon.com/Samsung-Factory-Unlocked-Smartphone-Resistant/dp/B08XX4P7LB/ref=sr_1_4?crid=3PV936U0WTQFE&keywords=samsung&qid=1646487998&rnid=2941120011&s=wireless&sprefix=s%2Caps%2C1172&sr=1-4',
    image: ['./assets/images/3.jpg']
  },
  {
    name: 'Samsung Galaxy A12',
    price: 799,
    description: 'Factory Unlocked Smartphone, Android Cell Phone, Multi-Camera System, Expandable Storage, US Version, 32GB, Blacks',
    rating: 4.4,
    link: 'https://www.amazon.com/Electronics-Unlocked-Smartphone-Multi-Camera-Expandable/dp/B08XX66S6Z/ref=sr_1_3?crid=3PV936U0WTQFE&keywords=samsung&qid=1646487998&rnid=2941120011&s=wireless&sprefix=s%2Caps%2C1172&sr=1-3',
    image: ['./assets/images/4.jpg']
  },
  {
    name: 'Samsung Galaxy A42',
    price: 699,
    description: 'Factory Unlocked Smartphone, Android Cell Phone, Multi-Lens Camera, Long-Lasting Battery, US Version, 128GB, Black',
    rating: 4.4,
    link: 'https://www.amazon.com/Samsung-Electronics-Smartphone-Multi-Lens-Long-Lasting/dp/B08ZT3557Q/ref=sr_1_5?crid=3PV936U0WTQFE&keywords=samsung&qid=1646487998&rnid=2941120011&s=wireless&sprefix=s%2Caps%2C1172&sr=1-5',
    image: ['./assets/images/5.jpg']
  },
  {
    name: 'Samsung Galaxy S10e',
    price: 299,
    description: '128GB, Prism Black - Unlocked (Renewed Premium)',
    rating: 4.4,
    link: 'https://www.amazon.com/Samsung-Galaxy-128GB-Prism-Black/dp/B07ZQYZ82X/ref=sr_1_24?crid=3PV936U0WTQFE&keywords=samsung&qid=1646487998&rnid=2941120011&s=wireless&sprefix=s%2Caps%2C1172&sr=1-24',
    image: ['./assets/images/6.jpg']
  },
  {
    name: 'Samsung Galaxy A32',
    price: 799,
    description: '4G Dual A325F-DS 128GB 6GB RAM Factory Unlocked (GSM Only | No CDMA - not Compatible with Verizon/Sprint) International Version - Awesome Black',
    rating: 4.3,
    link: 'https://www.amazon.com/Samsung-Galaxy-A325F-DS-Factory-Unlocked/dp/B08X7Z278W/ref=sr_1_12?crid=3PV936U0WTQFE&keywords=samsung&qid=1646487998&rnid=2941120011&s=wireless&sprefix=s%2Caps%2C1172&sr=1-12',
    image: ['./assets/images/7.jpg']
  },
  {
    name: 'SAMSUNG Galaxy Z Flip 3',
    price: 699,
    description: '5G Factory Unlocked Android Cell Phone US Version Smartphone Flex Mode Intuitive Camera Compact 128GB Storage US Warranty, Phantom Black',
    rating: 4.5,
    link: 'https://www.amazon.com/SAMSUNG-Unlocked-Smartphone-Intuitive-Warranty/dp/B097CN57TH/ref=sr_1_15?crid=3PV936U0WTQFE&keywords=samsung&qid=1646487998&rnid=2941120011&s=wireless&sprefix=s%2Caps%2C1172&sr=1-15',
    image: ['./assets/images/8.jpg']
  },
  {
    name: 'Samsung Galaxy S20 FE',
    price: 299,
    description: '256GB, 8GB 6.5" 120Hz AMOLED, Snapdragon 865, IP68 Water Resistant, Dual SIM GSM Unlocked (Global 4G LTE) International Model SM-G780G/DS (Wireless Charger Bundle, Navy)',
    rating: 4.4,
    link: 'https://www.amazon.com/Samsung-Snapdragon-Resistant-Unlocked-International/dp/B09BK9QWD4/ref=sr_1_22?crid=3PV936U0WTQFE&keywords=samsung&qid=1646487998&rnid=2941120011&s=wireless&sprefix=s%2Caps%2C1172&sr=1-22',
    image: ['./assets/images/9.jpg']
  },
  {
    name: 'Samsung Galaxy XCover Pro',
    price: 299,
    description: '(IP68 Rated) Unlocked (Verizon and AT&T) | Dual Sim | 64GB of Storage | SM-G715UZKDXAA, Black',
    rating: 3.9,
    link: 'https://www.amazon.com/Samsung-Unlocked-Storage-Version-Warranty/dp/B085WTR7BJ/ref=sr_1_23?crid=3PV936U0WTQFE&keywords=samsung&qid=1646487998&rnid=2941120011&s=wireless&sprefix=s%2Caps%2C1172&sr=1-23',
    image: ['./assets/images/10.jpg']
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/