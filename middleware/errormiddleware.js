const errormiddleware = async (error, req, res, next) => {
    console.log(error),
        res.status(500).send({
            success: false,
            message: "something went wrong",
            error
        });
};

export default errormiddleware;