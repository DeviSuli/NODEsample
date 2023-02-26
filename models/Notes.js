const mongoose = require("mongoose");
const AutoIncrease = require("mongoose-sequence")(mongoose);

const notesSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    Timestamps: true,
  }
);

notesSchema.plugin(AutoIncrease, {
  inc_field: "ticket ",
  id: "ticketNums",
  start_seq: 500,
});
module.exports = mongoose.model("Note", userSchema);
