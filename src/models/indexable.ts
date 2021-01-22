import { Asset } from './asset';
import { Paper } from './paper';

export enum IndexableType {}

export interface Indexable {
  slug: string;
  title: string;
  type: IndexableType;
  preview: Asset;
  item: Paper;
}

export type IndexPageIndexable = Omit<Indexable, 'item'>;
