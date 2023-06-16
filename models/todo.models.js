const mongoose=require("mongoose");
const collection = client.db('Todo_api').collection('todo');
const todoSchema=new mongoose.Schema({
  title:{
    type:String,
    require:true,
  },
  desc:{
    type:String,
    require:true,
  },
  completed:{
    type:Boolean
  }
});

const Todo = mongoose.model("Todo",todoSchema)

module.exports = {
  Todo,
}
collection.insertOne(document, (err, result) => {
    if (err) {
      console.error('Error inserting document:', err);
      return;
    }
    
    console.log('Document inserted successfully:', result.insertedId);
  });


  collection.insertMany(documents, (err, result) => {
    if (err) {
      console.error('Error inserting documents:', err);
      return;
    }
    
    console.log('Documents inserted successfully:', result.insertedCount);
  });


  collection.deleteOne(filter, (err, result) => {
    if (err) {
      console.error('Error deleting document:', err);
      return;
    }
    
    console.log('Document deleted successfully');
  });
  collection.deleteMany(filter, (err, result) => {
    if (err) {
      console.error('Error deleting documents:', err);
      return;
    }
    
    console.log('Documents deleted successfully:', result.deletedCount);
  });