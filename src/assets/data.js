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


export const images ={
    img1,

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

}

export  const  products= [
  // laptops
  {
    key: 'L1',
    image: images.galaxyBook,
    title: 'SAMSUNG Galaxy Note book',
    tag:[],
    price: '1300.50',
    sale: '1100.50'
  },
  {
    key: 'L2',
    image: images.mac2016,
    title: 'Apple MacBook Air - 2020',
    tag:[],
    price: '5200.50',
    sale: '4200.50'
  },
  {
    key: 'L3',
    image: images.macpro,
    title: 'Apple MacBook Pro - 2024',
    tag:[],
    price: '1700.50',
    sale: '1500.50'
  },
  {
    key: 'L4',
    image: images.mca2024,
    title: 'Apple MacBook Air - 2024',
    tag:["new"],
    price: '1900.50',
    sale: '1600.50'
  },

  //  phones
  {
    key: 'P1',
    image: images.quantom,
    title: 'Apple',
    tag:["sale"],
    price: '4302.00',
    sale: '4102.00'
  },
  {
    key: 'P2',
    image: images.headsetlogo,
    title: 'Huawei Nova 3',
    tag:["new"],
    price: '1300.50',
    sale: '1100.50'
  },
  {
    key: 'P3',
    image: images.galaxyBook,
    title: 'SAMSUNG-Note 22',
    tag:[],
    price: '6200.50',
    sale: '5800.50'
  },
  {
    key: 'P4',
    image: images.macpro,
    title: '',
    tag:[],
     price: '1200.50',
    sale: '1200.50'
  },

  // headSets
  {
    key: 'H1',
    image: images.quantom,
    title: '',
    tag:["new"],
     price: '1200.50',
    sale: '1200.50'
  },
  {
    key: 'H2',
    image: images.headsetlogo,
    title: '',
    tag:[],
    price: '1200.50',
    sale: '1200.50'
  },
  {
    key: 'H3',
    image: images.galaxyBook,
    title: '',
    tag:["new"],
    price: '1200.50',
    sale: '1200.50'
  },
  {
    key: 'H5',
    image: images.macpro,
    title: '',
    tag:["sale"],
    price: '1200.50',
    sale: '1200.50'
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
  
  