const express = require('express');
const connection = require('../config/connection');
const User = require('../models/User');

const getData = async (req, res) => {
    try {
      const [rows, fields] = await connection.execute('SELECT * FROM users');

      // Map database rows to User model instances
    const users = rows.map(row => new User(row.id, row.FullName, row.UserName));

    console.log(users);
    res.status(200).json(users);

      res.status(200).json(rows);
    } catch (err) {
      console.error(err);
      // Send an error response only if a successful response hasn't been sent already
      if (!res.headersSent) {
        res.status(500).json({ error: 'Internal Server Error', message: err.message });
      }
    }
 };

module.exports = {
  getData,
};
