module.exports.home = (req,res)=>{
    return res.render('home',{
        title:'trackerPage',
        bodyContent:'add hobby'
    });
};