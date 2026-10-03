export default function ProductPreview() {
  return (
    <div className="preview-wrapper">
      {/* Left doodle */}
      <div className="preview-doodle doodle-left-top">
        <span>Stay</span>
        <span>on track!</span>
        <div className="doodle-underline" />
      </div>

      {/* Top-right doodle */}
      <div className="preview-doodle doodle-right-top">
        <div className="doodle-face">☺</div>
        <span>Add</span>
        <span>your tasks</span>
        <span>here</span>
        <div className="doodle-underline" />
      </div>

      {/* Left middle doodle */}
      <div className="doodle-star">☆</div>

      {/* Right middle doodle */}
      <div className="doodle-star doodle-star-right">☆</div>

      {/* Main product */}
      <div className="product-preview">
        <div className="preview-product-header">
          <div>
            <div className="preview-brand-row">
              <h2>Tody</h2>
              <span className="brand-spark">✦</span>
            </div>

            <p>Know what to do.</p>
          </div>

          <div className="preview-user">
            <span>Utkarsh</span>

            <button className="preview-add-button">
              + Add Task
            </button>
          </div>
        </div>

        {/* What's Next */}
        <div className="preview-next">
          <div className="preview-next-header">
            <span>WHAT'S NEXT</span>
            <span className="next-spark">✦</span>
          </div>

          <div className="preview-tags">
            <span>HIGH</span>
            <span>WEEK</span>
          </div>

          <div className="preview-task-title">
            Automation Pipeline demo
          </div>

          <button className="preview-start">
            Start
          </button>

          <div className="paper-plane-doodle">
            ➤
          </div>
        </div>

        {/* Up Next */}
        <div className="preview-up-next">
          <div className="up-next-label">
            UP NEXT
            <span />
          </div>

          <div className="preview-upcoming-task">
            <div className="task-paper-doodle">
              ▤
            </div>

            <div className="upcoming-content">
              <strong>Partnership Policy Review</strong>

              <div className="upcoming-meta">
                <span>MEDIUM</span>
                <span>DAY</span>
                <span>Link</span>
              </div>
            </div>

            <button className="preview-remove">×</button>
          </div>
        </div>
      </div>

      {/* Bottom-left doodle */}
      <div className="preview-doodle doodle-left-bottom">
        <span>Your</span>
        <span>next priority</span>
        <div className="doodle-underline" />
      </div>

      {/* Bottom-right doodle */}
      <div className="preview-doodle doodle-right-bottom">
        <span>One step</span>
        <span>at a time</span>
        <div className="doodle-underline" />
      </div>
    </div>
  );
}