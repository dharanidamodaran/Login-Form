import express from "express";
import Register from "../model/user.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();

const saltround = 5;

export const InsertUser = async (req, res) => {
    const data = req.body;
    try {
        const hashpwd = await bcrypt.hash(data.Password, saltround);
        const reg = new Register({
            FName: data.FName,
            LName: data.LName,
            Emailid: data.Emailid,
            Password: hashpwd,
        });
        await reg.register();
        res.status(201).send(reg); // 201 Created
    } catch (err) {
        console.error("Error during user registration:", err);
        res.status(500).send("Error registering user. Please try again later.");
    }
};

export const FetchUser = async (req, res) => {
    try {
        const reg = await Register.find();
        res.status(200).send(reg); // 200 OK
    } catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).send("Error fetching users. Please try again later.");
    }
};

export const Signin = async (req, res) => {
    const data = req.body;
    try {
        const reg = await Register.findOne({ Emailid: data.Emailid });
        if (reg) {
            const token = jwt.sign({ Emailid: data.Emailid }, process.env.SECRETKEY, { expiresIn: '1hr' });
            const campres = await bcrypt.compare(data.Password, reg.Password);
            if (!campres) {
                res.status(401).send("Invalid username or password."); // 401 Unauthorized
            } else {
                res.status(200).send({ token: token }); // 200 OK
            }
        } else {
            res.status(404).send("User not found."); // 404 Not Found
        }
    } catch (err) {
        console.error("Error during user signin:", err);
        res.status(500).send("Error signing in. Please try again later.");
    }
};

