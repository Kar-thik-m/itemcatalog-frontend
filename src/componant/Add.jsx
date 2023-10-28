
import React from 'react';
import { useState } from 'react';
import { backendUrl } from '../../config';
import styles from './AddItems.module.css'; 


const AddItems = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    itemType: '',
    imageUrl: '',
    price: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(
      `${backendUrl}/create`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',

        },
        body: JSON.stringify(formData)
      }

    );
    setFormData({
      itemName: '',
      itemType: '',
      imageUrl: '',
      price: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className={styles.itemform}  onSubmit={handleSubmit}>
      <div>
        <label className={styles.label}><br />
          Item Name:
          <input
            type="text"
            name='itemName'
            value={formData.itemName}
            onChange={handleChange}
            className={styles.input}
            placeholder='itemName'
          />
        </label>
      </div>
      <div>
        <label className={styles.label}><br />
          Image URL:
          <input
            type="text"
            name='imageUrl'
            value={formData.imageUrl}
            onChange={handleChange}
            className={styles.input}
            placeholder='imageUrl'
          />
        </label>
      </div>
      <div>
        <label className={styles.label}><br />
          Item Type:
          <input
            type="text"
            name='itemType'
            value={formData.itemType}
            onChange={handleChange}
            className={styles.input}
            placeholder='only electronics,fashion,furnitures'
          />
        </label>
      </div>
      <div>
        <label className={styles.label}><br />
          Price:
          <input
            type="text"
            name='price'
            value={formData.price}
            onChange={handleChange}
            className={styles.input}
            placeholder='price'
          />
        </label><br />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddItems;
