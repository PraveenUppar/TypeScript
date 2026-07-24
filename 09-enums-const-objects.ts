export {};

// Enums and Const Objects

enum OrderStatus {
  Pending = "pending",
  Shipped = "shipped",
  Delivered = "delivered",
  Cancelled = "cancelled",
}

function printOrderStatus(status: OrderStatus): void {
  console.log(`Order is ${status}`);
}

printOrderStatus(OrderStatus.Pending);

// Many projects prefer const objects for simpler JavaScript output.
const PaymentStatus = {
  Paid: "paid",
  Failed: "failed",
  Refunded: "refunded",
} as const;

type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];

function printPaymentStatus(status: PaymentStatus): void {
  console.log(`Payment is ${status}`);
}

printPaymentStatus(PaymentStatus.Paid);
