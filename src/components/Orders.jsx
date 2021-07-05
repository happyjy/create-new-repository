import { useEffect, useMemo, useState } from "react";
import useActions from "../hooks/useActions";
import useOrders from "../hooks/useOrders";
import usePrototypes from "../hooks/usePrototypes";

export default function Orders() {
  const orders = useOrders();
  const prototypes = usePrototypes();
  const { remove, removeAll } = useActions();
  
  console.log({orders, prototypes});
  /* 
    # useEffect 사용
      * useMemo 사용하지 않고 useEffect로만 구현
  */
  // const [totalPrice, setTotalPrice] = useState(0);
  // useEffect(() => {
  //   console.log("### ");
  //   const result = orders
  //     .map((order) => {
  //       const { id, quantity } = order;
  //       const prototype = prototypes.find((p) => p.id === id);
  //       return prototype.price * quantity;
  //     })
  //     .reduce((acc, curr) => acc + curr, 0);
  //   setTotalPrice(result);
  // }, [orders, prototypes]);

  /* 
    # useMemo 사용
  */
  const totalPrice = useMemo(() => {
    return orders
      .map((order) => {
        const { id, quantity } = order;
        const prototype = prototypes.find((p) => p.id === id);
        return prototype.price * quantity;
      })
      .reduce((acc, curr) => acc + curr, 0);
  }, [orders, prototypes]);

  if (orders.length === 0) {
    return (<aside>
      <div className="empty">
        <div className="title">You don't have any orders</div>
        <div className="subtitle">Click on a + to add an order</div>
      </div>
    </aside>)
  }

  return (
    <aside>
      <div className="order">
        <div className="body">
          {orders.map((order) => {
            const { id } = order;
            const prototype = prototypes.find((p) => p.id === id);
            const click = () => {
              remove(id);
            };
            return (
              <div className="item" key={id}>
                <div className="img">
                  <video src={prototype.thumbnail} />
                </div>
                <div className="content">
                  <p className="title">
                    {prototype.title} x {order.quantity}
                  </p>
                </div>
                <div className="action">
                  <div className="price">
                    $ {prototype.price * order.quantity}
                  </div>
                  <button className="btn btn--link" onClick={click}>
                    <i className="icon icon--cross" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="total">
          <hr />
          <div className="item">
            <div className="content">Total</div>
            <div className="action">
              <div className="price">$ {totalPrice}</div>
            </div>
            <button className="btn btn--link" onClick={removeAll}>
              <i className="icon icon--delete" />
            </button>
          </div>
          <button
            className="btn btn--secondary"
            style={{ width: "100%", marginTop: 10 }}
          >
            Checkout
          </button>
        </div>
      </div>
    </aside>
  );
}