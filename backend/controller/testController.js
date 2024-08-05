const testController = (req, res) =>{
    res.status(200).send({
        message: "welcome to the test route",
        success: true,
    });
};

module.exports = { testController }