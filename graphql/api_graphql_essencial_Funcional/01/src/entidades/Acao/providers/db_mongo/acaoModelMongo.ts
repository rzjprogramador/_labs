import mongoose, { Schema } from 'mongoose'
import { AcaoProtocolDocumentMongo } from '../../protocolos/AcaoDocumentSchemaProtocol'


/* Definir Schema - Utilizando a Interface Protocolo Criada acima */

const acaoModel = new Schema<AcaoProtocolDocumentMongo>(
  {
    author: String,
    description: String,
    likes: {
      type: Number,
      default: 0,
      required: false,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      required: false,
    },

    updatedAt: {
      type: Date,
      default: Date.now,
      required: false,
    },
  },
  {
    timestamps: {},
  }
);

const acaoModelMongo = mongoose.model<AcaoProtocolDocumentMongo>("Acao", acaoModel);

export default acaoModelMongo
