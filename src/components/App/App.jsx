export const App = () => {
  return (
    <div>
      <section>
        <h2>Please leave feedback</h2>
        <div>
          <button type="button">Good</button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </div>
      </section>
      <section>
        <h2>Statistics</h2>
        <p>
          Goog: <span>0</span>
        </p>
        <p>
          Neutral: <span>0</span>
        </p>
        <p>
          Bad: <span>0</span>
        </p>
      </section>
    </div>
  );
};
