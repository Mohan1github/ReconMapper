const express = require("expess");

const { comments } = require("../models/comments");
const { Product } = require("../models/productmodel");

const createComment = async (req, res) => {
  const product_id = req.params.prod_id;
  const user = req.user;
  try {
    const newcomment = new comments({
      user_id: user,
      product_id: product_id,
      comment: req.body.comment,
    });

    const saving = await newcomment.save();
    if (saving) {
      const findproduct = await Product.findById({ _id: product_id });
      if (findproduct) {
        const pushing = await findproduct.comments.push(newcomment._id);
        if (pushing) {
          res
            .status(200)
            .json({
              success: true,
              msg: `New comment created on the product:${newproduct._id}`,
            });
        } else {
          res
            .status(400)
            .json({
              success: false,
              msg: "Message id is not saved in the product",
            });
        }
      } else {
        res.status(404).json({ success: false, msg: "Product not found!!" });
      }
    } else {
      res
        .status(400)
        .json({ success: false, msg: "Comment itself creation error!" });
    }
  } catch (err) {
    res.status(500).json({ success: false, msg: "Internal server error!" });
  }
};

const getcomments = async (req, res) => {
  try {
    const getcomments = await Product.findById({
      _id: req.params.product_id,
    }).populate("comments");

    if (getcomments) {
      res.status(200).json({ success: true, msg: getcomments });
    } else {
      res.status(400).json({ success: true, msg: "Something went wrong" });
    }
  } catch (err) {
    res.status(500).json({ success: false, msg: "Internal server error" });
  }
};


const likecomments = async(req,res)=>{
    try{
        const comment = await comments.findById({_id:req.params.id})
        const likes = comment.likes;
        const findone = likes.find(req.user)

        if(findone){
            await likes.delete(req.user).save().then((res)=>{ console.log("like reverted:",res)}).catch(err=>{
                console.log(err)
            })
        }
        else{
            await likes.push(req.user).save().then((res)=>{res.status(200).json({success:true,likeslength:likes.lenght})}).
            catch(err=>{
                res.status(400).json({success:false,msg:"Something went wrong",error:err})
            })
        }
    }
    catch(err){
        res.status(500).json({success:false,msg:"Internal server error!!"})
    }
}

const unlikecomments = async(req,res)=>{
    try{
        const comment = await comments.findById({_id:req.params.id})
        const unlikes = comment.unlikes;
        const findone = unlikes.find(req.user)

        if(findone){
            await unlikes.delete(req.user).save().then((res)=>{ console.log("like reverted:",res)}).catch(err=>{
                console.log(err)
            })
        }
        else{
            await unlikes.push(req.user).save().then((res)=>{res.status(200).json({success:true,likeslength:unlikes.lenght})}).
            catch(err=>{
                res.status(400).json({success:false,msg:"Something went wrong",error:err})
            })
        }
    }
    catch(err){
        res.status(500).json({success:false,msg:"Internal server error!!"})
    }
}

