import { useState } from 'react';
import { Clock, Coffee, Utensils, Wine, ShoppingCart, X, Plus, Minus, UtensilsCrossed } from 'lucide-react';

const CateringItems = ({ showConfirmation }) => {
  const [activeTab, setActiveTab] = useState('breakfast');
  const [selectedItems, setSelectedItems] = useState({});
  const [showCart, setShowCart] = useState(false);
  const [orderTotal, setOrderTotal] = useState(0);
  
  const menuItems = {
    breakfast: [
      {
        id: 'continental',
        name: 'Continental Breakfast',
        description: 'Assorted pastries, fresh fruit, yogurt, and coffee',
        price: 15,
        prepTime: '30-45 min'
      },
      {
        id: 'american',
        name: 'American Breakfast',
        description: 'Eggs, bacon, toast, hash browns, and coffee',
        price: 18,
        prepTime: '30-45 min'
      },
      {
        id: 'healthy',
        name: 'Healthy Start',
        description: 'Oatmeal, berries, nuts, and green tea',
        price: 16,
        prepTime: '30-45 min'
      }
    ],
    lunch: [
      {
        id: 'caesar',
        name: 'Caesar Salad',
        description: 'Romaine lettuce, croutons, parmesan cheese, and Caesar dressing',
        price: 14,
        prepTime: '20-30 min'
      },
      {
        id: 'club',
        name: 'Club Sandwich',
        description: 'Turkey, bacon, lettuce, tomato, and mayo on toasted bread',
        price: 16,
        prepTime: '20-30 min'
      },
      {
        id: 'pasta',
        name: 'Pasta Primavera',
        description: 'Pasta with fresh vegetables in a light cream sauce',
        price: 18,
        prepTime: '30-45 min'
      }
    ],
    dinner: [
      {
        id: 'steak',
        name: 'Grilled Steak',
        description: 'Prime beef steak with roasted potatoes and vegetables',
        price: 28,
        prepTime: '40-50 min'
      },
      {
        id: 'salmon',
        name: 'Grilled Salmon',
        description: 'Fresh salmon with rice pilaf and steamed vegetables',
        price: 24,
        prepTime: '30-40 min'
      },
      {
        id: 'chicken',
        name: 'Roasted Chicken',
        description: 'Herb-roasted chicken with mashed potatoes and gravy',
        price: 22,
        prepTime: '40-50 min'
      }
    ],
    drinks: [
      {
        id: 'wine',
        name: 'Wine Bottle',
        description: 'Selection of red or white wine',
        price: 35,
        prepTime: '15-20 min'
      },
      {
        id: 'cocktail',
        name: 'Cocktail',
        description: 'Handcrafted cocktail of your choice',
        price: 12,
        prepTime: '10-15 min'
      },
      {
        id: 'smoothie',
        name: 'Fruit Smoothie',
        description: 'Blended fresh fruits with yogurt',
        price: 8,
        prepTime: '10-15 min'
      }
    ]
  };
  
  const handleQuantityChange = (itemId, value) => {
    setSelectedItems(prev => ({
      ...prev,
      [itemId]: Math.max(0, parseInt(value) || 0)
    }));
  };
  
  const handleIncrement = (itemId) => {
    setSelectedItems(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };
  
  const handleDecrement = (itemId) => {
    if (selectedItems[itemId] > 0) {
      setSelectedItems(prev => ({
        ...prev,
        [itemId]: prev[itemId] - 1
      }));
    }
  };
  
  const handleViewCart = () => {
    let total = 0;
    
    Object.entries(selectedItems).forEach(([itemId, quantity]) => {
      if (quantity > 0) {
        // Find the item in the menu
        let item;
        for (const category in menuItems) {
          const found = menuItems[category].find(item => item.id === itemId);
          if (found) {
            item = found;
            break;
          }
        }
        
        if (item) {
          total += item.price * quantity;
        }
      }
    });
    
    setOrderTotal(total);
    setShowCart(true);
  };
  
  const handlePlaceOrder = () => {
    showConfirmation(
      'Order Confirmation',
      'Your order has been confirmed and will be delivered to your cabin!',
      () => {
        setShowCart(false);
        setSelectedItems({});
      }
    );
  };
  
  const getTabIcon = (tab) => {
    switch (tab) {
      case 'breakfast':
        return <Coffee size={18} />;
      case 'lunch':
        return <Utensils size={18} />;
      case 'dinner':
        return <UtensilsCrossed size={18} />;
      case 'drinks':
        return <Wine size={18} />;
      default:
        return null;
    }
  };
  
  const totalItems = Object.values(selectedItems).reduce((sum, qty) => sum + qty, 0);
  
  const findItemById = (itemId) => {
    for (const category in menuItems) {
      const found = menuItems[category].find(item => item.id === itemId);
      if (found) return found;
    }
    return null;
  };
  
  return (
    <div className="catering-page">
      <div className="catering-content">
        <h1 className="section-title">Catering Services</h1>
        <p className="section-subtitle">Order delicious meals and snacks delivered directly to your cabin</p>
        
        <div className="tabs">
          <div className="tab-list">
            {Object.keys(menuItems).map(tab => (
              <button
                key={tab}
                className={`tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {getTabIcon(tab)}
                <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
              </button>
            ))}
          </div>
          
          <div className="menu-items">
            {menuItems[activeTab].map(item => (
              <div key={item.id} className="menu-item">
                <div className="menu-item-content">
                  <h3 className="menu-item-name">{item.name}</h3>
                  <p className="menu-item-description">{item.description}</p>
                  <div className="menu-item-meta">
                    <div className="prep-time">
                      <Clock size={14} />
                      <span>{item.prepTime}</span>
                    </div>
                  </div>
                </div>
                
                <div className="menu-item-actions">
                  <div className="menu-item-price">${item.price}</div>
                  <div className="quantity-control">
                    <button 
                      className="quantity-btn"
                      onClick={() => handleDecrement(item.id)}
                      disabled={!selectedItems[item.id]}
                    >
                      <Minus size={14} />
                    </button>
                    <input
                      type="number"
                      min="0"
                      value={selectedItems[item.id] || 0}
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                      className="quantity-input"
                    />
                    <button 
                      className="quantity-btn"
                      onClick={() => handleIncrement(item.id)}
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
        
        <div className="order-summary">
          <button 
            className="order-button"
            onClick={handleViewCart}
            disabled={totalItems === 0}
          >
            <ShoppingCart size={18} />
            <span>View Cart ({totalItems})</span>
          </button>
        </div>
      </div>
      
      {showCart && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3 className="modal-title">Your Cart</h3>
              <button 
                className="modal-close"
                onClick={() => setShowCart(false)}
              >
                <X size={18} />
              </button>
            </div>
            <div className="modal-body">
              <div className="cart-items">
                {Object.entries(selectedItems).map(([itemId, quantity]) => {
                  if (quantity <= 0) return null;
                  
                  const item = findItemById(itemId);
                  if (!item) return null;
                  
                  return (
                    <div key={itemId} className="cart-item">
                      <div className="cart-item-info">
                        <div className="cart-item-name">{item.name}</div>
                        <div className="cart-item-price">${item.price.toFixed(2)}</div>
                      </div>
                      <div className="cart-item-quantity">
                        <button 
                          className="quantity-btn"
                          onClick={() => handleDecrement(itemId)}
                        >
                          <Minus size={14} />
                        </button>
                        <span>{quantity}</span>
                        <button 
                          className="quantity-btn"
                          onClick={() => handleIncrement(itemId)}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <div className="cart-item-total">
                        ${(item.price * quantity).toFixed(2)}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="cart-summary">
                <div className="cart-total">
                  <span>Total:</span>
                  <span>${orderTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button 
                className="btn-secondary"
                onClick={() => setShowCart(false)}
              >
                Continue Shopping
              </button>
              <button 
                className="btn-primary"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}
      
      <style jsx>{`
        .catering-page {
          padding: 24px;
        }
        
        .catering-content {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .tabs {
          margin-top: 24px;
        }
        
        .tab-list {
          display: flex;
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 24px;
          overflow-x: auto;
        }
        
        .tab {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
        }
        
        .tab.active {
          border-bottom-color: var(--primary);
          color: var(--primary);
        }
        
        .menu-item-content {
          flex: 1;
        }
        
        .menu-item-name {
          font-weight: 600;
          margin-bottom: 4px;
        }
        
        .menu-item-description {
          color: var(--text-secondary);
          font-size: 14px;
          margin-bottom: 8px;
        }
        
        .menu-item-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 12px;
          color: var(--text-secondary);
        }
        
        .prep-time {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .menu-item-actions {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
        }
        
        .menu-item-price {
          font-weight: 600;
          color: var(--primary);
          font-size: 18px;
        }
        
        .quantity-control {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .quantity-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border-radius: 4px;
          border: 1px solid var(--border-color);
          background: none;
          cursor: pointer;
        }
        
        .quantity-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .quantity-input {
          width: 40px;
          padding: 4px;
          border: 1px solid var(--border-color);
          border-radius: 4px;
          text-align: center;
        }
        
        .order-summary {
          margin-top: 24px;
          display: flex;
          justify-content: flex-end;
        }
        
        .order-button {
          display: flex;
          align-items: center;
          gap: 8px;
          background-color: var(--primary);
          color: white;
          border: none;
          border-radius: 6px;
          padding: 12px 24px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .order-button:hover {
          background-color: var(--primary-dark);
        }
        
        .order-button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }
        
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        
        .modal {
          background-color: white;
          border-radius: 8px;
          width: 90%;
          max-width: 500px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          border-bottom: 1px solid var(--border-color);
        }
        
        .modal-title {
          font-size: 18px;
          font-weight: 600;
          margin: 0;
        }
        
        .modal-close {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .modal-body {
          padding: 16px;
          max-height: 60vh;
          overflow-y: auto;
        }
        
        .cart-items {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 16px;
        }
        
        .cart-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px;
          background-color: #f9f9f9;
          border-radius: 6px;
        }
        
        .cart-item-info {
          flex: 1;
        }
        
        .cart-item-name {
          font-weight: 500;
          margin-bottom: 4px;
        }
        
        .cart-item-price {
          font-size: 14px;
          color: var(--text-secondary);
        }
        
        .cart-item-quantity {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0 16px;
        }
        
        .cart-item-total {
          font-weight: 600;
          color: var(--primary);
        }
        
        .cart-summary {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid var(--border-color);
        }
        
        .cart-total {
          display: flex;
          justify-content: space-between;
          font-weight: 600;
          font-size: 18px;
        }
        
        .cart-total span:last-child {
          color: var(--primary);
        }
        
        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          padding: 16px;
          border-top: 1px solid var(--border-color);
        }
        
        .btn-primary {
          background-color: var(--primary);
          color: white;
          border: none;
          border-radius: 6px;
          padding: 10px 16px;
          font-weight: 500;
          cursor: pointer;
        }
        
        .btn-secondary {
          background-color: transparent;
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          border-radius: 6px;
          padding: 10px 16px;
          font-weight: 500;
          cursor: pointer;
        }
        
        @media (max-width: 768px) {
          .menu-item {
            flex-direction: column;
            gap: 16px;
          }
          
          .menu-item-actions {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default CateringItems;