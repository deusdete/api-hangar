const mongoose = require("../database");

const PostSchema = new mongoose.Schema({
  posted_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true
  },
  image: {
    type: String,
  },
  comments: [{
    text: String,
    posted_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  }],
  user_bookmark_reaction: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }
  ],
  user_interest_reaction: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }
  ],
  user_star_reaction: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }
  ],
  title: String,
  text: {
    type: String,
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
},{
  toJSON: {
    virtuals: true
  }
});

PostSchema.virtual('image_url').get(function() {
  return `http://localhost:3333/uploads/${this.image}`
})

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;