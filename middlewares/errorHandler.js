const errorHandler = (err, req, res, next) => {
    if(err){
        console.log(err);
        res.send({'Error': err.message})
    } else {
        next();
    }
}

export default errorHandler