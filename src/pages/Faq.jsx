import { Collapse } from "antd";
const text = `
  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
   sit amet..", comes from a line in section 1.10.32.
`;
const items = [
  {
    key: '1',
    label: 'Delivery and collection information',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'What do I need to know about ordering online?',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'Returns and refunds',
    children: <p>{text}</p>,
  },
  {
    key: '4',
    label: 'Managing my account',
    children: <p>{text}</p>,
  },
  {
    key: '5',
    label: 'Technical issues',
    children: <p>{text}</p>,
  },
  {
    key: '6',
    label: 'Terms and Conditions',
    children: <p>{text}</p>,
  },
  {
    key: '7',
    label: 'Ratings and reviews',
    children: <p>{text}</p>,
  },
];

const Faq = () => {
  return (
    <div className="block faqPage">
      <div className="container">
        <h3>FAQs</h3>

     <Collapse accordion items={items} defaultActiveKey={['1']}  />
      </div>
    </div>
  )
}

export default Faq