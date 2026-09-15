
import Cart from "../models/cart.model.js";

// Calculate total
const calculateTotal = (items) => {
  return items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

// GET /api/cart
export const getCart = async (req, res) => {
  try {
    const userId = req.userId;

    let cart = await Cart.findOne({ userId });

    // Agar cart nahi hai to empty cart create karo
    if (!cart) {
      cart = await Cart.create({
        userId,
        items: [],
        totalAmount: 0,
      });
    }

    return res.status(200).json({
      success: true,
      cart: cart.items,
      totalAmount: cart.totalAmount,
    });
  } catch (error) {
    console.error("Get Cart Error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to fetch cart",
    });
  }
};

// POST /api/cart/add
export const addToCart = async (req, res) => {
  try {
    const userId = req.userId;

    const {
      id,
      name,
      price,
      image,
      category,
      brand,
    } = req.body;

    if (!id || !name || price === undefined) {
      return res.status(400).json({
        success: false,
        message: "Product details are required",
      });
    }

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({
        userId,
        items: [],
        totalAmount: 0,
      });
    }

    const existingItem = cart.items.find(
      (item) => item.productId === String(id)
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.items.push({
        productId: String(id),
        name,
        price: Number(price),
        image: image || "",
        category: category || "",
        brand: brand || "",
        quantity: 1,
      });
    }

    cart.totalAmount = calculateTotal(cart.items);

    await cart.save();

    return res.status(200).json({
      success: true,
      message: "Item added to cart",
      cart: cart.items,
      totalAmount: cart.totalAmount,
    });
  } catch (error) {
    console.error("Add To Cart Error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to add item to cart",
    });
  }
};

// DELETE /api/cart/remove/:productId
export const removeFromCart = async (req, res) => {
  try {
    const userId = req.userId;
    const { productId } = req.params;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    cart.items = cart.items.filter(
      (item) => item.productId !== String(productId)
    );

    cart.totalAmount = calculateTotal(cart.items);

    await cart.save();

    return res.status(200).json({
      success: true,
      message: "Item removed from cart",
      cart: cart.items,
      totalAmount: cart.totalAmount,
    });
  } catch (error) {
    console.error("Remove From Cart Error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to remove item",
    });
  }
};

// PATCH /api/cart/increase/:productId
export const increaseQuantity = async (req, res) => {
  try {
    const userId = req.userId;
    const { productId } = req.params;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    const item = cart.items.find(
      (item) => item.productId === String(productId)
    );

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Product not found in cart",
      });
    }

    item.quantity += 1;

    cart.totalAmount = calculateTotal(cart.items);

    await cart.save();

    return res.status(200).json({
      success: true,
      message: "Quantity increased",
      cart: cart.items,
      totalAmount: cart.totalAmount,
    });
  } catch (error) {
    console.error("Increase Quantity Error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to increase quantity",
    });
  }
};

// PATCH /api/cart/decrease/:productId
export const decreaseQuantity = async (req, res) => {
  try {
    const userId = req.userId;
    const { productId } = req.params;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    const item = cart.items.find(
      (item) => item.productId === String(productId)
    );

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Product not found in cart",
      });
    }

    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      cart.items = cart.items.filter(
        (cartItem) => cartItem.productId !== String(productId)
      );
    }

    cart.totalAmount = calculateTotal(cart.items);

    await cart.save();

    return res.status(200).json({
      success: true,
      message: "Quantity decreased",
      cart: cart.items,
      totalAmount: cart.totalAmount,
    });
  } catch (error) {
    console.error("Decrease Quantity Error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to decrease quantity",
    });
  }
};

// DELETE /api/cart/clear
export const clearCart = async (req, res) => {
  try {
    const userId = req.userId;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    cart.items = [];
    cart.totalAmount = 0;

    await cart.save();

    return res.status(200).json({
      success: true,
      message: "Cart cleared",
      cart: [],
      totalAmount: 0,
    });
  } catch (error) {
    console.error("Clear Cart Error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to clear cart",
    });
  }
};

