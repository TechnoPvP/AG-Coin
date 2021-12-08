import { Schema, model, SchemaDefinition } from 'mongoose';

interface Support {
  slug: string;
  title: string;
  content: string;
  topics: string[];
  views: number;
}

const supportSchema = new Schema<SchemaDefinition<Support>>({
    slug: {
        type: String,
        required: true,
        unique: true
    },
    title: {
      type: String,
      required: true,
      min: 2
    },
    content: {
      type: String,
      required: true,
      min: 10,
    },
    topics: {
      type: [String],
      required: false,
      default: () => {return null}
    },
    views: Number
});


export default model('support', supportSchema);;