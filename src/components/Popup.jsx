import React, { useState, useEffect } from 'react';

function Popup() {
  const [highlight, setHighlight] = useState('');
  const [savedHighlights, setSavedHighlights] = useState([]);

  useEffect(() => {
    // Load saved highlights from localStorage
    const highlights = JSON.parse(localStorage.getItem('highlights')) || [];
    setSavedHighlights(highlights);
  }, []);

  // Save new highlight to localStorage
  const handleSave = () => {
    if (highlight) {
      const newHighlights = [...savedHighlights, highlight];
      setSavedHighlights(newHighlights);
      localStorage.setItem('highlights', JSON.stringify(newHighlights));
      setHighlight('');
    }
  };

  const handleSummarize = () => {
    alert('Summarize feature coming soon!');
  };

  return (
    <div>
      <h2>Saved Highlights</h2>
      {savedHighlights.length === 0 ? (
        <p>No highlights saved yet!</p>
      ) : (
        <ul id="highlightList">
          {savedHighlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      )}

      <textarea
        value={highlight}
        onChange={(e) => setHighlight(e.target.value)}
        placeholder="Enter your highlight text here"
      />

      <button onClick={handleSave}>Save Highlight</button>

      {savedHighlights.length > 0 && (
        <button onClick={handleSummarize}>Summarize</button>
      )}
    </div>
  );
}

export default Popup;
