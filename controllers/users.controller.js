const login = (reg, res) => {
    res.send("<h1>LogIn Successful!</h1>")
}

const register = (req, res) => {
    res.send("<h1>Register Here!</h1>")
}

module.exports = {
    login,
    register,
}