import css from "./VoteStats.module.css";

interface VoteStats {
  good: number;
  bad: number;
  neutral: number;
  totalVotes: number;
  positiveRate: number;
}

const VoteStats = ({
  good,
  bad,
  neutral,
  totalVotes,
  positiveRate,
}: VoteStats) => {
  return (
    <div className={css["voteStats"]}>
      <div className={css.container}>
        <p className={css.stat}>
          Good: <strong>{good}</strong>
        </p>
        <p className={css.stat}>
          Neutral: <strong>{neutral}</strong>
        </p>
        <p className={css.stat}>
          Bad: <strong>{bad}</strong>
        </p>
        <p className={css.stat}>
          Total: <strong>{totalVotes}</strong>
        </p>
        <p className={css.stat}>
          Positive: <strong>{positiveRate}%</strong>
        </p>
      </div>
    </div>
  );
};

export default VoteStats;
