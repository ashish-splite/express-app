import User from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

const login = async (req, res) => {
    const { username, password } = req;
    const JWT_SECRET = process.env.JWT_SECRET;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            res.status(404).json({
                error: 'Invalid credentials',
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            res.status(404).json({
                error: 'Invalid credentials',
            })
        }

        const jwtToken = await jwt.sign(user, JWT_SECRET, { expiresIn: '1h' });

        return res.json({ jwtToken });

    } catch (error) {
        res.json({
            error: 'Login failed',
            details: error
        })
    }

}

const register = async(req, res)=>{
    const {username, password} = req.body;

    const hashedPassword = bcrypt.hash(password, 10);

    User.create({username, hashedPassword});

    const jwtToken = await jwt.sign(user, JWT_SECRET, { expiresIn: '1h' });

    return res.json({

    })

}