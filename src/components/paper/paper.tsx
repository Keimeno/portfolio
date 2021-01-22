import React from 'react';
import { Link } from 'gatsby';
import { IndexPageIndexable } from '../../models/indexable';
import styles from './paper.module.css';

export interface PaperProps {
  paper: IndexPageIndexable;
}

const Paper = ({ paper }: PaperProps) => {
  return (
    <Link to={`/paper/${paper.slug}`}>
      <div className={styles.wrapper}>
        <p className={styles.title}>{paper.title}</p>
      </div>
    </Link>
  );
};

export default Paper;
