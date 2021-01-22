import React from 'react';
import { graphql } from 'gatsby';
import { IndexPageIndexable } from '../models/indexable';
import Paper from '../components/paper/paper';
import Layout from '../components/layout';

export interface IndexPageProps {
  data: {
    allContentfulIndexable: { edges: { node: IndexPageIndexable }[] };
  };
}

const IndexPage = ({
  data: {
    allContentfulIndexable: { edges },
  },
}: IndexPageProps) => {
  return (
    <Layout>
      <section className="papers">
        {edges.map((edge, i) => (
          <Paper paper={edge.node} key={`paper-${i}`} />
        ))}
      </section>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query indexableCollectionQuery {
    allContentfulIndexable {
      edges {
        node {
          slug
          title
          type
          preview {
            file {
              url
            }
            title
          }
        }
      }
    }
  }
`;
