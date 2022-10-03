import React, {useState} from 'react';
import Menu from './Menu';
import Categories from './Categories';

import menu from "./data.js";

import './App.css';

const allCategories = ["all",...new Set(menu.map((cat)=>cat.category))];

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === "all"){
      setMenuItems(menu);
      return;
    }

    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories}></Categories>
        <Menu items={menuItems}></Menu>
      </section>
    </main>
  );
}

export default App;
