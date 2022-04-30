import { Document } from 'mongoose'


export interface AcaoProtocolDocumentMongo extends Document {
  author: string;
  description: string;
  likes: number;
  createdAt?: Date;
  updatedAt?: Date;
}
