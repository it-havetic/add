import React from "react";
import { Card } from "antd";
import { Button } from "antd";
const { Meta } = Card;

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/CartSlice";

const Home = () => {
  const items = useSelector((state) => state.allCart);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="container mx-auto grid grid-cols-4 gap-4">
        {items.items.map((item) => (
          <Card
            key={item.id}
            hoverable
            className="w-full "
            cover={
              <img
                className="w-full h-64 object-contain"
                alt="Product 1"
                src={item.image}
              />
            }
          >
            <div className="">
              <Meta title={item.title} description={item.price} />
              <Button
                onClick={() => dispatch(addToCart(item))}
                className="mt-3"
              >
                Add to cart
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
