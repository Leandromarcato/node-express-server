const {model,Schema}=require('mongoose')

const tareasSchema= new Schema(
    
    {
        title: {
        type:String, 
        required: true }
        
        ,
        description:{
            type: String,
            require: true
        },

        active:{
            type:Boolean,
            default:true
        },
        Done: {
            type: Boolean,
            default: false
        },
        userId: {
            type: Schema.Types.ObjectId, ref: 'Users'
        },
        categories: [
            { type: Schema.Types.ObjectId, ref: 'Categories' }
        ]
    });
        



        
        
    


module.exports= model("tareas", tareasSchema)