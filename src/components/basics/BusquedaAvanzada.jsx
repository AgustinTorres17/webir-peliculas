// AdvancedSearchPage.jsx
import React from "react";

const AdvancedSearchPage = ({ onClose }) => {
  return (
    <div className="bg-white p-8 rounded-lg">
      <button className="absolute top-2 right-2" onClick={onClose}>
        X
      </button>
      {/* Contenido de la búsqueda avanzada */}
    </div>
  );
};

export default AdvancedSearchPage;
