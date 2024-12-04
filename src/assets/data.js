import img1 from './images/img1.jpg';
import galaxyBook from './images/galaxyBook.jpg';
import headsetlogo from './images/headset.avif';
import laplogo from './images/laplogo.jpg';
import phoneLogo from './images/phonelogo.avif';
import mac2016 from './images/macbook2016.jpg';
import macpro from './images/macbookpro.jpg';
import mca2024 from './images/macbook2024.jpg';
import quantom from './images/quantom7c.jpg';
import huawei from './images/HuaweiLogo.png';
import lenovo from './images/LenovoLogo.png';
import samsung from './images/samsung-brand.png';
import apple from './images/Apple-Logo.png';

import beats from './images/Beats.jpg';
import jbl from './images/jbl.jpg';
import sony from './images/sony.webp';
import beats2 from './images/Beats-by-Dre.jpg';

import apple15 from './images/apple-15.jpg';
import huaweinova from './images/huawei-nova.jpg';
import oneplus from './images/oneplus.webp';
import sultra from './images/s23-ultra.webp';


import banner2 from './images/banner2.avif';
import estore from './images/electronics-store.jpg';
import estore2 from './images/electronics-store2.jpg';
import carousel from './images/carousel-2.jpg';






export const images ={
    img1,

    // banners
    banner2,
    estore,
    estore2,
    carousel,

    // laptops
    galaxyBook,
    mac2016,
    mca2024,
    macpro,
    quantom,
    
    // logo
    laplogo,
    phoneLogo,
    huawei,
    samsung,
    apple,
    lenovo,

    // headset
    headsetlogo,
    beats,
    beats2,
    jbl,
    sony,

    // phones
    huaweinova,
    sultra,
    apple15,
    oneplus,

}

export  const  products= [
  // laptops
  {
    key: 'L1',
    image: images.galaxyBook,
    title: 'SAMSUNG Galaxy Note book',
    tag:[],
    price: '1300.50',
    sale: '1100.50',
    description:`Contrary to popular belief, Lorem Ipsum 
    is not simply random text. It has roots in a piece of 
    classical Latin literature from 45 BC, making it over 2000 years old.`
  },
  {
    key: 'L2',
    image: images.mac2016,
    title: 'Apple MacBook Air - 2020',
    tag:[],
    price: '5200.50',
    sale: '4200.50',
    description:`Contrary to popular belief, Lorem Ipsum 
    is not simply random text. It has roots in a piece of 
    classical Latin literature from 45 BC, making it over 2000 years old.`
  },
  {
    key: 'L3',
    image: images.macpro,
    title: 'Apple MacBook Pro - 2024',
    tag:["sale"],
    price: '1700.50',
    sale: '1500.50',
    description:`Contrary to popular belief, Lorem Ipsum 
    is not simply random text. It has roots in a piece of 
    classical Latin literature from 45 BC, making it over 2000 years old.`
  },
  {
    key: 'L4',
    image: images.mca2024,
    title: 'Apple MacBook Air - 2024',
    tag:["new"],
    price: '1900.50',
    sale: '1600.50',
    description:`Contrary to popular belief, Lorem Ipsum 
    is not simply random text. It has roots in a piece of 
    classical Latin literature from 45 BC, making it over 2000 years old.`
  },

  //  phones
  {
    key: 'P1',
    image: images.apple15,
    title: 'Apple 15 Pro Max',
    tag:["sale"],
    price: '4302.00',
    sale: '4102.00',
    description:`Contrary to popular belief, Lorem Ipsum 
    is not simply random text. It has roots in a piece of 
    classical Latin literature from 45 BC, making it over 2000 years old.`
  },
  {
    key: 'P2',
    image: images.huaweinova,
    title: 'Huawei Nova 3',
    tag:["new"],
    price: '1300.50',
    sale: '1100.50',
    description:`Contrary to popular belief, Lorem Ipsum 
    is not simply random text. It has roots in a piece of 
    classical Latin literature from 45 BC, making it over 2000 years old.`
  },
  {
    key: 'P3',
    image: images.sultra,
    title: 'SAMSUNG-Note 22 Ultra',
    tag:["sale"],
    price: '6200.50',
    sale: '5800.50',
    description:`Contrary to popular belief, Lorem Ipsum 
    is not simply random text. It has roots in a piece of 
    classical Latin literature from 45 BC, making it over 2000 years old.`
  },
  {
    key: 'P4',
    image: images.oneplus,
    title: 'One Plus Note 20',
    tag:[],
     price: '1200.50',
    sale: '1200.50',
    description:`Contrary to popular belief, Lorem Ipsum 
    is not simply random text. It has roots in a piece of 
    classical Latin literature from 45 BC, making it over 2000 years old.`
  },

  // headSets
  {
    key: 'H1',
    image: images.sony,
    title: 'Sony Supper vx',
    tag:["new"],
     price: '1200.50',
    sale: '1200.50',
    description:`Contrary to popular belief, Lorem Ipsum 
    is not simply random text. It has roots in a piece of 
    classical Latin literature from 45 BC, making it over 2000 years old.`
  },
  {
    key: 'H2',
    image: images.jbl,
    title: 'JBL',
    tag:["sale"],
    price: '1200.50',
    sale: '1200.50',
    description:`Contrary to popular belief, Lorem Ipsum 
    is not simply random text. It has roots in a piece of 
    classical Latin literature from 45 BC, making it over 2000 years old.`
  },
  {
    key: 'H3',
    image: images.beats,
    title: 'Beats Electronics',
    tag:["new"],
    price: '1200.50',
    sale: '1200.50',
    description:`Contrary to popular belief, Lorem Ipsum 
    is not simply random text. It has roots in a piece of 
    classical Latin literature from 45 BC, making it over 2000 years old.`
  },
  {
    key: 'H5',
    image: images.beats2,
    title: 'Beats pro sound',
    tag:["sale"],
    price: '1200.50',
    sale: '1200.50',
    description:`Contrary to popular belief, Lorem Ipsum 
    is not simply random text. It has roots in a piece of 
    classical Latin literature from 45 BC, making it over 2000 years old.`
  }
  ]


  export const featured = [
    {
      image: images.mca2024,
      title: 'Kelloggs Crunchy Nut Hazelnut',
      cost: '1402.50',
      link: 'https://www.google.com/'
    },
    {
      image: images.galaxyBook,
      title: 'Branston Baked Beans in a Rich',
      cost: '1200.50',
      link: 'https://www.google.com/'
    },
    {
      image: images.headsetlogo,
      title: 'Breeze Toilet Tissue Soft White 24 Roll',
      cost: '2100.50',
      link: 'https://www.google.com/'
    },
  ];
  
  