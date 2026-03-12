import React from "react";

export default function OrderCard({orders, updateOrder}) {
  const handleAddProduct = (order) => {
    order.quantity++;
      updateOrder([...orders]);
    }

  const handleRemoveProduct = (order) => {
    if(order.quantity <= 0) return;
    order.quantity--;
    updateOrder([...orders]);
  };
  return (
    <>
      {orders.map((order, index) => {
        return (
          <div className="order" key={index}>
            <div>
              <h4>{order.product}</h4>
              <small>$ {order.price}</small>
            </div>

            <div className="order-quantity">
              <div className={`order-button ${order.quantity <= 0 ? 'disable' : ''}`} onClick={() => handleRemoveProduct(order)}>
                -
              </div>
              <h4>{order.quantity}</h4>
              <div className="order-button" onClick={() => handleAddProduct(order)}>+</div>
            </div>
          </div>      
            );
      })}
    </>
  );
}
