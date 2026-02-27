// 📝 Practical Project Example

//  Let's build a complete example for a blog system:

// postSchema.js
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  comments: [
    {
      user: String,
      text: String,
      date: { type: Date, default: Date.now },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

// ===== INSTANCE METHODS (per post) =====
postSchema.methods = {
  // View a post
  view() {
    this.views += 1;
    return this.save();
  },

  // Like a post
  like() {
    this.likes += 1;
    return this.save();
  },

  // Add a comment
  addComment(user, text) {
    this.comments.push({ user, text });
    return this.save();
  },

  // Get summary
  getSummary() {
    return {
      title: this.title,
      author: this.author,
      views: this.views,
      likes: this.likes,
      comments: this.comments.length,
    };
  },
};

// ===== STATIC METHODS (all posts) =====
postSchema.statics = {
  // Find popular posts
  async getPopular(limit = 10) {
    return this.find({ views: { $gt: 100 } })
      .sort({ views: -1 })
      .limit(limit);
  },

  // Find posts by author
  findByAuthor(author) {
    return this.find({ author }).sort({ createdAt: -1 });
  },

  // Get statistics
  async getStats() {
    const total = await this.countDocuments();
    const totalViews = await this.aggregate([
      { $group: { _id: null, total: { $sum: "$views" } } },
    ]);
    const mostViewed = await this.findOne().sort({ views: -1 });

    return {
      totalPosts: total,
      totalViews: totalViews[0]?.total || 0,
      mostViewedPost: mostViewed?.title,
    };
  },

  // Search posts
  search(query) {
    return this.find({
      $or: [
        { title: new RegExp(query, "i") },
        { content: new RegExp(query, "i") },
      ],
    });
  },
};

const Post = mongoose.model("Post", postSchema);

// ===== USING THE POST SYSTEM =====
async function runBlog() {
  // Create a post
  const post = new Post({
    title: "My First Post",
    content: "Hello World!",
    author: "Dagim",
  });
  await post.save();

  // Use instance methods
  await post.view(); // Increment views
  await post.like(); // Add a like
  await post.addComment("Alice", "Great post!");

  console.log(post.getSummary());
  // { title: "My First Post", author: "Dagim", views: 1, likes: 1, comments: 1 }

  // Use static methods
  const popular = await Post.getPopular();
  console.log("Popular posts:", popular.length);

  const dagimsPosts = await Post.findByAuthor("Dagim");
  console.log(`Dagim wrote ${dagimsPosts.length} posts`);

  const stats = await Post.getStats();
  console.log("Blog stats:", stats);

  const searchResults = await Post.search("Hello");
  console.log(`Found ${searchResults.length} posts matching "Hello"`);
}
