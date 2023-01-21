
const usermodule=require('../module/usertable');

exports.addpostdata=(async(req,res,next)=>{
    // const {uname,uemail,upassword}=req.body;
    //console.log("emildi"+req.body.emailid);
   await usermodule.count({where:{useremailid:req.body.emailid}})
    .then(count=>{
        console.log('cout'+count);
        if(count>0)
        {
            console.log("email id duplicate");
            return res.json(true);
        }
        else
        {
            usermodule.create({
                username:req.body.username,
                useremailid:req.body.emailid,
                userpass:req.body.password,
            }).then((response)=>{
                 return res.json(false);
            });
        }
    });
    
        // try {
        //     usermodule.findAll({where:{useremailid:req.body.emailid}})
        //     .then((response)=>{
        //         console.log("emailids"+response);
        //         if(response)
        //         {

        //              console.log("true"+response);
        //             usermodule.create({
        //                 username:req.body.username,
        //                 useremailid:req.body.emailid,
        //                 userpass:req.body.password,
        //             }).then((response)=>{
        //             return res.json(false);
        //             }).catch(error=>{
        //                 console.log("jdkfjdjf"+error);
        //             })
        //         }
        //         else
        //         {
        //             console.log("ddddd"+response);
        //             res.json(true);
        //         }
        // }).catch((error)=>{
        //     console.log("jdkfjdjf1"+error);
        // })
        
    // }catch (error) {
    //    console.log("errrp------"+error);
    // }
});
