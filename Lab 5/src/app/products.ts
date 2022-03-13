export interface Product {
  id: number
  name: string;
  price: number;
  description: string;
  rating: number;
  image: string[];
  link: string;
}


export const products = [
  {
    id: 1,
    name: 'Samsung Galaxy S21 FE',
    price: 799,
    description: '5G Cell Phone, Factory Unlocked Android Smartphone, 128GB, 120Hz Display, Pro Grade Camera, All Day Intelligent Battery, US Version, Graphite',
    rating: 4.6,
    link: 'https://www.amazon.com/Samsung-Unlocked-Smartphone-Intelligent-Graphite/dp/B09BFTMQH9/ref=sr_1_1?crid=3PV936U0WTQFE&keywords=samsung&qid=1646487998&rnid=2941120011&s=wireless&sprefix=s%2Caps%2C1172&sr=1-1&th=1',
    image: ['./assets/images/1.jpg', './assets/images/1_1.jpg', './assets/images/1_2.jpg', './assets/images/1_3.jpg']
  },
  {
    id: 2,
    name: 'Samsung Galaxy S22 Ultra',
    price: 699,
    description: 'Factory Unlocked Android Cell Phone, 128GB, 8K Camera & Video, Brightest Display, S Pen, Long Battery Life, Fast 4nm Processor, US Version, Phantom Black',
    rating: 3.3,
    link: 'https://www.amazon.com/Samsung-Smartphone-Unlocked-Brightest-Processor/dp/B09MVZSW5V/ref=sr_1_2?crid=3PV936U0WTQFE&keywords=samsung&qid=1646487998&rnid=2941120011&s=wireless&sprefix=s%2Caps%2C1172&sr=1-2',
    image: ['./assets/images/2.jpg', './assets/images/1_1.jpg', './assets/images/1_2.jpg', './assets/images/1_3.jpg']
  },
  {
    id: 3,
    name: 'Samsung Galaxy A52',
    price: 299,
    description: 'Factory Unlocked Smartphone, Android Cell Phone, Water Resistant, 64MP Camera, US Version, 128GB, Black',
    rating: 4.5,
    link: 'https://www.amazon.com/Samsung-Factory-Unlocked-Smartphone-Resistant/dp/B08XX4P7LB/ref=sr_1_4?crid=3PV936U0WTQFE&keywords=samsung&qid=1646487998&rnid=2941120011&s=wireless&sprefix=s%2Caps%2C1172&sr=1-4',
    image: ['./assets/images/3.jpg']
  },
  {
    id: 4,
    name: 'Samsung Galaxy A12',
    price: 799,
    description: 'Factory Unlocked Smartphone, Android Cell Phone, Multi-Camera System, Expandable Storage, US Version, 32GB, Blacks',
    rating: 4.4,
    link: 'https://www.amazon.com/Electronics-Unlocked-Smartphone-Multi-Camera-Expandable/dp/B08XX66S6Z/ref=sr_1_3?crid=3PV936U0WTQFE&keywords=samsung&qid=1646487998&rnid=2941120011&s=wireless&sprefix=s%2Caps%2C1172&sr=1-3',
    image: ['./assets/images/4.jpg']
  },
  {
    id: 5,
    name: 'Samsung Galaxy A42',
    price: 699,
    description: 'Factory Unlocked Smartphone, Android Cell Phone, Multi-Lens Camera, Long-Lasting Battery, US Version, 128GB, Black',
    rating: 4.4,
    link: 'https://www.amazon.com/Samsung-Electronics-Smartphone-Multi-Lens-Long-Lasting/dp/B08ZT3557Q/ref=sr_1_5?crid=3PV936U0WTQFE&keywords=samsung&qid=1646487998&rnid=2941120011&s=wireless&sprefix=s%2Caps%2C1172&sr=1-5',
    image: ['./assets/images/5.jpg']
  },
  {
    id: 6,
    name: 'Samsung Galaxy S10e',
    price: 299,
    description: '128GB, Prism Black - Unlocked (Renewed Premium)',
    rating: 4.4,
    link: 'https://www.amazon.com/Samsung-Galaxy-128GB-Prism-Black/dp/B07ZQYZ82X/ref=sr_1_24?crid=3PV936U0WTQFE&keywords=samsung&qid=1646487998&rnid=2941120011&s=wireless&sprefix=s%2Caps%2C1172&sr=1-24',
    image: ['./assets/images/6.jpg']
  },
  {
    id: 7,
    name: 'Samsung Galaxy A32',
    price: 799,
    description: '4G Dual A325F-DS 128GB 6GB RAM Factory Unlocked (GSM Only | No CDMA - not Compatible with Verizon/Sprint) International Version - Awesome Black',
    rating: 4.3,
    link: 'https://www.amazon.com/Samsung-Galaxy-A325F-DS-Factory-Unlocked/dp/B08X7Z278W/ref=sr_1_12?crid=3PV936U0WTQFE&keywords=samsung&qid=1646487998&rnid=2941120011&s=wireless&sprefix=s%2Caps%2C1172&sr=1-12',
    image: ['./assets/images/7.jpg']
  },
  {
    id: 8,
    name: 'SAMSUNG Galaxy Z Flip 3',
    price: 699,
    description: '5G Factory Unlocked Android Cell Phone US Version Smartphone Flex Mode Intuitive Camera Compact 128GB Storage US Warranty, Phantom Black',
    rating: 4.5,
    link: 'https://www.amazon.com/SAMSUNG-Unlocked-Smartphone-Intuitive-Warranty/dp/B097CN57TH/ref=sr_1_15?crid=3PV936U0WTQFE&keywords=samsung&qid=1646487998&rnid=2941120011&s=wireless&sprefix=s%2Caps%2C1172&sr=1-15',
    image: ['./assets/images/8.jpg']
  },
  {
    id: 9,
    name: 'Samsung Galaxy S20 FE',
    price: 299,
    description: '256GB, 8GB 6.5" 120Hz AMOLED, Snapdragon 865, IP68 Water Resistant, Dual SIM GSM Unlocked (Global 4G LTE) International Model SM-G780G/DS (Wireless Charger Bundle, Navy)',
    rating: 4.4,
    link: 'https://www.amazon.com/Samsung-Snapdragon-Resistant-Unlocked-International/dp/B09BK9QWD4/ref=sr_1_22?crid=3PV936U0WTQFE&keywords=samsung&qid=1646487998&rnid=2941120011&s=wireless&sprefix=s%2Caps%2C1172&sr=1-22',
    image: ['./assets/images/9.jpg']
  },
  {
    id: 10,
    name: 'Samsung Galaxy XCover Pro',
    price: 299,
    description: '(IP68 Rated) Unlocked (Verizon and AT&T) | Dual Sim | 64GB of Storage | SM-G715UZKDXAA, Black',
    rating: 3.9,
    link: 'https://www.amazon.com/Samsung-Unlocked-Storage-Version-Warranty/dp/B085WTR7BJ/ref=sr_1_23?crid=3PV936U0WTQFE&keywords=samsung&qid=1646487998&rnid=2941120011&s=wireless&sprefix=s%2Caps%2C1172&sr=1-23',
    image: ['./assets/images/10.jpg']
  }
];



export const apple_products = [
  {
    id: 1,
    name: 'Apple iPhone 11 Pro',
    price: 899,
    description: '256GB, Midnight Green - Fully Unlocked (Renewed Premium)',
    rating: 4.4,
    link: 'https://www.amazon.com/Apple-iPhone-256GB-Midnight-Green/dp/B08BHXC5ZS/ref=sr_1_1?crid=2U0XI0TZXE4VC&keywords=iphone&qid=1647094012&sprefix=ipho%2Caps%2C351&sr=8-1',
    image: ['./assets/images/apple1.jpg']
  },
  {
    id: 2,
    name: 'Apple iPhone 12 Pro',
    price: 999,
    description: '128GB, Pacific Blue - Unlocked (Renewed Premium)',
    rating: 3.2,
    link: 'https://www.amazon.com/Apple-iPhone-12-Pro-Pacific/dp/B09JFNMBWL/ref=sr_1_2?crid=2U0XI0TZXE4VC&keywords=iphone&qid=1647094012&sprefix=ipho%2Caps%2C351&sr=8-2',
    image: ['./assets/images/apple2.jpg']
    },
  {
    id: 3,
    name: 'Apple iPhone 7',
    price: 699,
    description: '4G LTE Prepaid Smartphone - 32GB - Black - Carrier Locked',
    rating: 4.5,
    link: 'https://www.amazon.com/Tracfone-Apple-iPhone-Prepaid-Smartphone/dp/B08CL4CCG2/ref=sr_1_7?crid=2U0XI0TZXE4VC&keywords=iphone&qid=1647094012&sprefix=ipho%2Caps%2C351&sr=8-7',
    image: ['./assets/images/apple3.jpg']
    },
  {
    id: 4,
    name: 'Apple iPhone SE',
    price: 799,
    description: '16GB Unlocked, Rose Gold',
    rating: 4.4,
    link: 'https://www.amazon.com/iPhone-16GB-Unlocked-Rose-Gold/dp/B0999VZ2S4/ref=sr_1_11?crid=2U0XI0TZXE4VC&keywords=iphone&qid=1647094012&sprefix=ipho%2Caps%2C351&sr=8-11',
    image: ['./assets/images/apple4.jpg']
    },
  {
    id: 5,
    name: 'Apple iPhone X',
    price: 899,
    description: '64GB, Silver - GSM Unlocked (Renewed Premium)',
    rating: 4.4,
    link: 'https://www.amazon.com/Apple-iPhone-64GB-Silver-Unlocked/dp/B08BJHS8K4/ref=sr_1_15?crid=2U0XI0TZXE4VC&keywords=iphone&qid=1647094012&sprefix=ipho%2Caps%2C351&sr=8-15&th=1',
    image: ['./assets/images/apple5.jpg']
    }
];

export const huawei_products = [
  {
    id: 1,
    name: 'Huawei Mate 10',
    price: 599,
    description: 'ALP-L29 64GB Mocha Brown, Dual SIM, 5.9", Dual 20 MP +12 MP, GSM Unlocked International Model, No Warranty',
    rating: 4.6,
    link: 'https://www.amazon.com/Mate-10-ALP-L29-Unlocked-International/dp/B0772P5NC8/ref=sr_1_1?crid=1UCLYTVPVJ5MG&keywords=huawei&qid=1647094629&sprefix=huawe%2Caps%2C430&sr=8-1',
    image: ['./assets/images/huawei1.jpg']
    },
  {
    id: 2,
    name: 'Huawei P30 Pro',
    price: 699,
    description: 'Factory Unlocked Android Cell Phone, 128GB, 8K Camera & Video, Brightest Display, S Pen, Long Battery Life, Fast 4nm Processor, US Version, Phantom Black',
    rating: 3.3,
    link: 'https://www.amazon.com/Huawei-128GB-VOG-L29-International-Version/dp/B07PL5PD7V/ref=sr_1_2?crid=1UCLYTVPVJ5MG&keywords=huawei&qid=1647094629&sprefix=huawe%2Caps%2C430&sr=8-2&th=1',
    image: ['./assets/images/huawei2.jpg']
    },
  {
    id: 3,
    name: 'Huawei Y7 Prime',
    price: 299,
    description: 'Factory Unlocked Smartphone, Android Cell Phone, Water Resistant, 64MP Camera, US Version, 128GB, Black',
    rating: 4.5,
    link: 'https://www.amazon.com/TRT-L53-Factory-Unlocked-Carribean-Desbloqueado/dp/B07D5J57MQ/ref=sr_1_3?crid=1UCLYTVPVJ5MG&keywords=huawei&qid=1647094629&sprefix=huawe%2Caps%2C430&sr=8-3',
    image: ['./assets/images/huawei3.jpg']
  },
  {
    id: 4,
    name: 'Huawei Nova 5T',
    price: 799,
    description: 'Factory Unlocked Smartphone, Android Cell Phone, Multi-Camera System, Expandable Storage, US Version, 32GB, Blacks',
    rating: 4.4,
    link: 'https://www.amazon.com/Huawei-Nova-5T-Unlocked-International/dp/B07YLKYQCF/ref=sr_1_4?crid=1UCLYTVPVJ5MG&keywords=huawei&qid=1647094629&sprefix=huawe%2Caps%2C430&sr=8-4',
    image: ['./assets/images/huawei4.jpg']
  },
  {
    id: 5,
    name: 'Huawei P30 Pro Dual',
    price: 699,
    description: 'Factory Unlocked Smartphone, Android Cell Phone, Multi-Lens Camera, Long-Lasting Battery, US Version, 128GB, Black',
    rating: 4.4,
    link: 'https://www.amazon.com/Hybrid-SIM-VOG-L29-Factory-Unlocked-Smartphone/dp/B07PWBR7KK/ref=sr_1_5?crid=1UCLYTVPVJ5MG&keywords=huawei&qid=1647094629&sprefix=huawe%2Caps%2C430&sr=8-5',
    image: ['./assets/images/huawei5.jpg']
  }
];

export const xiaomi_products = [
  {
    id: 1,
    name: 'Xiaomi 11T',
    price: 499,
    description: '5G Cell Phone, Factory Unlocked Android Smartphone, 128GB, 120Hz Display, Pro Grade Camera, All Day Intelligent Battery, US Version, Graphite',
    rating: 4.6,
    link: 'https://www.amazon.com/Xiaomi-Compatible-Verizon-Unlocked-Moonlight/dp/B09GVQP857/ref=sr_1_2?crid=Y4KY4R2GNF8G&keywords=xiaomi&qid=1647095024&sprefix=xiaomi%2Caps%2C287&sr=8-2',
    image: ['./assets/images/xiaomi1.jpg']
    },
  {
    id: 2,
    name: 'Xiaomi Redmi 9',
    price: 699,
    description: 'Factory Unlocked Android Cell Phone, 128GB, 8K Camera & Video, Brightest Display, S Pen, Long Battery Life, Fast 4nm Processor, US Version, Phantom Black',
    rating: 3.3,
    link: 'https://www.amazon.com/Xiaomi-Unlocked-T-Mobile-Straight-International/dp/B08CVS9JVH/ref=sr_1_5?crid=Y4KY4R2GNF8G&keywords=xiaomi&qid=1647095024&sprefix=xiaomi%2Caps%2C287&sr=8-5',
    image: ['./assets/images/xiaomi2.jpg']
    },
  {
    id: 3,
    name: 'Xiaomi Mi 11 Lite',
    price: 299,
    description: 'Factory Unlocked Smartphone, Android Cell Phone, Water Resistant, 64MP Camera, US Version, 128GB, Black',
    rating: 4.5,
    link: 'https://www.amazon.com/Xiaomi-Snapdragon-Unlocked-International-Version/dp/B093JJWXSY/ref=sr_1_6?crid=Y4KY4R2GNF8G&keywords=xiaomi&qid=1647095024&sprefix=xiaomi%2Caps%2C287&sr=8-6',
    image: ['./assets/images/xiaomi3.jpg']
    },
  {
    id: 4,
    name: 'Xiaomi Note 10',
    price: 799,
    description: 'Factory Unlocked Smartphone, Android Cell Phone, Multi-Camera System, Expandable Storage, US Version, 32GB, Blacks',
    rating: 4.4,
    link: 'https://www.amazon.com/Xiaomi-Unlocked-Worldwide-Verizon-Graphite/dp/B094XYSCBT/ref=sr_1_7?crid=Y4KY4R2GNF8G&keywords=xiaomi&qid=1647095024&sprefix=xiaomi%2Caps%2C287&sr=8-7',
    image: ['./assets/images/xiaomi4.jpg']
    },
  {
    id: 5,
    name: 'Xiaomi Redmi 10',
    price: 699,
    description: 'Factory Unlocked Smartphone, Android Cell Phone, Multi-Lens Camera, Long-Lasting Battery, US Version, 128GB, Black',
    rating: 4.4,
    link: 'https://www.amazon.com/Xiaomi-Factory-Unlocked-Verizon-Cricket/dp/B09DGVLM8C/ref=sr_1_11?crid=Y4KY4R2GNF8G&keywords=xiaomi&qid=1647095024&sprefix=xiaomi%2Caps%2C287&sr=8-11',
    image: ['./assets/images/xiaomi5.jpg']
    }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/