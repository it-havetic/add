import React from 'react'
import { Card } from "antd";
import { Button } from "antd";
const { Meta } = Card;

import { useSelector } from "react-redux";

const ProductItem = () => {

    const items = useSelector((state) => state.cart);


  return (
      <Card
        hoverable
        className="w-full"
        cover={
          <img
            alt="Product 1"
            src="https://via.placeholder.com/500x500.png?text=Product+1"
          />
        }
      >
        <div className="flex justify-between items-end">
          <Meta title="Modern Lamp" description="$150" />
          <Button className="mt-3">Add to cart</Button>
        </div>
      </Card>
  );
}

export default ProductItem