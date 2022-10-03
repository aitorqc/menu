import React from 'react'

export default function Categories({ filterItems, categories }) {
    return (
        <div className="btn-container">
            {categories.map((cat, index) => {
                return (
                    <button key={index} className="filter-btn" onClick={() => filterItems(cat)}>{cat}</button>
                )
            })}
        </div>
    )
}
